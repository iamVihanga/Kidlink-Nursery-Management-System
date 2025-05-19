"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { format } from "date-fns";
import {
  Calendar,
  School,
  Users,
  BookOpen,
  ExternalLink,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useGetChild } from "@/features/children/api/use-get-child";

export function Overview() {
  const { id } = useParams<{ id: string }>();
  const { data, isPending } = useGetChild({ id });

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "MMM d, yyyy");
    } catch (error) {
      return "Invalid date";
    }
  };

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName?.[0] || ''}${lastName?.[0] || ''}`.toUpperCase();
  };

  return (
    <Card className="w-full h-full overflow-hidden border-none shadow-md bg-background dark:bg-background/20">
      {isPending || !data ? (
        <div className="p-4 space-y-4">
          <div className="flex items-center gap-3">
            <Skeleton className="h-14 w-14 rounded-full" />
            <div className="flex-1">
              <Skeleton className="h-5 w-36 mb-2" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
          <div className="space-y-3 mt-4">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-3/4" />
          </div>
        </div>
      ) : (
        <>
          <div className="p-4 border-b flex items-center gap-4">
            <Avatar className="h-14 w-14 border-2 border-primary/20">
              <AvatarImage src="" alt={`${data.firstName} ${data.lastName}`} />
              <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                {getInitials(data.firstName, data.lastName)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-base font-semibold leading-tight">{`${data.firstName} ${data.lastName}`}</h1>
              <div className="flex mt-1 gap-1.5">
                <Badge variant="outline" className="text-xs px-1.5 h-5">Child</Badge>
                {data.nurseryId && (
                  <Badge className="bg-primary/20 text-primary text-xs px-1.5 h-5">
                    <School className="w-3 h-3 mr-1" /> Enrolled
                  </Badge>
                )}
              </div>
            </div>
          </div>

          <CardContent className="p-0">
            <ScrollArea className="h-[calc(100vh-266px)]">
              <div className="p-4 space-y-3">
                {/* Date of Birth */}
                <div className="flex items-center gap-3 py-1.5">
                  <Calendar className="w-4 h-4 text-primary/80" />
                  <span className="text-sm text-muted-foreground">Born:</span>
                  <span className="text-sm font-medium ml-auto">{formatDate(data.dateOfBirth)}</span>
                </div>

                {/* Parent Details */}
                <div className="flex items-center gap-3 py-1.5">
                  <Users className="w-4 h-4 text-primary/80" />
                  <span className="text-sm text-muted-foreground">Parent:</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-auto h-7 px-2.5 text-sm gap-1"
                    asChild
                  >
                    <Link href={`/dashboard/parents/${data.parentId}`}>
                      View <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </Button>
                </div>

                {/* Nursery Info */}
                <div className="flex items-center gap-3 py-1.5">
                  <School className="w-4 h-4 text-primary/80" />
                  <span className="text-sm text-muted-foreground">Nursery:</span>
                  {data.nurseryId ? (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="ml-auto h-7 px-2.5 text-sm gap-1"
                      asChild
                    >
                      <Link href={`/dashboard/nurseries/${data.nurseryId}`}>
                        View <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </Button>
                  ) : (
                    <span className="ml-auto text-sm font-medium text-muted-foreground">
                      Not assigned
                    </span>
                  )}
                </div>

                {/* Classes */}
                <div className="py-1.5">
                  <div className="flex items-center gap-3 mb-2">
                    <BookOpen className="w-4 h-4 text-primary/80" />
                    <span className="text-sm text-muted-foreground">Classes:</span>
                    <span className="ml-auto text-sm font-medium">
                      {data.classes?.length || 0}
                    </span>
                  </div>

                  {data.classes && data.classes.length > 0 && (
                    <div className="ml-7 space-y-2 mt-2">
                      {data.classes.map((cls) => (
                        <Link
                          key={cls.id}
                          href={`/dashboard/classes/${cls.id}`}
                          className="flex items-center px-3 py-2 rounded hover:bg-primary/5 border border-border/50 text-sm"
                        >
                          <span className="font-medium truncate">{cls.name}</span>
                          <ExternalLink className="w-3.5 h-3.5 text-muted-foreground ml-auto" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Created/Updated Info */}
                <div className="text-xs text-muted-foreground pt-3 border-t border-border/50 mt-4">
                  <div className="flex justify-between">
                    <span>Created:</span>
                    <span>{formatDate(data.createdAt)}</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span>Updated:</span>
                    <span>{formatDate(data.updatedAt)}</span>
                  </div>
                </div>
              </div>
            </ScrollArea>
          </CardContent>
        </>
      )}
    </Card>
  );
}
