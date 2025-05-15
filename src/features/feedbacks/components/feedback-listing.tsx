"use client";

import React from "react";

import { columns } from "./feedback-table/columns";
import { DataTable } from "@/components/table/data-table";
import { DataTableSkeleton } from "@/components/table/data-table-skeleton";
import { useFeedbacksTableFilters } from "./feedback-table/use-feedback-table-filters";
import DataTableError from "@/components/table/data-table-error";
import { useGetFeedbacks } from "../api/use-get-feedbacks";

export function FeedbacksListing() {
  const { page, limit, searchQuery } = useFeedbacksTableFilters();

  const { data, error, isPending } = useGetFeedbacks({
    limit,
    page,
    search: searchQuery
  });

  if (isPending) {
    return <DataTableSkeleton columnCount={columns.length} rowCount={4} />;
  }

  if (!data || error) {
    return <DataTableError error={error} />;
  }

  // Transform the data to convert string dates to Date objects
  const transformedData = {
    ...data,
    feedbacks: data.feedbacks.map((feedback) => ({
      ...feedback,
      createdAt: new Date(feedback.createdAt),
      updatedAt: new Date(feedback.updatedAt)
    }))
  };

  return (
    <DataTable
      columns={columns}
      data={transformedData.feedbacks}
      totalItems={data.pagination.total}
    />
  );
}
