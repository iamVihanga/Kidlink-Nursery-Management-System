"use client";

import React from "react";

import { columns } from "./badges-table/columns";
import { DataTable } from "@/components/table/data-table";
import { DataTableSkeleton } from "@/components/table/data-table-skeleton";
import { useBadgesTableFilters } from "./badges-table/use-badges-table-filters";
import DataTableError from "@/components/table/data-table-error";
import { useGetBadges } from "../api/use-get-badges";

export function BadgesListing() {
  const { page, limit, searchQuery } = useBadgesTableFilters();

  const { data, error, isPending } = useGetBadges({
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
    badges: data.badges.map((badge) => ({
      ...badge,
      createdAt: new Date(badge.createdAt),
      updatedAt: new Date(badge.updatedAt)
    }))
  };

  return (
    <DataTable
      columns={columns}
      data={transformedData.badges}
      totalItems={data.pagination.total}
    />
  );
}
