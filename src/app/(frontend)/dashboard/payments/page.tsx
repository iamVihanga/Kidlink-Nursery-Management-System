'use client'

import React, { useState, useEffect } from "react";
import { CreditCardIcon, Loader, RefreshCw } from "lucide-react";

import { AddNewPayment } from '@/features/payments/components/add-new-payment-modal';
import { useGetPayments } from '@/features/payments/api/use-get-payments';
import { Card } from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

// Simple view preference management
const getUserViewPreference = (): "grid" | "list" => {
  if (typeof window === "undefined") return "list";
  return (localStorage.getItem("paymentsViewMode") as "grid" | "list") || "list";
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
    <div className="p-4">
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Payments</h1>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            onClick={handleRefresh}
            disabled={refreshing || isPending}
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? "animate-spin" : ""}`} />
            Refresh
          </Button>
          <AddNewPayment onPaymentCreated={handleRefresh} />
        </div>
      </div>

      <div className="mb-4 flex justify-between">
        <div>
          <button 
            onClick={() => setViewMode("list")}
            className={`px-3 py-1 ${viewMode === "list" ? "bg-gray-200 rounded" : ""}`}
          >
            List View
          </button>
          <button 
            onClick={() => setViewMode("grid")}
            className={`px-3 py-1 ${viewMode === "grid" ? "bg-gray-200 rounded" : ""}`}
          >
            Grid View
          </button>
        </div>
      </div>

      {isPending ? (
        <div className="p-8 flex justify-center">
          <Loader className="size-6 animate-spin" />
        </div>
      ) : error ? (
        <div className="p-4 text-red-500">
          Failed to load payments: {error.message}
          <div className="mt-2">
            <Button onClick={handleRefresh}>Try Again</Button>
          </div>
        </div>
      ) : data ? (
        <div>
          <p className="mb-4">Found {data.pagination.total} payments</p>
          
          {viewMode === "list" ? (
            <div className="border rounded">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2 text-left">Amount</th>
                    <th className="p-2 text-left">Date</th>
                    <th className="p-2 text-left">Method</th>
                    <th className="p-2 text-left">Status</th>
                    <th className="p-2 text-left">Member</th>
                    <th className="p-2 text-left">Receipt</th>
                  </tr>
                </thead>
                <tbody>
                  {data.payments.map((payment) => (
                    <tr key={payment.id} className="border-t">
                      <td className="p-2">
                        {new Intl.NumberFormat('en-US', {
                          style: 'currency',
                          currency: payment.currency
                        }).format(payment.amount)}
                      </td>
                      <td className="p-2">
                        {new Date(payment.paymentDate).toLocaleDateString()}
                      </td>
                      <td className="p-2">{payment.paymentMethod?.replace('_', ' ') || 'N/A'}</td>
                      <td className="p-2">{payment.status}</td>
                      <td className="p-2">{payment.memberId}</td>
                      <td className="p-2">
                        {payment.receiptURL && !payment.receiptURL.includes("placeholder") ? (
                          <a href={payment.receiptURL} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                            View
                          </a>
                        ) : (
                          "None"
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.payments.map((payment) => (
                <div key={payment.id} className="border rounded p-4">
                  <div className="font-bold text-lg">
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: payment.currency
                    }).format(payment.amount)}
                  </div>
                  <div className="mt-2">Date: {new Date(payment.paymentDate).toLocaleDateString()}</div>
                  <div>Method: {payment.paymentMethod?.replace('_', ' ') || 'N/A'}</div>
                  <div>Status: {payment.status}</div>
                  <div>Member: {payment.memberId}</div>
                  {payment.receiptURL && !payment.receiptURL.includes("placeholder") && (
                    <div className="mt-2">
                      <a href={payment.receiptURL} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                        View Receipt
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          
          <div className="mt-4 text-center text-sm text-gray-500">
            Page {data.pagination.page} of {data.pagination.totalPages || 1} 
            ({data.pagination.total} total payments)
          </div>
        </div>
      ) : (
        <div className="p-4 text-center">No payment data available</div>
      )}
    </div>
  );
}