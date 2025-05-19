"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { Child } from "./cell-action";
import Link from "next/link";

export const columns: ColumnDef<Child>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const content = (
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
      
      return (
        <Link 
          href={`/dashboard/children/${row.original.id}`}
          className="hover:underline text-primary cursor-pointer"
        >
          {content}
        </Link>
      );
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