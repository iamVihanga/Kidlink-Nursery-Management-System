"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { useBadgesTableFilters } from "./use-badges-table-filters";
import { BadgesViewToggle } from "../badges-view-toggle";

interface BadgesTableActionsProps {
  currentView: "grid" | "list";
  onViewChange: (view: "grid" | "list") => void;
}

export function BadgesTableActions({ currentView, onViewChange }: BadgesTableActionsProps) {
  const {
    // Search
    searchQuery,
    setSearchQuery,

    // Pagination
    setPage,

    // Reset
    resetFilters,
    isAnyFilterActive
  } = useBadgesTableFilters();

  return (
    <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <Input
        placeholder="Search badges..."
        className="max-w-sm"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <BadgesViewToggle currentView={currentView} onViewChange={onViewChange} />
    </div>
  );
}
