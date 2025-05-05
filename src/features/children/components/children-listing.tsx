"use client";

import React from "react";

import { columns } from "./children-table/columns";
import { DataTable } from "@/components/table/data-table";
import { DataTableSkeleton } from "@/components/table/data-table-skeleton";
import { useChildrenTableFilters } from "./children-table/use-children-table-filters";
import DataTableError from "@/components/table/data-table-error";
import { useGetChildren } from "../api/use-get-children";

export function ChildrenListing() {
  const { page, limit, searchQuery } = useChildrenTableFilters();

  const { data, error, isPending } = useGetChildren({
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
      data={data.children}
      totalItems={data.pagination.total}
    />
  );
}
