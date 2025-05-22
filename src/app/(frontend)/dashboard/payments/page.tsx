'use client'

import React, { useState, useEffect } from "react";
import { 
  CreditCardIcon, 
  Loader, 
  RefreshCw, 
  ListIcon, 
  GridIcon, 
  ArrowDown, 
  ArrowUp, 
  Calendar, 
  User, 
  CreditCard,
  ReceiptText
} from "lucide-react";

import { AddNewPayment } from '@/features/payments/components/add-new-payment-modal';
import { useGetPayments } from '@/features/payments/api/use-get-payments';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

// Simple view preference management
const getUserViewPreference = (): "grid" | "list" => {
  if (typeof window === "undefined") return "grid";
  return (localStorage.getItem("paymentsViewMode") as "grid" | "list") || "grid";
};

// Status badge styles
const getStatusBadge = (status: string) => {
  switch (status?.toLowerCase()) {
    case 'completed':
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>;
    case 'pending':
      return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>;
    case 'failed':
      return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Failed</Badge>;
    case 'refunded':
      return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Refunded</Badge>;
    default:
      return <Badge variant="outline">{status || 'Unknown'}</Badge>;
  }
};

export default function PaymentsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">(getUserViewPreference());
  const [refreshing, setRefreshing] = useState(false);
  
  // Get the active organization
  const {
    data: activeOrgData,
    error: activeOrgErr,
    isPending: activeOrgPending
  } = authClient.useActiveOrganization();

  // Set up payments data fetching with minimal params
  const { data, error, isPending, refetch: refetchPayments } = useGetPayments({
    limit: 10,
    page: 1
  });

  // Save user preference when view mode changes
  useEffect(() => {
    localStorage.setItem("paymentsViewMode", viewMode);
  }, [viewMode]);

  // Function to handle manual refresh
  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      await refetchPayments();
    } finally {
      setRefreshing(false);
    }
  };

  if (activeOrgPending) {
    return (
      <div className="flex items-center justify-center w-full h-full p-8">
        <Loader className="size-6 animate-spin" />
      </div>
    );
  }

  if (!activeOrgData || activeOrgErr) {
    return (
      <div className="p-8">
        <Card className="p-6 flex flex-col items-center justify-center">
          <div className="p-3 rounded-xl bg-primary">
            <CreditCardIcon className="size-8 text-white" />
          </div>
          <h1 className="mt-5 text-2xl font-semibold">
            Select organization to manage payments
          </h1>
          <p className="text-sm mt-2 text-gray-500">
            Please select an organization to view and manage payments
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <div className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Payments</h1>
            <p className="text-muted-foreground mt-1">
              Manage payments for {activeOrgData.name}
            </p>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={handleRefresh}
              disabled={refreshing || isPending}
              size="sm"
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? "animate-spin" : ""}`} />
              Refresh
            </Button>
            <AddNewPayment onPaymentCreated={handleRefresh} />
          </div>
        </div>
      </div>

      <Tabs defaultValue={viewMode} onValueChange={(value) => setViewMode(value as "grid" | "list")}>
        <div className="flex items-center justify-between mb-6">
          <TabsList>
            <TabsTrigger value="grid" className="flex items-center gap-1">
              <GridIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Grid View</span>
            </TabsTrigger>
            <TabsTrigger value="list" className="flex items-center gap-1">
              <ListIcon className="h-4 w-4" />
              <span className="hidden sm:inline">List View</span>
            </TabsTrigger>
          </TabsList>
          
          {data && (
            <div className="text-sm text-muted-foreground">
              {data.pagination?.total || 0} payment{data.pagination?.total !== 1 ? 's' : ''}
            </div>
          )}
        </div>

        {isPending ? (
          <div className="py-16 flex justify-center">
            <div className="text-center">
              <Loader className="h-8 w-8 mx-auto animate-spin text-primary mb-4" />
              <p className="text-muted-foreground">Loading payments...</p>
            </div>
          </div>
        ) : error ? (
          <Card className="border-red-200 bg-red-50 dark:bg-red-950/20">
            <CardContent className="pt-6 text-center">
              <div className="rounded-full bg-red-100 p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <CreditCardIcon className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-medium text-red-800 mb-2">Failed to load payments</h3>
              <p className="text-red-600 mb-4 max-w-md mx-auto">
                {error instanceof Error ? error.message : String(error)}
              </p>
              <Button onClick={handleRefresh} variant="outline" className="border-red-300">
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again
              </Button>
            </CardContent>
          </Card>
        ) : !data?.payments?.length ? (
          <Card className="border-dashed">
            <CardContent className="py-16 text-center">
              <div className="rounded-full bg-primary/10 p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <CreditCardIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">No payments yet</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Start by adding a new payment to track your financial transactions.
              </p>
              <AddNewPayment onPaymentCreated={handleRefresh} />
            </CardContent>
          </Card>
        ) : (
          <>
            <TabsContent value="grid" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {data.payments.map((payment) => (
                  <Card key={payment.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2 bg-muted/30">
                      <div className="flex justify-between items-start gap-2">
                        <div className="font-medium leading-none">
                          {payment.amount !== null && payment.currency ? 
                            new Intl.NumberFormat('en-US', {
                              style: 'currency',
                              currency: payment.currency
                            }).format(payment.amount)
                            : 'N/A'
                          }
                        </div>
                        {getStatusBadge(payment.status || '')}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="mr-2 h-4 w-4" />
                          {payment.paymentDate ? 
                            new Date(payment.paymentDate).toLocaleDateString(undefined, {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })
                            : 'N/A'
                          }
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <CreditCard className="mr-2 h-4 w-4" />
                          {payment.paymentMethod?.replace('_', ' ') || 'N/A'}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <User className="mr-2 h-4 w-4" />
                          ID: {payment.memberId?.substring(0, 8) || 'N/A'}
                        </div>
                        {payment.description && (
                          <div className="text-xs pt-2 border-t">
                            {payment.description}
                          </div>
                        )}
                      </div>
                    </CardContent>
                    {payment.receiptURL && !payment.receiptURL.includes("placeholder") && (
                      <CardFooter className="pt-0 pb-3">
                        <a 
                          href={payment.receiptURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline text-sm flex items-center"
                        >
                          <ReceiptText className="h-3.5 w-3.5 mr-1" />
                          View Receipt
                        </a>
                      </CardFooter>
                    )}
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="list" className="mt-0">
              <Card>
                <ScrollArea className="h-[60vh]">
                  <div className="divide-y">
                    {data.payments.map((payment) => (
                      <div key={payment.id} className="p-4 hover:bg-muted/20 transition-colors">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div className="flex items-start gap-3">
                            <div className="bg-primary/10 p-2 rounded">
                              <CreditCardIcon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <div className="font-medium">
                                {payment.amount !== null && payment.currency ? 
                                  new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: payment.currency
                                  }).format(payment.amount)
                                  : 'N/A'
                                }
                              </div>
                              <div className="text-sm text-muted-foreground mt-0.5">
                                {payment.paymentDate ? 
                                  new Date(payment.paymentDate).toLocaleDateString(undefined, {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric'
                                  })
                                  : 'N/A'
                                }
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mt-2 sm:mt-0">
                            <div className="bg-muted px-2 py-1 rounded text-xs">
                              {payment.paymentMethod?.replace('_', ' ') || 'N/A'}
                            </div>
                            {getStatusBadge(payment.status || '')}
                            <div className="text-xs text-muted-foreground">
                              ID: {payment.memberId?.substring(0, 8) || 'N/A'}
                            </div>
                            
                            {payment.receiptURL && !payment.receiptURL.includes("placeholder") && (
                              <a 
                                href={payment.receiptURL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline text-xs flex items-center"
                              >
                                <ReceiptText className="h-3 w-3 mr-1" />
                                Receipt
                              </a>
                            )}
                          </div>
                        </div>
                        
                        {payment.description && (
                          <div className="mt-2 text-xs text-muted-foreground ml-10 pl-3 border-l-2 border-muted">
                            {payment.description}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </Card>
            </TabsContent>
          </>
        )}
        
        {data?.pagination && (
          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Page {data.pagination.page || 1} of {data.pagination.totalPages || 1}
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm"
                disabled={data.pagination.page <= 1}
                // onClick={() => /* handle pagination */}
              >
                <ArrowUp className="h-4 w-4 mr-1" />
                Previous
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                disabled={data.pagination.page >= data.pagination.totalPages}
                // onClick={() => /* handle pagination */}
              >
                Next
                <ArrowDown className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        )}
      </Tabs>
    </div>
  );
}