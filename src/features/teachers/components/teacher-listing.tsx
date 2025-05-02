"use client";

import React from "react";

import { columns } from "./teachers-table/columns";
import { DataTable } from "@/components/table/data-table";
import { DataTableSkeleton } from "@/components/table/data-table-skeleton";
import { useTeachersTableFilters } from "./teachers-table/use-teachers-table-filters";
import DataTableError from "@/components/table/data-table-error";
import { useGetTeachers } from "../api/use-get-teachers";

export function TeachersListing() {
  const { page, limit, searchQuery } = useTeachersTableFilters();

  const { data, error, isPending } = useGetTeachers({
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
      data={data.teachers}
      totalItems={data.pagination.total}
    />
  );
}
