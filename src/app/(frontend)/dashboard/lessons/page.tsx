"use client";

import React from "react";
import PageContainer from "@/components/layouts/page-container";
import { AppPageShell } from "@/components/layouts/page-shell";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlusCircleIcon } from "lucide-react";

export default function NotificationPage() {
  return (
    <PageContainer scrollable={true}>
      <div className="flex flex-1 flex-col space-y-4">
        <AppPageShell
          title="Lesson Plans"
          description="Manage and review all lesson plans"
          actionComponent={
            <Button asChild icon={<PlusCircleIcon className="h-4 w-4" />}>
              <Link href="/dashboard/lessons/new">Add New Lesson</Link>
            </Button>
          }
        />

        <Separator />
      </div>
    </PageContainer>
  );
}
