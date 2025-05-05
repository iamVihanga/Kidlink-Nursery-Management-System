"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AlertCircle, Presentation } from "lucide-react";

import { useGetClasses } from "../api/use-get-classes";
import { useClassesGridFilters } from "./classes-grid/use-classes-grid-filters";
import { GridSkeleton } from "./GridSkeleton";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle
} from "@/components/ui/card";
import { ClassCard } from "./class-card";
import { ClassesGridPagination } from "./classes-grid/classes-grid-pagination";
import { authClient } from "@/lib/auth-client";

import { ClassesAuthContext } from "@/features/classes/classes-auth-context";
import { UpdateClass } from "./update-class-dialog";

interface Props {
  authContext: ClassesAuthContext;
}

export function ClassesListing({ authContext }: Props) {
  const { page, limit, searchQuery } = useClassesGridFilters();
  const activeOrg = authClient.useActiveOrganization();
  const router = useRouter();

  const { data, error, isPending } = useGetClasses({
    limit,
    page,
    search: searchQuery
  });

  // This part is essential for listen org changes and refresh lessons auth-context
  useEffect(() => {
    if (!activeOrg.data?.id) {
      return;
    }

    if (activeOrg.data?.id) {
      router.refresh();
    }
  }, [activeOrg.data?.id]);

  if (isPending) {
    return <GridSkeleton />;
  }

  if (!data || error) {
    return (
      <Card className="p-0">
        <CardContent className="p-4">
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="size-5" />
            Something went wrong !
          </CardTitle>
          <CardDescription className="mt-4">
            {error?.message || "Server error"}
          </CardDescription>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <UpdateClass />

      <div className=" flex flex-col gap-8 flex-1">
        {data.pagination.total > 0 ? (
          <div className="flex-1 grid grid-cols-3 gap-4">
            {data.classes.map((classI) => (
              <ClassCard
                key={classI.id}
                _class={{
                  ...classI,
                  createdAt: new Date(classI.createdAt),
                  updatedAt: new Date(classI.updatedAt)
                }}
                authContext={authContext}
              />
            ))}
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center gap-3">
            <Presentation className="size-12 text-foreground/60" />
            <div className="space-y-1 text-center">
              <h1 className="font-semibold text-xl font-heading">
                No any classes here
              </h1>
              <p className="text-foreground/60 text-sm">
                There are no classes available for selected nursery
              </p>
            </div>
          </div>
        )}

        <ClassesGridPagination totalItems={data.pagination.total} />
      </div>
    </>
  );
}
