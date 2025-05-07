"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusIcon } from "lucide-react";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
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
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  createBadgeSchema,
  type CreateBadgeSchema
} from "../schemas/create-badge";

import { useCreateBadge } from "../api/use-create-badge";
import { Skeleton } from "@/components/ui/skeleton";

import { MediaUploader } from "@/modules/media/components/MediaUploader";
import { MediaUploadPaths } from "@/modules/media/types";

export function AddNewBadge() {
  const { data: session, isPending: sessionPending } = authClient.useSession();
  const { isPending, mutate } = useCreateBadge();

  const [open, setOpen] = useState<boolean>(false);

  const form = useForm<CreateBadgeSchema>({
    resolver: zodResolver(createBadgeSchema),
    defaultValues: {
      name: "",
      description: "",
      imageUrl: ""
    }
  });

  const onSubmit = (values: CreateBadgeSchema) => {
    mutate(
      { values },
      {
        onSuccess() {
          form.reset();
          setOpen(false);
        }
      }
    );
  };

  if (sessionPending) {
    return <Skeleton className="h-8 w-40" />;
  }

  if (session?.user.role !== "admin") {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon className="size-3" />
          Add new Badge
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[425px]"
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle>Create new Badge</DialogTitle>
          <DialogDescription>
            Fill the following details to create new badge.
          </DialogDescription>
        </DialogHeader>

        {/* Dialog Content */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-y-5 mt-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter badge name" />
                    </FormControl>

                    <FormMessage {...field} />
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
                      <Input
                        {...field}
                        value={field.value!}
                        placeholder="Badge description"
                      />
                    </FormControl>

                    <FormMessage {...field} />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Badge</FormLabel>
                    <FormControl>
                      <MediaUploader
                        onUpload={(result) => field.onChange(result.url)}
                        onError={(err) => console.log(err)}
                        acceptedTypes={["image"]}
                        path={MediaUploadPaths.BADGES}
                        maxSize={4 * 1024 * 1024}
                      />
                    </FormControl>

                    <FormMessage {...field} />
                  </FormItem>
                )}
              />
            </div>

            <Separator className="my-4" />

            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" loading={isPending}>
                Create Badge
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
