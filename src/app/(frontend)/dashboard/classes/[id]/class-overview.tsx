/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import { Users, User } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface ClassOverviewProps {
  classId: string;
}

export function ClassOverview({ classId }: ClassOverviewProps) {
  // In a real implementation, you would fetch class data from your API
  const [loading, setLoading] = React.useState(true);
  const [classDetails, setClassDetails] = React.useState({
    id: classId,
    name: "",
    description: "",
    teacher: "",
    schedule: "",
    time: "",
    location: "",
    studentsCount: 0,
    capacity: 0,
    nurseryId: "",
    nurseryName: "",
    subjects: [] as string[],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };

  if (loading) {
    return (
      <Card className="w-full h-full overflow-hidden border-none shadow-md bg-background dark:bg-background/20">
        <div className="p-4 border-b flex items-center gap-4">
          <Skeleton className="h-14 w-14 rounded-full" />
          <div>
            <Skeleton className="h-5 w-32 mb-2" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
        <CardContent className="p-4">
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full h-full overflow-hidden border-none shadow-md bg-background dark:bg-background/20">
      <div className="p-4 border-b flex items-center gap-4">
        <Avatar className="h-14 w-14 border-2 border-primary/20">
          <AvatarFallback className="bg-primary text-primary-foreground text-lg">
            {getInitials(classDetails.name)}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-base font-semibold leading-tight">
            {classDetails.name}
          </h1>
          <div className="flex mt-1 gap-1.5">
            <Badge variant="outline" className="text-xs px-1.5 h-5">
              Class
            </Badge>
            <Badge className="bg-primary/20 text-primary text-xs px-1.5 h-5">
              <Users className="w-3 h-3 mr-1" /> {classDetails.studentsCount}{" "}
              Students
            </Badge>
          </div>
        </div>
      </div>

      <CardContent className="p-0">
        <ScrollArea className="h-[calc(100vh-266px)]">
          <div className="p-4 space-y-3">
            {/* Description */}
            <div className="py-1.5">
              <p className="text-sm text-muted-foreground">
                {classDetails.description}
              </p>
            </div>

            {/* Lead Teacher */}
            <div className="flex items-center gap-3 py-1.5">
              <User className="w-4 h-4 text-primary/80" />
              <span className="text-sm text-muted-foreground">
                Lead Teacher:
              </span>
              <Button
                variant="ghost"
                size="sm"
                className="ml-auto h-7 px-2.5 text-sm gap-1"
                asChild
              >
                {classDetails.teacher}
              </Button>
            </div>

            {/* Created/Updated Info */}
            <div className="text-xs text-muted-foreground pt-3 border-t border-border/50 mt-4">
              <div className="flex justify-between">
                <span>Created:</span>
                <span>{formatDate(classDetails.createdAt)}</span>
              </div>
              <div className="flex justify-between mt-1">
                <span>Updated:</span>
                <span>{formatDate(classDetails.updatedAt)}</span>
              </div>
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
