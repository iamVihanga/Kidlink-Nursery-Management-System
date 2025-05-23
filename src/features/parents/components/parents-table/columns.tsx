"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { CellAction } from "./cell-action";
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
      const content = row.original.image ? (
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
      ) : (
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-md bg-primary flex items-center justify-center text-sm text-primary-foreground">
            {row.original?.name?.slice(0, 2)}
          </div>
          <p>{row.original.name}</p>
        </div>
      );
      
      return (
        <Link 
          href={`/dashboard/parents/${row.original.id}`}
          className="hover:underline text-primary cursor-pointer"
        >
          {content}
        </Link>
      );
    }
  },
  {
    accessorKey: "email",
    header: "Email"
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