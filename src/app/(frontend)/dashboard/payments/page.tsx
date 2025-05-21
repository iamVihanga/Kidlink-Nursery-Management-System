'use client'

import React, { useState } from "react";
import { CreditCard, Plus, Clock, CheckCircle, XCircle, Calendar, Receipt, Filter, Download, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageContainer from "@/components/layouts/page-container";
import { AppPageShell } from "@/components/layouts/page-shell";
import { PaymentUploadModal } from "@/features/payments/components/payment-upload-modal";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Mock payment history data
const mockPayments = [
  {
    id: "pay_123456",
    amount: 350.00,
    currency: "USD",
    status: "completed",
    paymentMethod: "bank_transfer",
    description: "Monthly tuition fee - May",
    paymentDate: "2025-05-15T00:00:00.000Z",
  },
  {
    id: "pay_123457",
    amount: 45.00,
    currency: "USD",
    status: "completed",
    paymentMethod: "credit_card",
    description: "Art supplies",
    paymentDate: "2025-05-01T00:00:00.000Z",
  },
  {
    id: "pay_123458",
    amount: 120.00,
    currency: "USD",
    status: "pending",
    paymentMethod: "bank_transfer",
    description: "School trip deposit",
    paymentDate: "2025-05-18T00:00:00.000Z",
  }
];

export default function PaymentsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <CheckCircle className="h-3.5 w-3.5 mr-1" />
            Completed
          </Badge>
        );
      case "failed":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            <XCircle className="h-3.5 w-3.5 mr-1" />
            Failed
          </Badge>
        );
      default:
        return (
          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
            <Clock className="h-3.5 w-3.5 mr-1" />
            Pending
          </Badge>
        );
    }
  };

  const formatPaymentMethod = (method: string) => {
    return method.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };
  
  const filteredPayments = mockPayments.filter(payment => 
    payment.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
    payment.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paymentStats = {
    total: mockPayments.length,
    completed: mockPayments.filter(p => p.status === "completed").length,
    pending: mockPayments.filter(p => p.status === "pending").length,
    totalAmount: mockPayments.reduce((sum, p) => sum + p.amount, 0).toFixed(2)
  };
  
  return (
    <PageContainer scrollable={true}>
      <div className="flex flex-1 flex-col space-y-6">
        <AppPageShell
          title="Payments"
          description="Track tuition fees and other school expenses" 
          actionComponent={
            <Button
              onClick={() => setIsModalOpen(true)}
              size="sm"
              className="shadow-sm"
            >
              <Plus className="mr-2 h-4 w-4" />
              New Payment
            </Button>
          }
        />

        {/* Payment stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-600">Total Payments</p>
                  <h3 className="text-2xl font-bold mt-1">${paymentStats.totalAmount}</h3>
                </div>
                <div className="p-2 rounded-full bg-blue-100/80">
                  <CreditCard className="h-5 w-5 text-blue-600" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {paymentStats.total} total payments
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-green-600">Completed</p>
                  <h3 className="text-2xl font-bold mt-1">{paymentStats.completed}</h3>
                </div>
                <div className="p-2 rounded-full bg-green-100/80">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {Math.round(paymentStats.completed / paymentStats.total * 100)}% of all payments
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-amber-600">Pending</p>
                  <h3 className="text-2xl font-bold mt-1">{paymentStats.pending}</h3>
                </div>
                <div className="p-2 rounded-full bg-amber-100/80">
                  <Clock className="h-5 w-5 text-amber-600" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {Math.round(paymentStats.pending / paymentStats.total * 100)}% of all payments
              </p>
            </CardContent>
          </Card>
        </div>

        {/* New payment button card - simplified */}
        <Card className="border border-dashed border-blue-300 bg-blue-50/50 hover:bg-blue-50 transition-colors">
          <CardContent className="p-6">
            <Button 
              variant="ghost"
              className="w-full h-auto py-6 flex flex-col items-center justify-center"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <Plus className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-base font-medium mb-1">Make a New Payment</h3>
              <p className="text-sm text-muted-foreground">
                Upload payment receipts for fees and expenses
              </p>
            </Button>
          </CardContent>
        </Card>

        {/* Payment History Section - with tabs and search */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <CardTitle>Payment History</CardTitle>
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search payments..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <Tabs defaultValue="all" className="mb-6">
              <TabsList className="mb-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                {renderPaymentList(filteredPayments)}
              </TabsContent>
              
              <TabsContent value="completed">
                {renderPaymentList(filteredPayments.filter(p => p.status === "completed"))}
              </TabsContent>
              
              <TabsContent value="pending">
                {renderPaymentList(filteredPayments.filter(p => p.status === "pending"))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      
      {/* Payment Modal */}
      <PaymentUploadModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </PageContainer>
  );
  
  function renderPaymentList(payments: typeof mockPayments) {
    if (payments.length === 0) {
      return (
        <div className="text-center py-8">
          <Receipt className="h-12 w-12 mx-auto mb-3 text-muted-foreground" />
          <h3 className="text-lg font-medium mb-1">No payments found</h3>
          <p className="text-sm text-muted-foreground mb-4">
            {searchTerm ? "Try adjusting your search" : "You haven't made any payments yet"}
          </p>
          {searchTerm && (
            <Button variant="outline" onClick={() => setSearchTerm("")}>
              Clear Search
            </Button>
          )}
        </div>
      );
    }
    
    return (
      <>
        <div className="space-y-4">
          {payments.map((payment, index) => (
            <Card key={payment.id} className="overflow-hidden hover:border-blue-200 transition-colors">
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-medium text-base">
                        {payment.description}
                      </h3>
                      {getStatusBadge(payment.status)}
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        {format(new Date(payment.paymentDate), 'MMM dd, yyyy')}
                      </div>
                      
                      <div>
                        ID: #{payment.id.slice(-6)}
                      </div>
                      
                      <div>
                        {formatPaymentMethod(payment.paymentMethod)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right flex-shrink-0">
                    <div className="font-bold text-lg">
                      ${payment.amount.toFixed(2)}
                    </div>
                    <div className="text-xs text-muted-foreground">{payment.currency}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-between items-center pt-4 text-sm text-muted-foreground">
          <div>Showing {payments.length} of {mockPayments.length} payments</div>
        </div>
      </>
    );
  }
}