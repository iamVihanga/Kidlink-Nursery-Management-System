import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "sonner";
import { useId } from "react";
import { CreateNurserySchema } from "../schemas/create-nursery";
import { authClient } from "@/lib/auth-client";
import { toKebabCase } from "@/lib/utils";
import { MediaFile, MediaUploadPaths } from "@/modules/media/types";
import { getMediaType } from "@/modules/media/utils";
import { useMediaUpload } from "@/modules/media/hooks/useMediaUpload";

export const useUpdateNursery = () => {
  const queryClient = useQueryClient();
  const toastId = useId();
  const { upload } = useMediaUpload();

  const mutation = useMutation({
    mutationFn: async (values: CreateNurserySchema & { id: string }) => {
      const finalValues = {
        ...values,
        image: values.image instanceof File ? values.image : ""
      };

      //   Implement image upload process
      const imageFile = finalValues.image;
      const acceptedTypes = ["image"];
      let uploadResult: MediaFile | null = null;

      if (imageFile instanceof File) {
        const type = getMediaType(imageFile.type);

        if (!acceptedTypes.includes(type)) {
          throw new Error("File type not supported");
        }

        uploadResult = await upload({
          file: imageFile,
          type: type,
          path: MediaUploadPaths.ORGANIZATIONS
        });
      }

      const { data, error } = await authClient.organization.update({
        data: {
          name: finalValues.name,
          logo: uploadResult?.url || undefined,
          metadata: {
            description: finalValues.description
          },
          slug: toKebabCase(finalValues.name)
        },
        organizationId: finalValues.id
      });

      if (error) throw new Error(error.message);

      return data;
    },
    onMutate: () => {
      toast.loading("Updating nursery...", { id: toastId });
    },
    onSuccess: () => {
      toast.success("Nursery updated successfully !", { id: toastId });
      queryClient.invalidateQueries({ queryKey: ["nurseries"] });
    },
    onError: (error) => {
      toast.error(error.message || "Failed to update nursery", {
        id: toastId
      });
    }
  });

  return mutation;
};
