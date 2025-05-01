"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Organization, NurseryDetails } from "@/types/schema-types/index";
import { useGetNurseryDetails } from "../api/use-get-nursery-details";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { ColorPicker } from "@/components/ui/color-picker";

import { NurseryDetailsUpsertSchema } from "@/features/nurseries/schemas/upsert-nursery-details";
import { useAddNurseryDetails } from "../api/use-add-nursery-details";

interface Props {
  currentNursery: Organization;
}

type NurseryDetailsT = Omit<
  NurseryDetails,
  "organizationId" | "updatedAt" | "createdAt" | "id"
>;

export function UpdateNurseryDetails({ currentNursery }: Props) {
  const { mutate } = useAddNurseryDetails();
  const { data, isPending, refetch } = useGetNurseryDetails({
    nurseryId: currentNursery.id
  });

  const form = useForm<NurseryDetailsT>({
    resolver: zodResolver(NurseryDetailsUpsertSchema),
    defaultValues: {
      address: "",
      email: "",
      phoneNumber: "",
      themePrimaryColor: "",
      themeSecondaryColor: ""
    }
  });

  useEffect(() => {
    if (isPending) {
      form.reset({
        address: "",
        email: "",
        phoneNumber: "",
        themePrimaryColor: "",
        themeSecondaryColor: ""
      });
    }
  }, [form, isPending]);

  useEffect(() => {
    if (data) {
      form.reset({
        address: data?.address || "",
        email: data?.email || "",
        phoneNumber: data?.phoneNumber || "",
        themePrimaryColor: data?.themePrimaryColor || "",
        themeSecondaryColor: data?.themeSecondaryColor || ""
      });
    }
  }, [data, form]);

  const onSubmit = async (formData: NurseryDetailsT) => {
    mutate(
      { nurseryId: currentNursery.id, formData },
      {
        onSuccess: () => {
          refetch();
        }
      }
    );
  };

  if (isPending) {
    return (
      <div className="grid gap-6 px-6">
        <Separator className="mt-4" />

        <div className="space-y-2">
          <Skeleton className="h-4 w-52" />
          <Skeleton className="h-8 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-52" />
          <Skeleton className="h-8 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-52" />
          <Skeleton className="h-8 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-52" />
          <Skeleton className="h-8 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-52" />
          <Skeleton className="h-8 w-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="px-6">
      <Separator className="my-4" />

      <div className="mb-4">
        <h2 className="text-lg font-bold">Update Nursery Details</h2>
        <p className="text-sm text-muted-foreground">
          Update nursery profile information.
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full py-2"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="nursery@example.com"
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
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="07700 900000"
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
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="123 Nursery Lane"
                    {...field}
                    value={field.value as string}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center gap-2">
            <FormField
              control={form.control}
              name="themePrimaryColor"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Primary Color</FormLabel>
                  <div className="flex gap-2 items-center">
                    <FormControl>
                      <ColorPicker
                        value={field.value as string}
                        onChange={(c) => field.onChange(c)}
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="themeSecondaryColor"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Secondary Color</FormLabel>
                  <div className="flex gap-2 items-center">
                    <FormControl>
                      <ColorPicker
                        value={field.value as string}
                        onChange={(c) => field.onChange(c)}
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full mt-3">
            Update Nursery Details
          </Button>
        </form>
      </Form>
    </div>
  );
}
