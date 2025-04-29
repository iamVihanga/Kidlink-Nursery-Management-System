"use client";

import React from "react";

import { useGetNurseries } from "@/features/nurseries/api/use-get-nurseries";

import { columns } from "./nurseries-table/columns";
import { useNurseriesTableFilters } from "./nurseries-table/use-nurseries-table-filters";

import { DataTable } from "@/components/table/data-table";
import { DataTableSkeleton } from "@/components/table/data-table-skeleton";
import DataTableError from "@/components/table/data-table-error";

export function NurseriesTable() {
  const { page, limit, searchQuery } = useNurseriesTableFilters();

  const { data, error, isPending } = useGetNurseries({
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

  return (
    <DataTable
      columns={columns}
      data={data.nurseries}
      totalItems={data.pagination.total}
    />
  );
}
