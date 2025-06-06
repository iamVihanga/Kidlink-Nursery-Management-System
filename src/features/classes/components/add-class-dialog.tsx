"use client";

import React, { useState } from "react";
import { PlusCircleIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "@/lib/utils";
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
import {
  createClassSchema,
  type CreateClassSchema
} from "@/features/classes/schemas/create-class";
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

import { TeachersDropdown } from "@/features/teachers/components/teachers-dropdown";
import { useCreateClass } from "@/features/classes/api/use-add-class";
import { NurserySwitcher } from "@/features/nurseries/components/nursery-switcher";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

type Props = {
  className?: string;
};

export function AddClassDialog({ className }: Props) {
  const { data: session, isPending: sessionPending } = authClient.useSession();
  const { mutate, isPending } = useCreateClass();
  const [open, setOpen] = useState<boolean>(false);

  const form = useForm<CreateClassSchema>({
    resolver: zodResolver(createClassSchema),
    defaultValues: {
      name: "",
      description: "",
      organizationId: "",
      teacherId: ""
    }
  });

  const handleCreateClass = (values: CreateClassSchema) => {
    if (!values.organizationId) {
      if (sessionPending || !session?.session) return;

      if (!session.session.activeOrganizationId) {
        toast.error("Please switch to a nursery first");
        return;
      }

      values.organizationId = session.session.activeOrganizationId;
    }

    mutate(values, {
      onSuccess: () => {
        // Close the dialog after successful submission
        setOpen(false);
        // Reset form after submission
        form.reset();
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className={cn(className)}
          icon={<PlusCircleIcon className="size-4" />}
        >
          Add new Class
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] h-fit">
        <DialogHeader>
          <DialogTitle>Add new Class</DialogTitle>
          <DialogDescription>
            Fill the following form for add a new class.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="flex-1">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleCreateClass)}
              className="px-2"
            >
              <div className="grid gap-4 py-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter class name" />
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
                          placeholder="Write class description"
                          className="resize-none"
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
                      <FormLabel>Lead Teacher</FormLabel>
                      <FormControl>
                        <TeachersDropdown
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <div className="space-y-2">
                  <FormLabel>Nursery</FormLabel>
                  <div className="border rounded-md">
                    <NurserySwitcher />
                  </div>
                </div>
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Cancel
                  </Button>
                </DialogClose>

                <Button
                  type="submit"
                  loading={isPending}
                  disabled={sessionPending}
                >
                  Create Class
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
