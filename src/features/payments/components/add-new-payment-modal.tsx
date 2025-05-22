"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusIcon, CalendarIcon } from "lucide-react";
import { toast } from "sonner";
import { useSession } from "next-auth/react";

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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

import { createPaymentSchema, type CreatePaymentSchema } from "../schemas/create-payment";
import { useCreatePayment } from "../api/use-create-payment";
import { Skeleton } from "@/components/ui/skeleton";

import { MediaUploader } from "@/modules/media/components/MediaUploader";
import { MediaUploadPaths } from "@/modules/media/types";

import "next-auth";

declare module "next-auth" {
  interface Session {
    activeOrganizationId?: string;
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

const PAYMENT_METHODS = [
  { id: "credit_card", name: "Credit Card" },
  { id: "bank_transfer", name: "Bank Transfer" },
  { id: "cash", name: "Cash" },
  { id: "debit_card", name: "Debit Card" },
  { id: "mobile_payment", name: "Mobile Payment" },
];

const PAYMENT_STATUSES = [
  { id: "pending", name: "Pending" },
  { id: "completed", name: "Completed" },
  { id: "failed", name: "Failed" },
  { id: "refunded", name: "Refunded" },
];

export function AddNewPayment() {
  const [open, setOpen] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [skipImageUpload, setSkipImageUpload] = useState(false);

  // Get active organization ID from session
  const activeOrganizationId = "test-organization-id"; // Temporary value for testing

  // Use the real API hook
  const { mutateAsync: createPayment } = useCreatePayment();

  const form = useForm<CreatePaymentSchema>({
    resolver: zodResolver(createPaymentSchema),
    defaultValues: {
      amount: 0,
      currency: "USD",
      status: "pending",
      paymentMethod: "credit_card",
      description: "",
      paymentDate: new Date(),
      receiptURL: "", // This can remain empty
      memberId: "",
      // Add organizationId with default value or from session
      organizationId: activeOrganizationId || "",
    }
  });

  const onSubmit = async (values: CreatePaymentSchema) => {
    if (isSubmitting) return;
    
    try {
      setIsSubmitting(true);
      console.log("Submitting payment data:", values);
      
      // Set default empty string for receiptURL if it's undefined
      // This ensures the API doesn't reject the request due to missing fields
      const paymentData = {
        ...values,
        receiptURL: values.receiptURL || "",
        // Ensure organizationId is always present
        organizationId: values.organizationId || activeOrganizationId || "",
      };

      // Validate that we have an organization ID
      if (!paymentData.organizationId) {
        throw new Error("Organization ID is required but not available");
      }
      
      console.log("Final payment data for submission:", paymentData);
      
      // Pass the values directly to the mutation function
      await createPayment({ values: paymentData });
      
      toast.success("Payment created successfully");
      form.reset();
      setOpen(false);
    } catch (error) {
      console.error("Error creating payment:", error);
      toast.error("Failed to create payment: " + (error instanceof Error ? error.message : "Unknown error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  React.useEffect(() => {
    if (activeOrganizationId) {
      form.setValue("organizationId", activeOrganizationId);
    }
  }, [activeOrganizationId, form]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon className="size-3 mr-2" />
          Add new Payment
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[525px]"
        onInteractOutside={(e) => {
          if (isSubmitting) e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle>Create new Payment</DialogTitle>
          <DialogDescription>
            Fill the following details to create a new payment record.
          </DialogDescription>
        </DialogHeader>

        {/* Dialog Content */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4 py-4">
              {/* Amount */}
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount*</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        step="0.01"
                        {...field} 
                        onChange={e => field.onChange(parseFloat(e.target.value))}
                        placeholder="0.00" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Currency */}
              <FormField
                control={form.control}
                name="currency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Currency*</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value || undefined}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="USD">USD</SelectItem>
                        <SelectItem value="EUR">EUR</SelectItem>
                        <SelectItem value="GBP">GBP</SelectItem>
                        <SelectItem value="JPY">JPY</SelectItem>
                        <SelectItem value="CAD">CAD</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Status */}
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status*</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value || undefined}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {PAYMENT_STATUSES.map(status => (
                          <SelectItem key={status.id} value={status.id}>
                            {status.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Payment Method */}
              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Payment Method</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value || undefined}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select method" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {PAYMENT_METHODS.map(method => (
                          <SelectItem key={method.id} value={method.id}>
                            {method.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Payment Date */}
              <FormField
                control={form.control}
                name="paymentDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Payment Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "pl-3 text-left font-normal",
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
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Member ID (would typically be a dropdown in a real implementation) */}
              <FormField
                control={form.control}
                name="memberId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Member ID*</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Select member" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Description */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea 
                        {...field} 
                        value={field.value || ''}
                        placeholder="Payment details, purpose, etc."
                        className="resize-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Receipt Upload - Now Optional */}
              <FormField
                control={form.control}
                name="receiptURL"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <div className="flex justify-between items-center">
                      <FormLabel>Receipt (Optional)</FormLabel>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="skip-upload"
                          checked={skipImageUpload}
                          onChange={() => setSkipImageUpload(!skipImageUpload)}
                          className="rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <label htmlFor="skip-upload" className="text-sm text-muted-foreground">
                          Skip image upload (for testing)
                        </label>
                      </div>
                    </div>
                    
                    {!skipImageUpload ? (
                      <FormControl>
                        <MediaUploader
                          onUpload={(result) => {
                            console.log("Upload successful:", result);
                            field.onChange(result.url);
                          }}
                          onError={(err) => {
                            console.error("Upload error details:", err);
                            toast.error(`Failed to upload receipt: ${err.message || "Unknown error"}`);
                          }}
                          acceptedTypes={["image", "document"]}
                          path={MediaUploadPaths.PAYMENTS}
                          maxSize={5 * 1024 * 1024}
                        />
                      </FormControl>
                    ) : (
                      <div className="flex mt-2">
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter receipt URL manually (optional)"
                            value={field.value || ""}
                            onChange={(e) => field.onChange(e.target.value)}
                            className="w-full"
                          />
                        </FormControl>
                        {field.value && (
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            type="button"
                            className="ml-2"
                            onClick={() => field.onChange("")}
                          >
                            Clear
                          </Button>
                        )}
                      </div>
                    )}
                    
                    <p className="text-xs text-muted-foreground mt-1">
                      You can skip uploading a receipt for testing purposes. The payment will still be created.
                    </p>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Hidden Field for Organization ID - Automatically Managed */}
              <FormField
                control={form.control}
                name="organizationId"
                render={({ field }) => (
                  <input 
                    type="hidden" 
                    {...field} 
                    value={activeOrganizationId || field.value}
                  />
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
              <Button 
                type="submit" 
                disabled={isSubmitting}
                onClick={() => {
                  // Add debugging for form values
                  console.log("Form state:", {
                    values: form.getValues(),
                    errors: form.formState.errors,
                    isValid: form.formState.isValid
                  });
                }}
              >
                {isSubmitting ? "Creating..." : "Create Payment"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}