"use client";

import React from "react";
import { ListTodoIcon, Loader } from "lucide-react";

import { authClient } from "@/lib/auth-client";
import PageContainer from "@/components/layouts/page-container";
import { AppPageShell } from "@/components/layouts/page-shell";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { NurserySwitcher } from "@/features/nurseries/components/nursery-switcher";
import { FeedbacksListing } from "@/features/feedbacks/components/feedback-listing";
import { FeedbacksTableActions } from "@/features/feedbacks/components/feedback-table/feedback-table-actions";
import { AddNewFeedback } from "@/features/feedbacks/components/new-feedback-modal";

export default function FeedbacksPage() {
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
            Select nursery to manage Feedbacks
          </h1>
          <p className="text-xs mt-1 text-foreground/60">
            You can select nursery with sidebar nursery switcher or following
            dropdown
          </p>

          <div className="mt-4 w-96">
            <NurserySwitcher />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <PageContainer scrollable={false}>
      <div className="flex flex-1 flex-col space-y-4">
        <AppPageShell
          title="Manage Badges"
          description={`Manage badges in "${activeOrgData.name}"`}
          actionComponent={<AddNewFeedback />}
        />

        <Separator />

        <FeedbacksTableActions />

        <FeedbacksListing />
      </div>
    </PageContainer>
  );
}
