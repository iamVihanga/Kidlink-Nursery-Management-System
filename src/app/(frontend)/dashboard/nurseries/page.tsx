import React from "react";

import { AppPageShell } from "@/components/layouts/page-shell";
import PageContainer from "@/components/layouts/page-container";
import { Separator } from "@/components/ui/separator";

import { AddNewNursery } from "@/features/nurseries/components/add-new-nursery-modal";
// import ClassListing from "@/features/nurseries/components/nursery-listing";
// import { ClassesTableActions } from "@/features/nurseries/components/nurseries-table/nurseries-table-actions";

export default function ClassesPage() {
  return (
    <PageContainer scrollable={false}>
      <div className="flex flex-1 flex-col space-y-4">
        <AppPageShell
          title="Manage Nurseries"
          description="Manage your all nurseries here"
          actionComponent={<AddNewNursery />}
        />

        <Separator />

        {/* <ClassesTableActions />

        <ClassListing /> */}
      </div>
    </PageContainer>
  );
}
