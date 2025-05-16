"use client";

import React, { useState, useEffect } from "react";

import { columns } from "./badges-table/columns";
import { DataTable } from "@/components/table/data-table";
import { DataTableSkeleton } from "@/components/table/data-table-skeleton";
import { useBadgesTableFilters } from "./badges-table/use-badges-table-filters";
import DataTableError from "@/components/table/data-table-error";
import { useGetBadges } from "../api/use-get-badges";
import { BadgesGrid } from "./badges-grid/badges-grid";

// Get user preference from localStorage if available, default to grid
const getUserViewPreference = (): "grid" | "list" => {
  if (typeof window === "undefined") return "grid";
  return (localStorage.getItem("badgesViewMode") as "grid" | "list") || "grid";
};

interface BadgesListingProps {
  viewMode: "grid" | "list";
}

export function BadgesListing({ viewMode }: BadgesListingProps) {
  const { page, limit, searchQuery } = useBadgesTableFilters();

  const { data, error, isPending } = useGetBadges({
    limit,
    page,
    search: searchQuery
  });

  // Save user preference when view mode changes
  useEffect(() => {
    localStorage.setItem("badgesViewMode", viewMode);
  }, [viewMode]);

  const handleViewChange = (view: "grid" | "list") => {
    setViewMode(view);
  };

  if (isPending) {
    return viewMode === "grid" ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="h-[280px] animate-pulse rounded-md bg-muted"></div>
        ))}
      </div>
    ) : (
      <DataTableSkeleton columnCount={columns.length} rowCount={4} />
    );
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
    <>
      {viewMode === "grid" ? (
        <BadgesGrid data={transformedData.badges} />
      ) : (
        <DataTable
          columns={columns}
          data={transformedData.badges}
          totalItems={data.pagination.total}
        />
      )}
    </>
  );
}

// Export a higher-order component that includes view state and toggle
export function BadgesListingWithViewToggle() {
  const [viewMode, setViewMode] = useState<"grid" | "list">(getUserViewPreference());

  useEffect(() => {
    localStorage.setItem("badgesViewMode", viewMode);
  }, [viewMode]);

  return {
    viewMode,
    setViewMode,
    BadgesListing
  };
}
