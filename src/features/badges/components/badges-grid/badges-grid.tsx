"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/types/schema-types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, MoreHorizontal, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

interface BadgesGridProps {
  data: Badge[];
}

export function BadgesGrid({ data }: BadgesGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.map((badge) => (
        <Card
          key={badge.id}
          className="border-none shadow-sm bg-background flex flex-col items-center p-4 hover:shadow-md transition-shadow"
        >
          <Link
            href={`/dashboard/badges/${badge.id}`}
            className="w-full flex justify-center"
          >
            <div className="relative w-32 h-32 mb-3">
              {badge.imageUrl ? (
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/20 hover:border-primary/40 transition-colors shadow-sm">
                  <Image
                    src={badge.imageUrl}
                    alt={badge.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-3xl font-bold text-primary-foreground">
                    {badge.name.slice(0, 2).toUpperCase()}
                  </span>
                </div>
              )}
            </div>
          </Link>

          <CardContent className="p-0 text-center w-full">
            <Link
              href={`/dashboard/badges/${badge.id}`}
              className="text-lg font-medium hover:text-primary hover:underline transition-colors line-clamp-1 mt-2"
            >
              {badge.name}
            </Link>
            <p className="text-sm text-muted-foreground mt-2 line-clamp-2 px-2">
              {badge.description || "No description available"}
            </p>
          </CardContent>

          <CardFooter className="flex justify-between w-full pt-4 mt-2 border-t">
            <div className="text-xs text-muted-foreground">
              {new Date(badge.createdAt).toLocaleDateString()}
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {/* <DropdownMenuItem asChild>
                  <Link href={`/dashboard/badges/${badge.id}`} className="flex items-center">
                    <Eye className="mr-2 h-4 w-4" />
                    <span>View</span>
                  </Link>
                </DropdownMenuItem> */}
                <DropdownMenuItem className="flex items-center">
                  <Edit className="mr-2 h-4 w-4" />
                  <span>Edit</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center text-destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
