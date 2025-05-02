"use client";
import React from "react";

import { useTeachersTableFilters } from "./use-teachers-table-filters";
import { DataTableSearch } from "@/components/table/data-table-search";
import { DataTableResetFilter } from "@/components/table/data-table-reset-filter";
import { InviteTeacher } from "../invite-teacher";

export function TeachersTableActions() {
  const {
    // Search
    searchQuery,
    setSearchQuery,

    // Pagination
    setPage,

    // Reset
    resetFilters,
    isAnyFilterActive
  } = useTeachersTableFilters();

  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex flex-1 flex-wrap items-center gap-4">
        <DataTableSearch
          searchKey="name"
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setPage={setPage}
        />
        <DataTableResetFilter
          isFilterActive={isAnyFilterActive}
          onReset={resetFilters}
        />
      </div>

      <InviteTeacher />
    </div>
  );
}
