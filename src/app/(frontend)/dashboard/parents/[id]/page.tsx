"use client";
import { useParams } from "next/navigation";
import { XIcon, Loader } from "lucide-react";
import { format } from "date-fns";

import { AppPageShell } from "@/components/layouts/page-shell";
import PageContainer from "@/components/layouts/page-container";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";

import { useGetParent } from "@/features/parents/api/use-get-parent";
import { ParentOverview } from "@/features/parents/components/parent-overview";

export default function NurseryPage() {
  const { id } = useParams<{ id: string }>();

  const { data, error, isPending } = useGetParent({ parentId: id });

  const formatDate = (dateString?: string) => {
    try {
      if (!dateString) return dateString;

      return format(new Date(dateString), "MMMM d, yyyy");
    } catch (error) {
      console.log(error);
      return "Invalid date";
    }
  };

  if (isPending) {
    <PageContainer scrollable={false}>
      <div className="flex flex-1 flex-col items-center justify-center space-y-4">
        <div className="p-2 rounded-full bg-foreground/10">
          <Loader className="size-6 animate-spin" />
        </div>
      </div>
    </PageContainer>;
  }

  if (error) {
    return (
      <PageContainer scrollable={false}>
        <div className="flex flex-1 flex-col items-center justify-center space-y-4 bg-sidebar rounded-md border">
          <div className="p-2 rounded-full bg-destructive/10">
            <XIcon className="size-6 text-destructive" />
          </div>

          <div className="space-y-1">
            <h1 className="text-2xl font-bold text-center">
              Something went wrong !
            </h1>
            <p className="text-sm text-muted-foreground text-center">
              {error.message}
            </p>
          </div>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer scrollable={false}>
      <div className="flex flex-1 flex-col space-y-4">
        <AppPageShell
          title={`${data?.name}`}
          description={`${data?.email} - Joined on ${formatDate(data?.createdAt)}`}
          actionComponent={<></>}
          logo={data?.image}
        />

        <Separator />

        <div className="flex-1 grid grid-cols-2 gap-4">
          {/* Parent Details View */}
          <ParentOverview />
          <Card></Card>
        </div>
      </div>
    </PageContainer>
  );
}
