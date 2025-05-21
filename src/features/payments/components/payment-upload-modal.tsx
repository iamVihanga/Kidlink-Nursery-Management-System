"use client";

import React, { useState } from "react";
import { Loader, Calendar } from "lucide-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { authClient } from "@/lib/auth-client";
import { client } from "@/lib/rpc";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

// These should match the status values in your comment in schema.prisma
enum PaymentStatus {
  PENDING = "pending",
  COMPLETED = "completed",
  FAILED = "failed"
}

// These should match the payment methods in your comment in schema.prisma
enum PaymentMethod {
  CREDIT_CARD = "credit_card",
  BANK_TRANSFER = "bank_transfer",
  CASH = "cash",
  OTHER = "other"
}

interface PaymentUploadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit?: (payment: any) => void;
}

export function PaymentUploadModal({
  open,
  onOpenChange,
  onSubmit
}: PaymentUploadModalProps) {
  const { data: session } = authClient.useSession();
  const { data: activeOrg } = authClient.useActiveOrganization();
  
  const [payment, setPayment] = useState({
    amount: "",
    currency: "USD",
    status: PaymentStatus.PENDING,
    paymentMethod: PaymentMethod.BANK_TRANSFER,
    description: "",
    paymentDate: new Date().toISOString().split("T")[0],
    memberId: "",
    organizationId: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch user's parent ID for the current organization
  const { data: parentData, isError: isParentError } = useQuery({
    queryKey: ["parent", session?.user?.id, activeOrg?.id],
    queryFn: async () => {
      if (!session?.user?.id || !activeOrg?.id) {
        return { parents: [] };
      }
      
      try {
        // Use the parents endpoint instead of members
        const response = await client.api.parents.$get({
          query: { 
            search: session.user.id, // Search for the current user
            limit: "1"              // We only need one result
          }
        });
        
        if (!response.ok) {
          throw new Error("Failed to fetch parent data");
        }
        
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching parent:", error);
        return { parents: [] };
      }
    },
    enabled: !!session?.user?.id && !!activeOrg?.id,
    onSuccess: (data) => {
      // Get the first parent that matches the user
      const parent = data.parents?.[0];
      if (parent?.id) {
        setPayment(prev => ({
          ...prev,
          // Use parentId instead of memberId if that's what your schema expects
          // If your schema expects memberId, just use parent.id here
          memberId: parent.id,
          organizationId: activeOrg?.id || ""
        }));
      }
    }
  });

  // Create payment mutation
  const createPaymentMutation = useMutation({
    mutationFn: async (data: typeof payment) => {
      const response = await client.api.payments.$post({
        json: {
          amount: parseFloat(data.amount),
          currency: data.currency,
          status: data.status,
          paymentMethod: data.paymentMethod,
          description: data.description,
          paymentDate: new Date(data.paymentDate),
          memberId: data.memberId,
          organizationId: data.organizationId
        }
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to create payment");
      }
      
      return response.json();
    },
    onSuccess: (data) => {
      toast.success("Payment submitted successfully");
      
      if (onSubmit) {
        onSubmit(data);
      }
      
      handleClose();
    },
    onError: (error) => {
      console.error("Payment error:", error);
      toast.error("Failed to add payment: " + (error instanceof Error ? error.message : "Unknown error"));
      setIsSubmitting(false);
    }
  });

  const handleSubmit = () => {
    // Form validation
    if (!payment.amount || parseFloat(payment.amount) <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }

    if (!payment.currency) {
      toast.error("Please select a currency");
      return;
    }

    if (!payment.memberId) {
      toast.error("Could not identify your parent record in this organization");
      return;
    }

    if (!payment.organizationId) {
      toast.error("Could not identify the organization");
      return;
    }

    setIsSubmitting(true);
    createPaymentMutation.mutate(payment);
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset form with a slight delay to avoid visual glitches
    setTimeout(() => {
      setPayment({
        amount: "",
        currency: "USD",
        status: PaymentStatus.PENDING,
        paymentMethod: PaymentMethod.BANK_TRANSFER,
        description: "",
        paymentDate: new Date().toISOString().split("T")[0],
        // Use the parent ID from the query if available
        memberId: parentData?.parents?.[0]?.id || "",
        organizationId: activeOrg?.id || ""
      });
    }, 200);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add Payment</DialogTitle>
          <DialogDescription>
            Enter the details of your payment.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="payment-amount">Amount*</Label>
              <Input
                id="payment-amount"
                type="number"
                placeholder="0.00"
                value={payment.amount}
                onChange={(e) => setPayment({ 
                  ...payment, 
                  amount: e.target.value 
                })}
                autoFocus
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="payment-currency">Currency*</Label>
              <Select
                value={payment.currency}
                onValueChange={(value) => setPayment({ 
                  ...payment, 
                  currency: value 
                })}
              >
                <SelectTrigger id="payment-currency">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="EUR">EUR</SelectItem>
                  <SelectItem value="GBP">GBP</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="payment-method">Payment Method</Label>
              <Select
                value={payment.paymentMethod}
                onValueChange={(value) => setPayment({ 
                  ...payment, 
                  paymentMethod: value 
                })}
              >
                <SelectTrigger id="payment-method">
                  <SelectValue placeholder="Select method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={PaymentMethod.BANK_TRANSFER}>Bank Transfer</SelectItem>
                  <SelectItem value={PaymentMethod.CREDIT_CARD}>Credit Card</SelectItem>
                  <SelectItem value={PaymentMethod.CASH}>Cash</SelectItem>
                  <SelectItem value={PaymentMethod.OTHER}>Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="payment-date">Payment Date</Label>
              <div className="relative">
                <Input
                  id="payment-date"
                  type="date"
                  value={payment.paymentDate}
                  onChange={(e) => setPayment({ 
                    ...payment, 
                    paymentDate: e.target.value 
                  })}
                />
                <Calendar className="h-4 w-4 absolute right-3 top-3 text-muted-foreground" />
              </div>
            </div>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="payment-description">Description</Label>
            <Textarea
              id="payment-description"
              placeholder="Details about this payment"
              value={payment.description}
              onChange={(e) => setPayment({ 
                ...payment, 
                description: e.target.value 
              })}
            />
          </div>
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={handleClose}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>Submit Payment</>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}