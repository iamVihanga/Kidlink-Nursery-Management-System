import { headers } from "next/headers";
import { XIcon } from "lucide-react";

import { authClient } from "@/lib/auth-client";
import { AppPageShell } from "@/components/layouts/page-shell";
import PageContainer from "@/components/layouts/page-container";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

import { NurseryDetails } from "@/features/nurseries/components/panel/nursery-details";

interface NurseryPageProps {
  params: {
    id: string;
  };
}

export default async function NurseryPage({ params }: NurseryPageProps) {
  const { id } = await params;

  const org = await authClient.organization.getFullOrganization({
    query: { organizationId: id },
    fetchOptions: {
      headers: await headers()
    }
  });

  if (org.error) {
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
              {org.error.message}
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
          title={org.data.name}
          description={
            org.data.metadata?.description || "Manage selected nursery"
          }
          actionComponent={
            <div className="h-full flex flex-col items-center justify-center">
              <Badge>{org.data.members.length} Active Parents</Badge>
            </div>
          }
          logo={org.data.logo}
        />

        <Separator />

        <div className="flex-1 grid grid-cols-2 gap-4">
          {/* Nursery Details View */}
          <NurseryDetails organizationId={org.data.id} />

          <Card></Card>
        </div>
      </div>
    </PageContainer>
  );
}
