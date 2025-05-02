"use client";

import React from "react";

import { columns } from "./parents-table/columns";
import { DataTable } from "@/components/table/data-table";
import { DataTableSkeleton } from "@/components/table/data-table-skeleton";
import { useParentsTableFilters } from "./parents-table/use-parents-table-filters";
import DataTableError from "@/components/table/data-table-error";
import { useGetParents } from "../api/use-get-parents";

export function ParentsListing() {
  const { page, limit, searchQuery } = useParentsTableFilters();

  const { data, error, isPending } = useGetParents({
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
      data={data.parents}
      totalItems={data.pagination.total}
    />
  );
}
