"use client";

import React from "react";
import { ListTodoIcon, Loader } from "lucide-react";

import PageContainer from "@/components/layouts/page-container";
import { AppPageShell } from "@/components/layouts/page-shell";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { authClient } from "@/lib/auth-client";
import { NurserySwitcher } from "@/features/nurseries/components/nursery-switcher";
import { AddNewNursery } from "@/features/nurseries/components/add-new-nursery-modal";

import { ParentsListing } from "@/features/parents/components/parent-listing";
import { ParentsTableActions } from "@/features/parents/components/parents-table/parents-table-actions";

export default function ParentsPage() {
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
      <div className="px-5 pb-5 flex-1 flex items-center justify-center w-full h-full">
        <Card className="w-full h-full bg-sidebar p-0 flex flex-col items-center justify-center">
          <div className="p-3 rounded-xl bg-primary dark:bg-secondary">
            <ListTodoIcon className="size-8 text-white" />
          </div>
          <h1 className="mt-5 font-heading text-2xl font-semibold">
            Select nursery to manage parents
          </h1>
          <p className="text-xs mt-1 text-foreground/60">
            You can select nursery with sidebar nursery switcher or following
            dropdown
          </p>

          <div className="mt-4 w-96">
            <NurserySwitcher />
          </div>

          <Separator className="my-4 w-96" />

          <AddNewNursery />
        </Card>
      </div>
    );
  }

  return (
    <PageContainer scrollable={false}>
      <div className="flex flex-1 flex-col space-y-4">
        <AppPageShell
          title="Manage Parents"
          description={`Manage parents in "${activeOrgData.name}"`}
          actionComponent={
            <div className="w-fit rounded-lg">
              <NurserySwitcher />
            </div>
          }
        />

        <Separator />

        <ParentsTableActions />

        <ParentsListing />
      </div>
    </PageContainer>
  );
}
