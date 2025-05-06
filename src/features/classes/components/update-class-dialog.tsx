"use client";

import React, { useEffect, useState, useTransition } from "react";
import { EditIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import {
  updateClassSchema,
  type UpdateClassSchema
} from "@/features/classes/schemas/update-class";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";

import { useClassesGridFilters } from "./classes-grid/use-classes-grid-filters";
import { authClient } from "@/lib/auth-client";
import { useGetClass } from "@/features/classes/api/use-get-class-by-id";
import { useUpdateClass } from "@/features/classes/api/use-update-class";
import { TeachersDropdown } from "@/features/teachers/components/teachers-dropdown";

type Props = {
  className?: string;
};

export function UpdateClass({}: Props) {
  const { mutate: mutateFetching } = useGetClass();
  const { mutate: mutateUpdate, isPending: isUpdating } = useUpdateClass();

  const { updateId, setUpdateId } = useClassesGridFilters();
  const [open, setOpen] = useState<boolean>(false);
  const [initializing, startInitialization] = useTransition();
  const [hasAccess, setHasAccess] = useState<boolean>(false);

  const form = useForm<UpdateClassSchema>({
    resolver: zodResolver(updateClassSchema),
    defaultValues: {
      name: "",
      description: "",
      organizationId: "",
      teacherId: ""
    }
  });

  useEffect(() => {
    if (!open) setUpdateId(null);
  }, [open]);

  useEffect(() => {
    if (updateId) {
      setOpen(true);
      initializeClass();
    } else {
      setOpen(false);
    }
  }, [updateId]);

  const initializeClass = () => {
    startInitialization(async () => {
      // Check permissions
      const { data } = await authClient.organization.hasPermission({
        permission: {
          class: ["update"]
        }
      });

      setHasAccess(data?.success || false);

      // Fetch class data
      mutateFetching(
        { id: updateId },
        {
          onSuccess: (data) => {
            form.reset({
              name: data.name,
              description: data?.description || "",
              organizationId: data?.organizationId || "",
              teacherId: data?.teacherId || ""
            });
          }
        }
      );
    });
  };

  const handleUpdateClass = (values: UpdateClassSchema) => {
    mutateUpdate(
      { id: updateId, values },
      {
        onSuccess: () => {
          // Close the dialog after successful submission
          setOpen(false);

          // Reset form after submission
          form.reset();
        }
      }
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px] h-fit">
        <DialogHeader>
          <DialogTitle>Update Class</DialogTitle>
          <DialogDescription>
            Fill the following form for update class.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="flex-1">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleUpdateClass)}
              className="px-2"
            >
              {initializing ? (
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <Skeleton className="w-40 h-4" />
                    <Skeleton className="w-full h-8" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="w-40 h-4" />
                    <Skeleton className="w-full h-8" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="w-40 h-4" />
                    <Skeleton className="w-full h-36" />
                  </div>
                  <div className="mt-2 flex items-center justify-end gap-2">
                    <Skeleton className="w-32 h-9"></Skeleton>
                    <Skeleton className="w-40 h-9"></Skeleton>
                  </div>
                </div>
              ) : !hasAccess ? (
                <div className="flex items-center flex-col w-full h-full flex-1">
                  <div className="space-y-1 text-center">
                    <h2 className="text-lg font-semibold">Permission Denied</h2>
                    <p className="text-sm text-foreground/10">
                      {`You don't have permission to update lesson.`}
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="grid gap-4 py-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Title</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Enter lesson title"
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Write lesson short description"
                              className="resize-none"
                              rows={5}
                              {...field}
                              value={field.value as string}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="teacherId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Teacher</FormLabel>
                          <FormControl>
                            {field.value && (
                              <TeachersDropdown
                                value={field.value}
                                onChange={field.onChange}
                              />
                            )}
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button type="button" variant="secondary">
                        Cancel
                      </Button>
                    </DialogClose>

                    <Button
                      type="submit"
                      icon={<EditIcon className="size-4" />}
                      loading={isUpdating}
                    >
                      Update Class
                    </Button>
                  </DialogFooter>
                </>
              )}
            </form>
          </Form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
