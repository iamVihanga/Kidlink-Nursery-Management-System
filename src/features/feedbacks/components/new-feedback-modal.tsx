"use client";
import React, { useEffect, useState } from "react";
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
  createFeedbackSchema,
  type CreateFeedbackSchema
} from "../schemas/create-feedback";

import { useCreateFeedback } from "../api/use-create-feedback";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { ChildrenDropdown } from "@/features/children/components/children-dropdown";

interface AddNewFeedbackProps {
  childId?: string;
}

export function AddNewFeedback({ childId }: AddNewFeedbackProps) {
  const { data: session, isPending: sessionPending } = authClient.useSession();

  const { isPending, mutate } = useCreateFeedback();

  const [open, setOpen] = useState<boolean>(false);

  const form = useForm<CreateFeedbackSchema>({
    resolver: zodResolver(createFeedbackSchema),
    defaultValues: {
      childId: childId || "",
      content: "",
      rating: 0,
      teacherId: ""
    }
  });

  useEffect(() => {
    if (childId) {
      form.setValue("childId", childId);
    }
  }, []);

  const onSubmit = async (values: CreateFeedbackSchema) => {
    const member = await authClient.organization.getActiveMember();

    if (member.error || member.data.role === "member") {
      return;
    }

    // Ensure rating is a number
    values.rating = Number(values.rating);
    values.teacherId = member.data.id;

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
          Add new Feedback
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[425px]"
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle>Create new Feedback</DialogTitle>
          <DialogDescription>
            This is the form to create a new feedback. Please fill in all the
            required fields.
          </DialogDescription>
        </DialogHeader>

        {/* Dialog Content */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-y-5 mt-2">
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content</FormLabel>
                    <FormControl>
                      <Textarea {...field} placeholder="Lorem ipsum" />
                    </FormControl>

                    <FormMessage {...field} />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="childId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Child</FormLabel>
                    <FormControl>
                      <ChildrenDropdown
                        value={field.value}
                        onChange={field.onChange}
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
                Send Feedback
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
