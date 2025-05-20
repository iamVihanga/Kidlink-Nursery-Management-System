"use client";

import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Loader, FileUp, Calendar, Info, Check } from "lucide-react";

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

enum PaymentStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED"
}

enum PaymentType {
  MONTHLY_FEE = "MONTHLY_FEE",
  REGISTRATION = "REGISTRATION",
  SPECIAL_ACTIVITY = "SPECIAL_ACTIVITY",
  OTHER = "OTHER"
}

interface PaymentUploadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userId?: string;
  organizationId?: string;
}

export function PaymentUploadModal({
  open,
  onOpenChange,
  userId,
  organizationId
}: PaymentUploadModalProps) {
  const queryClient = useQueryClient();

  const [paymentData, setPaymentData] = useState({
    amount: "",
    description: "",
    paymentType: PaymentType.MONTHLY_FEE,
    paymentDate: new Date().toISOString().split("T")[0],
    paymentSlipUrl: "",
    childId: "",
    parentId: userId || "",
    status: PaymentStatus.PENDING
  });
  const [uploadingFile, setUploadingFile] = useState(false);

  // Get all children related to the parent
  const { data: childrenData, isPending: childrenLoading } = useQuery({
    queryKey: ["children", userId],
    queryFn: async () => {
      if (!userId) return { children: [] };

      try {
        const response = await client.api.children.$get({
          query: { parentId: userId }
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching children:", error);
        return { children: [] };
      }
    },
    enabled: !!userId && !!organizationId && open
  });

  // Upload payment slip file (mock implementation)
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploadingFile(true);

      // Example file upload implementation
      // In a real implementation, you would upload to your storage service
      // For now we're just simulating the process

      // Mock upload delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock successful upload with fake URL
      const fakeUploadedUrl = `https://storage.example.com/payments/${Date.now()}-${file.name}`;

      setPaymentData({
        ...paymentData,
        paymentSlipUrl: fakeUploadedUrl
      });

      toast.success("Payment slip uploaded successfully");
    } catch (error) {
      console.error("Error uploading file:", error);
      toast.error("Failed to upload payment slip");
    } finally {
      setUploadingFile(false);
    }
  };

  // Create payment mutation
  const createPaymentMutation = useMutation({
    mutationFn: async (data: typeof paymentData) => {
      return client.api.payments.$post({
        json: data
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["payments"] });
      toast.success("Payment added successfully");
      onOpenChange(false);
      resetPaymentForm();
    },
    onError: () => {
      toast.error("Failed to add payment");
    }
  });

  const resetPaymentForm = () => {
    setPaymentData({
      amount: "",
      description: "",
      paymentType: PaymentType.MONTHLY_FEE,
      paymentDate: new Date().toISOString().split("T")[0],
      paymentSlipUrl: "",
      childId: "",
      parentId: userId || "",
      status: PaymentStatus.PENDING
    });
  };

  const handleSubmitPayment = () => {
    // Validate form
    if (!paymentData.amount || parseFloat(paymentData.amount) <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }

    if (!paymentData.childId) {
      toast.error("Please select a child");
      return;
    }

    if (!paymentData.paymentSlipUrl) {
      toast.error("Please upload a payment slip");
      return;
    }

    // Submit the payment
    createPaymentMutation.mutate(paymentData);
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset form with a slight delay to avoid visual glitches
    setTimeout(resetPaymentForm, 200);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Upload Payment</DialogTitle>
          <DialogDescription>
            Upload proof of payment for tuition or other fees.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="amount">Amount ($)</Label>
              <Input
                id="amount"
                type="number"
                placeholder="0.00"
                value={paymentData.amount}
                onChange={(e) => setPaymentData({ ...paymentData, amount: e.target.value })}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="payment-date">Payment Date</Label>
              <div className="relative">
                <Input
                  id="payment-date"
                  type="date"
                  value={paymentData.paymentDate}
                  onChange={(e) => setPaymentData({ ...paymentData, paymentDate: e.target.value })}
                />
                <Calendar className="h-4 w-4 absolute right-3 top-3 text-muted-foreground" />
              </div>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="payment-type">Payment Type</Label>
            <Select
              value={paymentData.paymentType}
              onValueChange={(value) => setPaymentData({ ...paymentData, paymentType: value as PaymentType })}
            >
              <SelectTrigger id="payment-type">
                <SelectValue placeholder="Select payment type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={PaymentType.MONTHLY_FEE}>Monthly Fee</SelectItem>
                <SelectItem value={PaymentType.REGISTRATION}>Registration</SelectItem>
                <SelectItem value={PaymentType.SPECIAL_ACTIVITY}>Special Activity</SelectItem>
                <SelectItem value={PaymentType.OTHER}>Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="child">Child</Label>
            <Select
              value={paymentData.childId}
              onValueChange={(value) => setPaymentData({ ...paymentData, childId: value })}
            >
              <SelectTrigger id="child">
                <SelectValue placeholder="Select child" />
              </SelectTrigger>
              <SelectContent>
                {childrenLoading ? (
                  <div className="flex items-center justify-center p-2">
                    <Loader className="h-4 w-4 mr-2 animate-spin" />
                    Loading children...
                  </div>
                ) : childrenData?.children?.length > 0 ? (
                  childrenData.children.map((child) => (
                    <SelectItem key={child.id} value={child.id}>
                      {child.firstName} {child.lastName}
                    </SelectItem>
                  ))
                ) : (
                  <div className="p-2 text-center text-muted-foreground text-sm">
                    No children found
                  </div>
                )}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">Notes</Label>
            <Textarea
              id="description"
              placeholder="Any additional information about this payment"
              value={paymentData.description}
              onChange={(e) => setPaymentData({ ...paymentData, description: e.target.value })}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="payment-slip">Upload Receipt</Label>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                onClick={() => document.getElementById('payment-slip')?.click()}
                disabled={uploadingFile}
                className="w-full"
              >
                {uploadingFile ? (
                  <>
                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <FileUp className="mr-2 h-4 w-4" />
                    Select File
                  </>
                )}
              </Button>
              <Input
                id="payment-slip"
                type="file"
                accept="image/*,application/pdf"
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>

            {paymentData.paymentSlipUrl && (
              <div className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                <Check className="h-4 w-4 text-green-600" />
                Receipt uploaded successfully
              </div>
            )}
          </div>

          <div className="bg-muted p-3 rounded-lg flex items-start gap-2 text-sm">
            <Info className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <p>
              Please make sure the payment receipt is clear and includes all relevant details.
              The school administration will review your submission.
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmitPayment}
            disabled={createPaymentMutation.isPending}
          >
            {createPaymentMutation.isPending ? (
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