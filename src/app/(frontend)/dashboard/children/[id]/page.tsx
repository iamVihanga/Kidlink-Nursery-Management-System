"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Loader, XIcon } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import PageContainer from "@/components/layouts/page-container";

import { AppPageShell } from "@/components/layouts/page-shell";
import { useGetChild } from "@/features/children/api/use-get-child";

import { AssignToClass } from "@/features/children/components/assign-to-class";
import { Panel } from "@/features/children/components/panel";

export default function SingleChildPage() {
  const { id } = useParams<{ id: string }>();
  const { data, error, isPending } = useGetChild({ id });

  if (isPending || !data) {
    return (
      <PageContainer scrollable={false}>
        <div className="flex flex-1 flex-col items-center justify-center space-y-4">
          <div className="p-2 rounded-full bg-foreground/10">
            <Loader className="size-6 animate-spin" />
          </div>
        </div>
      </PageContainer>
    );
  }

  if (error) {
    return (
      <div className="px-5 pb-5 flex-1 flex items-center justify-center w-full h-full">
        <Card className="w-full h-full bg-sidebar p-0 flex flex-col items-center justify-center">
          <div className="p-3 rounded-xl bg-primary dark:bg-secondary">
            <XIcon className="size-8 text-white" />
          </div>
          <h1 className="mt-5 font-heading text-2xl font-semibold">
            {`Something went wrong !`}
          </h1>
          <p className="text-xs mt-1 text-foreground/60">
            {`${error.message}`}
          </p>
        </Card>
      </div>
    );
  }

  return (
    <PageContainer scrollable={false}>
      <div className="flex flex-1 flex-col space-y-4 h-[calc(100dvh-52px)]">
        <AppPageShell
          title={`${data.firstName} ${data.lastName}`}
          description={`Manage classes, attendance, and other information for ${data.firstName} ${data.lastName}`}
          actionComponent={<AssignToClass childId={data.id} />}
        />

        <Separator />

        <Panel />
      </div>
    </PageContainer>
  );
}
