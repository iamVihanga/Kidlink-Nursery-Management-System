"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { format } from "date-fns";
import {
  User,
  Calendar,
  School,
  Users,
  BookOpen,
  ExternalLink
} from "lucide-react";

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

import { useGetChild } from "@/features/children/api/use-get-child";

export function Overview() {
  const { id } = useParams<{ id: string }>();

  const { data, isPending } = useGetChild({ id });

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "MMMM d, yyyy");
    } catch (error) {
      console.log(error);
      return "Invalid date";
    }
  };

  return (
    <Card className="w-full h-full bg-background/10 dark:bg-background/20">
      <CardHeader className="flex flex-col space-y-2">
        <CardTitle>Overview</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-fit px-6">
          <div className="flex flex-col space-y-6 pb-6">
            {isPending || !data ? (
              <>
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-6 w-1/2" />
                <Skeleton className="h-6 w-2/3" />
              </>
            ) : (
              <>
                <div className="flex flex-col space-y-6">
                  {/* Child Name */}
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    <span className="font-medium">Name:</span>
                    <span className="text-lg font-semibold">
                      {`${data.firstName} ${data.lastName}`}
                    </span>
                  </div>

                  {/* Date of Birth */}
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-medium">Date of Birth:</span>
                    <span>{formatDate(data.dateOfBirth)}</span>
                  </div>

                  {/* Parent Details */}
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="font-medium">Parent:</span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link href={`/parents/${data.parentId}`}>
                            <Button
                              variant="outline"
                              size="sm"
                              className="gap-1"
                            >
                              View Parent Details
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Navigate to parent profile</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>

                  {/* Nursery Info */}
                  <div className="flex items-center gap-2">
                    <School className="w-5 h-5 text-primary" />
                    <span className="font-medium">Nursery:</span>
                    {data.nurseryId ? (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link href={`/nurseries/${data.nurseryId}`}>
                              <Button
                                variant="outline"
                                size="sm"
                                className="gap-1"
                              >
                                View Nursery
                                <ExternalLink className="w-4 h-4" />
                              </Button>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Navigate to nursery details</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ) : (
                      <Badge variant="outline">Not Assigned</Badge>
                    )}
                  </div>

                  {/* Classes */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-primary" />
                      <span className="font-medium">Classes:</span>
                      <Badge>{data.classes?.length || 0}</Badge>
                    </div>

                    {data.classes && data.classes.length > 0 && (
                      <div className="pl-7 grid gap-2">
                        {data.classes.map((cls) => (
                          <Link
                            key={cls.id}
                            href={`/classes/${cls.id}`}
                            className="text-sm p-2 rounded-md hover:bg-accent flex justify-between items-center"
                          >
                            <div>
                              <div className="font-medium">{cls.name}</div>
                              <div className="text-xs text-muted-foreground">
                                {cls.description}
                              </div>
                            </div>
                            <ExternalLink className="w-4 h-4 text-muted-foreground" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Created/Updated Info */}
                  <div className="text-xs text-muted-foreground pt-2 border-t">
                    <div>Created: {formatDate(data.createdAt)}</div>
                    <div>Last updated: {formatDate(data.updatedAt)}</div>
                  </div>
                </div>
              </>
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
