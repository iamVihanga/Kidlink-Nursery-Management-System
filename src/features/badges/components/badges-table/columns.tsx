"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { CellAction } from "./cell-action";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/types/schema-types";

export const columns: ColumnDef<Badge>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      if (row.original.imageUrl) {
        return (
          <div className="flex items-center gap-3">
            <Image
              alt={`${row.original.name}`}
              src={row.original.imageUrl}
              width={50}
              height={50}
              className="size-8 rounded-md object-cover"
            />

            <p>{row.original.name}</p>
          </div>
        );
      } else {
        return (
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-md bg-primary flex items-center justify-center text-sm text-primary-foreground">
              {row.original?.name?.slice(0, 2)}
            </div>
            <p>{row.original.name}</p>
          </div>
        );
      }
    }
  },
  {
    accessorKey: "description",
    header: "Description"
  },
  {
    accessorKey: "id",
    header: "Details",
    cell: ({ row }) => {
      return (
        <Button asChild size={"sm"} variant={"link"}>
          <Link href={`/dashboard/badges/${row.original.id}`}>View</Link>
        </Button>
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
