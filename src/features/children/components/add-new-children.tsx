"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, PlusIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { toast } from "sonner";

import { useCreateChild } from "../api/use-create-child";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
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
  createChildSchema,
  type CreateChildSchema
} from "@/features/children/schemas/create-child";
import { cn } from "@/lib/utils";
import { NurserySwitcher } from "@/features/nurseries/components/nursery-switcher";
import { authClient } from "@/lib/auth-client";
import { ParentsDropdown } from "@/features/parents/components/parents-dropdown";

export function AddNewChildren() {
  const { data: session, isPending: sessionPending } = authClient.useSession();
  const { mutate, isPending } = useCreateChild();
  const [open, setOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(createChildSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: new Date(),
      parentId: "",
      nurseryId: ""
    }
  });

  const onSubmit = async (data: CreateChildSchema) => {
    if (data?.parentId === "") {
      if (!session?.user) return;

      data.parentId = session.user.id;
    }

    if (data?.nurseryId === "") {
      if (!session?.session) return;

      if (!session.session.activeOrganizationId) {
        toast.error("Please select a nursery first.");
        return;
      }

      data.nurseryId = session.session.activeOrganizationId;
    }

    mutate(data, {
      onSuccess: () => {
        setOpen(false);
        form.reset();
      },
      onError: (error) => {
        console.error("Error creating child:", error);
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon className="size-3" />
          Add new Children
        </Button>
      </DialogTrigger>

      <DialogContent
        className="sm:max-w-[425px]"
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle>Create new Children</DialogTitle>
          <DialogDescription>
            Fill the following details to create new children.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-y-5 mt-2">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter first name" />
                    </FormControl>

                    <FormMessage {...field} />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter last name" />
                    </FormControl>

                    <FormMessage {...field} />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date of Birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>

                    <FormMessage {...field} />
                  </FormItem>
                )}
              />

              <div className="space-y-2">
                <FormLabel>Nursery</FormLabel>
                <div className="border rounded-md">
                  <NurserySwitcher />
                </div>
              </div>

              {!sessionPending && session?.user?.role === "admin" && (
                <FormField
                  control={form.control}
                  name="parentId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Parent</FormLabel>
                      <FormControl>
                        <ParentsDropdown
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>

                      <FormMessage {...field} />
                    </FormItem>
                  )}
                />
              )}
            </div>

            <Separator className="my-4" />

            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" loading={isPending}>
                Create Children
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
