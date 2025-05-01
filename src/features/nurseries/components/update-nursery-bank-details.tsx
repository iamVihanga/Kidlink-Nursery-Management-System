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
import { Organization, BankDetails } from "@/types/schema-types/index";
import { useGetNurseryBankDetails } from "../api/use-get-nursery-bank-details";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

import { BankDetailsUpsertSchema } from "@/features/nurseries/schemas/upsert-nursery-bank-details";
import { useAddNurseryBankDetails } from "../api/use-add-nursery-bank-details";

interface Props {
  currentNursery: Organization;
}

type NurseryBankDetailsT = Omit<
  BankDetails,
  "nurseryDetailsId" | "updatedAt" | "createdAt" | "id"
>;

export function UpdateNurseryBankDetails({ currentNursery }: Props) {
  const { mutate } = useAddNurseryBankDetails();
  const { data, isPending, refetch } = useGetNurseryBankDetails({
    nurseryId: currentNursery.id
  });

  const form = useForm<NurseryBankDetailsT>({
    resolver: zodResolver(BankDetailsUpsertSchema),
    defaultValues: {
      accountHolderName: "",
      accountNumber: "",
      bankName: "",
      branch: "",
      currency: "",
      swiftCode: ""
    }
  });

  useEffect(() => {
    if (isPending) {
      form.reset({
        accountHolderName: "",
        accountNumber: "",
        bankName: "",
        branch: "",
        currency: "",
        swiftCode: ""
      });
    }
  }, [form, isPending]);

  useEffect(() => {
    if (data) {
      form.reset({
        accountHolderName: data?.accountHolderName || "",
        accountNumber: data?.accountNumber || "",
        bankName: data?.bankName || "",
        branch: data?.branch || "",
        currency: data?.currency || "",
        swiftCode: data?.swiftCode || ""
      });
    }
  }, [data, form]);

  const onSubmit = async (formData: NurseryBankDetailsT) => {
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
        <h2 className="text-lg font-bold">Update Bank Details</h2>
        <p className="text-sm text-muted-foreground">
          Update bank details for {currentNursery.name}
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full py-2"
        >
          <FormField
            control={form.control}
            name="bankName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bank Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Barclays Bank"
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
            name="accountNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Account Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="1234567890"
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
            name="branch"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Branch</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Nairobi Branch"
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
            name="accountHolderName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Account Holder Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe"
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
              name="currency"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Currency</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="USD"
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
              name="swiftCode"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>SWIFT</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="SWIFT1234"
                      {...field}
                      value={field.value as string}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full mt-3">
            Update Bank Details
          </Button>
        </form>
      </Form>
    </div>
  );
}
