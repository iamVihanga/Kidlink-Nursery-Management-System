"use client";

import { useCallback, useMemo } from "react";
import { useQueryState } from "nuqs";

import { searchParams } from "@/lib/searchparams";

export function useClassesGridFilters() {
  const [searchQuery, setSearchQuery] = useQueryState(
    "q",
    searchParams.q
      .withOptions({ shallow: false, throttleMs: 1000 })
      .withDefault("")
  );

  const [page, setPage] = useQueryState(
    "page",
    searchParams.page.withDefault(1)
  );

  const [limit, setLimit] = useQueryState(
    "limit",
    searchParams.limit.withDefault(10)
  );

  const [updateId, setUpdateId] = useQueryState(
    "update_id",
    searchParams.updateId.withDefault("")
  );

  const [classId, setClassId] = useQueryState(
    "active_class",
    searchParams.classId.withDefault("")
  );

  const resetFilters = useCallback(() => {
    setSearchQuery(null);
    setPage(1);
    setLimit(10);
    setUpdateId(null);
    setClassId(null);
  }, [setSearchQuery, setPage]);

  const isAnyFilterActive = useMemo(() => {
    return !!searchQuery;
  }, [searchQuery]);

  return {
    // Search
    searchQuery,
    setSearchQuery,

    // Pagination
    page,
    setPage,
    limit,
    setLimit,

    // Reset
    resetFilters,
    isAnyFilterActive,

    // Update
    updateId,
    setUpdateId,

    // Lesson
    classId,
    setClassId
  };
}
