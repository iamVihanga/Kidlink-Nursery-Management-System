import React from "react";
import { ListTodoIcon } from "lucide-react";

import PageContainer from "@/components/layouts/page-container";
import { AppPageShell } from "@/components/layouts/page-shell";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { NurserySwitcher } from "@/features/nurseries/components/nursery-switcher";

import { AddClassDialog } from "@/features/classes/components/add-class-dialog";
import { ClassesListing } from "@/features/classes/components/classes-listing";
import { ClassesGridActions } from "@/features/classes/components/classes-grid/classes-grid-actions";
import { classesAuthContext } from "@/features/classes/classes-auth-context";

export default async function ClassesPage() {
  const authContext = await classesAuthContext();

  if ("error" in authContext || !authContext.activeOrganization) {
    return (
      <div className="px-5 pb-5 flex-1 flex items-center justify-center w-full h-full">
        <Card className="w-full h-full bg-sidebar p-0 flex flex-col items-center justify-center">
          <div className="p-3 rounded-xl bg-primary dark:bg-secondary">
            <ListTodoIcon className="size-8 text-white" />
          </div>
          <h1 className="mt-5 font-heading text-2xl font-semibold">
            Select nursery to explore classes
          </h1>
          <p className="text-xs mt-1 text-foreground/60">
            You can select nursery with sidebar nursery switcher or following
            dropdown
          </p>

          <div className="mt-4 w-48 border rounded-lg">
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
          title={`Manage Classes`}
          description="Manage your all classes for selected class in here"
          actionComponent={
            authContext.permissions["create"] && <AddClassDialog />
          }
        />

        <Separator />

        <ClassesGridActions />

        <ClassesListing authContext={authContext} />
      </div>
    </PageContainer>
  );
}
