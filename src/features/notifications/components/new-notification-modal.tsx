"use client";

import React, { useEffect, useState } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import {
  sendNotificationSchema,
  type SendNotification
} from "../schemas/send-notification";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusIcon } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useSendNotification } from "../api/use-send-notification";
import { MediaUploader } from "@/modules/media/components/MediaUploader";
import { MediaUploadPaths } from "@/modules/media/types";
import { toast } from "sonner";

// Import our new components
import { RecipientsDropdown } from "./recipients-dropdown";
import { TagsDropdown } from "./tags-dropdown";

export function NewNotificationModal() {
  const [access, setAccess] = useState<boolean>(false);
  const [checkingAccess, setCheckingAccess] = useState<boolean>(true);
  const [open, setOpen] = useState(false);
  const session = authClient.useSession();
  const { mutate, isPending } = useSendNotification();

  useEffect(() => {
    checkAccess();
  }, [session]);

  const checkAccess = async () => {
    if (!session.isPending || !session.error) {
      setCheckingAccess(true);
      const activeOrg = await authClient.organization.getActiveMember();

      if (activeOrg.error || !activeOrg.data) {
        setAccess(false);
        return;
      }

      if (activeOrg.data.role === "owner" || activeOrg.data.role === "admin") {
        setAccess(true);
      }
      setCheckingAccess(false);
    }
  };

  const form = useForm<SendNotification>({
    resolver: zodResolver(sendNotificationSchema),
    defaultValues: {
      content: "",
      image: "",
      tags: [],
      recipients: []
    }
  });

  function onSubmit(values: SendNotification) {
    // console.log(values);

    mutate(values, {
      onSuccess: () => {
        setOpen(false);
        form.reset();
      }
    });
  }

  if (checkingAccess) {
    return <Skeleton className="h-8 w-32 rounded-md" />;
  }

  if (!access) return <></>;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)} icon={<PlusIcon />}>
          Send Notification
        </Button>
      </DialogTrigger>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>New Notification</DialogTitle>
              <DialogDescription>
                {`Send new notification by selecting recipients & adding content`}
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col gap-4 py-4">
              <FormField
                control={form.control}
                name="recipients"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Recipients</FormLabel>
                    <FormControl>
                      <RecipientsDropdown
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tags</FormLabel>
                    <FormControl>
                      <TagsDropdown
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Separator className="my-2" />

              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type your message here..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Attachment (Optional)</FormLabel>
                    <FormControl>
                      <MediaUploader
                        acceptedTypes={["image"]}
                        path={MediaUploadPaths.ORGANIZATIONS}
                        onUpload={(file) => {
                          field.onChange(file.url);
                        }}
                        onError={(error) => {
                          toast.error("Failed to upload image", {
                            description: error.message
                          });
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" type="button">
                  Cancel
                </Button>
              </DialogClose>
              <Button
                type="submit"
                onClick={form.handleSubmit(onSubmit)}
                loading={isPending}
                disabled={isPending}
              >
                Send Notification
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Form>
    </Dialog>
  );
}
