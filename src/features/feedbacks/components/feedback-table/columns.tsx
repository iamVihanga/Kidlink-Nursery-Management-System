"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChildFeedback } from "@/types/schema-types";
import { ExpandableCell } from "@/components/table/expandable-cell";

export const columns: ColumnDef<ChildFeedback>[] = [
	{
		accessorKey: "content",
		header: "Content",
		cell: ({ row }) => {
			return <ExpandableCell content={row.getValue("content")} maxLength={100} />;
		}
	},
	{
		accessorKey: "rating",
		header: "Rating"
	},
	{
		accessorKey: "childId",
		header: "Child",
		cell: ({ row }) => {
			return (
				<Button asChild size={"sm"} variant={"link"}>
					<Link href={`/dashboard/children/${row.original.childId}`}>
						View Child
					</Link>
				</Button>
			);
		}
	},
	{
		accessorKey: "createdAt",
		header: "Created At",
		cell: ({ row }) => new Date(row.original.createdAt).toLocaleDateString()
	}
];
