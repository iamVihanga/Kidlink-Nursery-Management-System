import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "sonner";
import { useId } from "react";
import { CreateNurserySchema } from "../schemas/create-nursery";
import { authClient } from "@/lib/auth-client";
import { toKebabCase } from "@/lib/utils";

import { getMediaType } from "@/modules/media/utils";
import { MediaFile, MediaUploadPaths } from "@/modules/media/types";
import { useMediaUpload } from "@/modules/media/hooks/useMediaUpload";

export const useCreateClass = () => {
  const queryClient = useQueryClient();
  const toastId = useId();
  const { upload } = useMediaUpload();

  const mutation = useMutation({
    mutationFn: async (values: CreateNurserySchema) => {
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

        console.log("Upload Result", { uploadResult });
      }

      const { data, error } = await authClient.organization.create({
        name: finalValues.name,
        slug: toKebabCase(finalValues.name),
        logo: uploadResult?.url || undefined,
        metadata: {
          description: finalValues.description
        }
      });

      if (error) throw new Error(error.message);

      return data;
    },
    onMutate: () => {
      toast.loading("Creating nursery...", { id: toastId });
    },
    onSuccess: () => {
      toast.success("Nursery created successfully !", { id: toastId });
      queryClient.invalidateQueries({ queryKey: ["nurseries"] });
    },
    onError: (error) => {
      toast.error(error.message || "Failed to create nursery", {
        id: toastId
      });
    }
  });

  return mutation;
};
