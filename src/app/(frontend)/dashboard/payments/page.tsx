"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { 
  Loader, CreditCard, Plus, Search, Download, Receipt, Clock, CheckCircle, XCircle
} from "lucide-react";

import { authClient } from "@/lib/auth-client";
import { client } from "@/lib/rpc";
import PageContainer from "@/components/layouts/page-container";
import { AppPageShell } from "@/components/layouts/page-shell";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { PaymentUploadModal } from "@/features/payments/components/payment-upload-modal";

enum PaymentStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED"
}

export default function PaymentsPage() {
  const {
    data: activeOrgData,
    error: activeOrgErr,
    isPending: activeOrgPending
  } = authClient.useActiveOrganization();

  const { data: userData } = authClient.useSession();
  
  const [isAddPaymentOpen, setIsAddPaymentOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch payments for the parent
  const { 
    data: paymentsData,
    isPending: paymentsLoading,
    error: paymentsError
  } = useQuery({
    queryKey: ["payments", userData?.user?.id, searchTerm],
    queryFn: async () => {
      if (!userData?.user?.id || !activeOrgData?.id) return { payments: [] };
      
      try {
        const response = await client.api.payments.$get({
          query: { 
            parentId: userData.user.id,
            organizationId: activeOrgData.id,
            search: searchTerm
          }
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching payments:", error);
        return { payments: [] };
      }
    },
    enabled: !!userData?.user?.id && !!activeOrgData?.id
  });

  const payments = paymentsData?.payments || [];
  
  const filteredPayments = payments.filter(payment => 
    payment.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    payment.amount?.toString().includes(searchTerm) ||
    payment.paymentType?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "APPROVED":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "REJECTED":
        return <XCircle className="h-5 w-5 text-red-600" />;
      default:
        return <Clock className="h-5 w-5 text-amber-600" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "APPROVED":
        return "Approved";
      case "REJECTED":
        return "Declined";
      default:
        return "Pending";
    }
  };

  if (activeOrgPending) {
    return (
      <div className="flex-1 flex items-center justify-center w-full h-full">
        <Loader className="size-6 animate-spin" />
      </div>
    );
  }

  if (!activeOrgData || activeOrgErr) {
    return (
      <div className="flex-1 flex items-center justify-center w-full h-full">
        <Card className="p-6 max-w-md">
          <div className="text-center">
            <CreditCard className="size-12 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-xl font-semibold">No nursery selected</h2>
            <p className="text-muted-foreground mt-2">
              Please select a nursery to view payments
            </p>
          </div>
        </Card>
      </div>
    );
  }
  
  return (
    <PageContainer scrollable={true}>
      <div className="flex flex-1 flex-col space-y-6">
        <AppPageShell
          title="Payments"
          description="Track and manage tuition payments"
          actionComponent={
            <Button
              size="sm" 
              onClick={() => setIsAddPaymentOpen(true)}
            >
              <Plus className="mr-2 h-4 w-4" />
              Upload Payment
            </Button>
          }
        />

        <Separator />
        
        {/* Search and Payment Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-3">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search payments..."
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <Card className="md:col-span-1">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{payments.length}</div>
            </CardContent>
          </Card>
        </div>
        
        {/* Payment History */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Payment History</h2>
          
          {paymentsLoading ? (
            <div className="flex justify-center items-center py-8">
              <Loader className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : filteredPayments.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {filteredPayments.map((payment) => (
                <Card key={payment.id} className="overflow-hidden">
                  <div className="flex">
                    <div className={`w-2 ${
                      payment.status === PaymentStatus.APPROVED ? 
                        'bg-green-500' :
                      payment.status === PaymentStatus.REJECTED ?
                        'bg-red-500' : 
                        'bg-amber-500'
                    }`}></div>
                    <div className="flex-1 p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">
                            {payment.paymentType?.replace(/_/g, ' ')}
                            {payment.childName && ` - ${payment.childName}`}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {payment.paymentDate ? 
                              format(new Date(payment.paymentDate), 'MMMM dd, yyyy') : 
                              'No date provided'}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold">
                            ${Number(payment.amount).toFixed(2)}
                          </div>
                          <div className="flex items-center gap-1 text-sm">
                            {getStatusIcon(payment.status)}
                            <span className={`
                              ${payment.status === PaymentStatus.APPROVED ? 'text-green-600' : ''} 
                              ${payment.status === PaymentStatus.REJECTED ? 'text-red-600' : ''}
                              ${payment.status === PaymentStatus.PENDING ? 'text-amber-600' : ''}
                            `}>
                              {getStatusText(payment.status)}
                            </span>
                          </div>
                        </div>
                      </div>

                      {payment.description && (
                        <div className="mt-2 text-sm">
                          {payment.description}
                        </div>
                      )}

                      <div className="mt-3 flex justify-between items-center">
                        <Badge variant="outline" className="text-xs">
                          Receipt #{payment.id.slice(0, 6)}
                        </Badge>

                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-8 text-xs"
                          asChild
                        >
                          <a 
                            href={payment.paymentSlipUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <Download className="h-3 w-3 mr-1" />
                            View Receipt
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="flex flex-col items-center justify-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                <Receipt className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-medium text-lg">No payments found</h3>
              <p className="text-muted-foreground text-sm mt-1 text-center max-w-md">
                {searchTerm ? 
                  'Try adjusting your search criteria' : 
                  'Upload your first payment receipt to get started'
                }
              </p>
              <Button
                className="mt-4"
                onClick={() => setIsAddPaymentOpen(true)}
              >
                <Plus className="mr-2 h-4 w-4" />
                Upload Payment
              </Button>
            </Card>
          )}
        </div>
      </div>

      {/* Payment Upload Modal Component */}
      <PaymentUploadModal 
        open={isAddPaymentOpen}
        onOpenChange={setIsAddPaymentOpen}
        userId={userData?.user?.id}
        organizationId={activeOrgData?.id}
      />
    </PageContainer>
  );
}