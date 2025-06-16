// src/app/(frontend)/dashboard/classes/[id]/class-overview.tsx
"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/rpc";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ClassOverview({ classId }: { classId: string }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["class", classId],
    queryFn: async () => {
      const response = await client.api.classes[classId].$get();
      
      if (!response.ok) {
        throw new Error("Failed to fetch class details");
      }
      
      return response.json();
    }
  });

  if (isLoading) {
    return <ClassOverviewSkeleton />;
  }

  if (error || !data) {
    return (
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="text-red-500">Error Loading Class</CardTitle>
        </CardHeader>
        <CardContent>
          <p>There was a problem loading the class information.</p>
          <p className="text-sm text-muted-foreground mt-2">
            {error instanceof Error ? error.message : "Unknown error"}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full overflow-auto shadow-md border-0 rounded-xl bg-white dark:bg-gray-800">
      <CardHeader className="pb-3 border-b border-gray-100 dark:border-gray-700 bg-gradient-to-r from-primary/5 to-transparent">
        <CardTitle className="text-xl font-bold text-gray-800 dark:text-gray-100">
          {data.name}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-5 space-y-6">
        {data.description && (
          <div className="group">
            <h3 className="font-medium mb-2 text-gray-600 dark:text-gray-300 flex items-center gap-2">
              <span className="inline-block w-1 h-5 bg-primary/60 rounded mr-1"></span>
              Description
            </h3>
            <div className="pl-4 border-l-2 border-primary/20 dark:border-primary/20">
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {data.description}
              </p>
            </div>
          </div>
        )}
        
        {data.teacher && (
          <div className="group">
            <h3 className="font-medium mb-2 text-gray-600 dark:text-gray-300 flex items-center gap-2">
              <span className="inline-block w-1 h-5 bg-primary/60 rounded mr-1"></span>
              Teacher
            </h3>
            <div className="pl-4 border-l-2 border-primary/20 dark:border-primary/20">
              <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
                {data.teacher.name}
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function ClassOverviewSkeleton() {
  return (
    <Card className="h-full border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
      <CardHeader className="pb-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/30">
        <Skeleton className="h-7 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-md" />
      </CardHeader>
      
      <CardContent className="p-5 space-y-6">
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/3 bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="pl-2 border-l-2 border-gray-200 dark:border-gray-700 space-y-2 mt-2">
            <Skeleton className="h-3 w-1/2 bg-gray-200/70 dark:bg-gray-700/70 rounded" />
            <Skeleton className="h-3 w-1/2 bg-gray-200/70 dark:bg-gray-700/70 rounded" />
            <Skeleton className="h-3 w-1/2 bg-gray-200/70 dark:bg-gray-700/70 rounded" />
          </div>
        </div>
        
        <div className="space-y-2 pt-1">
          <Skeleton className="h-4 w-1/3 bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="pl-2 border-l-2 border-gray-200 dark:border-gray-700 space-y-2 mt-2">
            <Skeleton className="h-3 w-full bg-gray-200/70 dark:bg-gray-700/70 rounded" />
            <Skeleton className="h-3 w-full bg-gray-200/70 dark:bg-gray-700/70 rounded" />
          </div>
        </div>
        
        <div className="space-y-2 pt-1">
          <Skeleton className="h-4 w-1/3 bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="pl-2 border-l-2 border-gray-200 dark:border-gray-700 mt-2">
            <Skeleton className="h-3 w-2/3 bg-gray-200/70 dark:bg-gray-700/70 rounded" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}