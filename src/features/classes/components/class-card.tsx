"use client";

import React from "react";
import { formatDistanceToNow } from "date-fns";
import { EditIcon, MoreVertical, TrashIcon } from "lucide-react";
import { Class } from "@/types/schema-types/index";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useDeleteClass } from "@/features/classes/api/use-delete-class";
import { ClassesAuthContext } from "../classes-auth-context";
import { useClassesGridFilters } from "./classes-grid/use-classes-grid-filters";
import Link from "next/link";
import Image from "next/image";

type Props = {
  _class: Class;
  authContext: ClassesAuthContext;
};

export function ClassCard({ _class, authContext }: Props) {
  const role = "error" in authContext ? null : authContext.activeMember?.role;
  const permissions = "error" in authContext ? null : authContext.permissions;
  const { setUpdateId } = useClassesGridFilters();
  const { mutate: deleteMutate } = useDeleteClass();
  const { name, description, createdAt } = _class;
  const formattedDate = formatDistanceToNow(new Date(createdAt), {
    addSuffix: true
  });

  return (
    <Card className="w-full max-w-xs h-fit hover:shadow-sm dark:bg-secondary/10 transition-shadow duration-300 p-3">
      <div className="relative">
        {role !== "member" && (
          <div className="absolute right-1 top-1 z-10">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 bg-background/70 rounded-full"
                >
                  <MoreVertical className="h-3.5 w-3.5" />
                  <span className="sr-only">Actions</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-28">
                {permissions?.update && (
                  <DropdownMenuItem
                    className="cursor-pointer text-xs py-1"
                    onClick={() => setUpdateId(_class.id.toString())}
                  >
                    <EditIcon className="size-3 mr-1.5" /> Edit
                  </DropdownMenuItem>
                )}
                {permissions?.delete && (
                  <DropdownMenuItem
                    className="text-destructive cursor-pointer text-xs py-1"
                    onClick={() => deleteMutate({ id: _class.id })}
                  >
                    <TrashIcon className="size-3 mr-1.5" /> Delete
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}

        <div className="aspect-video w-full overflow-hidden rounded-md mb-2">
          <Image
            src="/assets/class_thumbnail.jpg"
            alt={name}
            width={240}
            height={135}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <Link href={`/dashboard/classes/${_class.id}`} className="block">
        <h3 className="text-sm font-semibold line-clamp-1 hover:text-primary transition-colors">
          {name}
        </h3>
      </Link>

      {description && (
        <p className="text-xs text-muted-foreground line-clamp-1 mt-1">
          {description}
        </p>
      )}

      <div className="flex items-center justify-between mt-2 pt-2 border-t text-xs">
        <span className="text-muted-foreground truncate max-w-[130px]">
          {formattedDate}
        </span>
        <Button
          variant="secondary"
          size="sm"
          className="h-7 px-2 text-xs"
          asChild
        >
          <Link href={`/dashboard/classes/${_class.id}`}>Manage</Link>
        </Button>
      </div>
    </Card>
  );
}
