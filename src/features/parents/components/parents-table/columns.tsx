"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { CellAction } from "./cell-action";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Parent = {
  id: string;
  userId: string | undefined;
  name: string | undefined;
  email: string | undefined;
  image?: string | null | undefined;
  role: string;
  createdAt: string;
};

export const columns: ColumnDef<Parent>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      if (row.original.image) {
        return (
          <div className="flex items-center gap-3">
            <Image
              alt={`${row.original.name}`}
              src={row.original.image}
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
    accessorKey: "email",
    header: "Email"
  },
  {
    accessorKey: "id",
    header: "Details",
    cell: ({ row }) => {
      return (
        <Button asChild size={"sm"} variant={"link"}>
          <Link href={`/dashboard/parents/${row.original.id}`}>View</Link>
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
