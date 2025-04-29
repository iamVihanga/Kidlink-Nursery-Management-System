"use client";

import React from "react";

import { useGetClasses } from "@/features/classes/api/use-get-classes";

import { columns } from "./classes-table/columns";
import { useClassesTableFilters } from "./classes-table/use-classes-table-filters";

import { DataTable } from "@/components/table/data-table";
import { DataTableSkeleton } from "@/components/table/data-table-skeleton";
import DataTableError from "@/components/table/data-table-error";

export default function NurseriesTable() {
  const { page, limit, searchQuery } = useClassesTableFilters();

  const { data, error, isPending } = useGetClasses({
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
      data={data.data}
      totalItems={data.pagination.total}
    />
  );
}
