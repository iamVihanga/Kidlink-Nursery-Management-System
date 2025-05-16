"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/types/schema-types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Eye, MoreHorizontal, Trash2 } from "lucide-react";
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((badge) => (
        <Card key={badge.id} className="overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
          <Link href={`/dashboard/badges/${badge.id}`} className="flex-1">
            <div className="relative h-40 bg-muted/30">
              {badge.imageUrl ? (
                <Image 
                  src={badge.imageUrl} 
                  alt={badge.name} 
                  fill 
                  className="object-cover" 
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-primary/10">
                  <div className="size-20 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {badge.name.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </Link>
          <CardContent className="pt-4 flex-1">
            <Link 
              href={`/dashboard/badges/${badge.id}`}
              className="text-lg font-semibold hover:text-primary hover:underline transition-colors line-clamp-1"
            >
              {badge.name}
            </Link>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {badge.description || "No description available"}
            </p>
          </CardContent>
          <CardFooter className="flex justify-between pb-4 pt-2 border-t">
            <div className="text-xs text-muted-foreground">
              {new Date(badge.createdAt).toLocaleDateString()}
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href={`/dashboard/badges/${badge.id}`}>
                    <Eye className="mr-2 h-4 w-4" />
                    <span>View</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Edit className="mr-2 h-4 w-4" />
                  <span>Edit</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">
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