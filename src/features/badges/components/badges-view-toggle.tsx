"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Grid, ListIcon } from "lucide-react";

interface BadgesViewToggleProps {
  currentView: "grid" | "list";
  onViewChange: (view: "grid" | "list") => void;
}

export function BadgesViewToggle({ currentView, onViewChange }: BadgesViewToggleProps) {
  return (
    <div className="flex items-center space-x-2">
      <Button
        variant={currentView === "grid" ? "default" : "outline"}
        size="sm"
        onClick={() => onViewChange("grid")}
        className="w-9 p-0"
        aria-label="Grid view"
      >
        <Grid className="h-4 w-4" />
      </Button>
      <Button
        variant={currentView === "list" ? "default" : "outline"}
        size="sm"
        onClick={() => onViewChange("list")}
        className="w-9 p-0"
        aria-label="List view"
      >
        <ListIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}