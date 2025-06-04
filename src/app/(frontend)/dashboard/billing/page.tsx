"use client";

import React from "react";
import { Loader, CreditCard } from "lucide-react";

import { authClient } from "@/lib/auth-client";
import PageContainer from "@/components/layouts/page-container";
import { AppPageShell } from "@/components/layouts/page-shell";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function BillingPage() {
  const {
    data: activeOrgData,
    error: activeOrgErr,
    isPending: activeOrgPending
  } = authClient.useActiveOrganization();

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
              Please select a nursery to view billing information
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
          title="Billing"
          description="Manage your billing and subscription information"
          actionComponent={undefined}
        />

        <Separator />

        <Card className="p-6">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <CreditCard className="size-12 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-semibold">Billing Coming Soon</h2>
              <p className="text-muted-foreground mt-2">
                Billing and subscription management features will be available
                soon.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </PageContainer>
  );
}
