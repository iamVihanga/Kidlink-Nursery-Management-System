"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { Badge } from "@/components/ui/badge";

import { Child } from "./cell-action";

export const columns: ColumnDef<Child>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-md bg-primary flex items-center justify-center text-sm text-primary-foreground">
            {row.original?.firstName?.slice(0, 1)}
            {row.original?.lastName?.slice(0, 1)}
          </div>
          <p>
            {row.original.firstName} {row.original.lastName}{" "}
          </p>
        </div>
      );
    }
  },
  {
    accessorKey: "parentId",
    header: "Parent",
    cell: ({ row }) => {
      return <Badge onClick={() => row.original.parentId}>View Parent</Badge>;
    }
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => new Date(row.original.createdAt).toLocaleDateString()
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
