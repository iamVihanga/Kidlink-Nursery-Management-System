"use client";

import React from "react";
import { useParams } from "next/navigation";
import { format } from "date-fns";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import {
  BadgeCheckIcon,
  CalendarIcon,
  MailIcon,
  ShieldAlertIcon,
  ShieldCheckIcon
} from "lucide-react";

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetParent } from "@/features/parents/api/use-get-parent";

export function ParentOverview() {
  const { id } = useParams<{ id: string }>();
  const { data, error, isPending } = useGetParent({ parentId: id });

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "MMMM d, yyyy");
    } catch (error) {
      console.log(error);
      return "Invalid date";
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Parent Details</CardTitle>
      </CardHeader>

      <CardContent>
        <ScrollArea className="h-[calc(100vh-250px)]">
          {isPending ? (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Skeleton className="h-16 w-16 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-5 w-48" />
                  <Skeleton className="h-4 w-32" />
                </div>
                <Skeleton className="ml-auto h-6 w-16" />
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <Skeleton className="h-5 w-5" />
                  <div className="space-y-1">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-56" />
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Skeleton className="h-5 w-5" />
                  <div className="space-y-1">
                    <Skeleton className="h-4 w-20" />
                    <div className="flex gap-2 items-center">
                      <Skeleton className="h-4 w-36" />
                      <Skeleton className="h-6 w-16" />
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Skeleton className="h-5 w-5" />
                  <div className="space-y-1">
                    <Skeleton className="h-4 w-20" />
                    <div className="flex gap-2">
                      <Skeleton className="h-6 w-16" />
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Skeleton className="h-5 w-5" />
                  <div className="space-y-1">
                    <Skeleton className="h-4 w-20" />
                    <div className="flex gap-2">
                      <Skeleton className="h-6 w-24" />
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Skeleton className="h-4 w-32" />
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-48" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>
            </div>
          ) : error ? (
            <div className="w-full flex flex-col items-center justify-center py-12">
              <div className="p-3 rounded-full bg-destructive/10">
                <ExclamationTriangleIcon className="size-10 text-destructive" />
              </div>

              <div className="mt-4 space-y-1">
                <h1 className="text-xl font-semibold text-center">
                  Error Loading Parent Details
                </h1>
                <p className="text-muted-foreground text-center max-w-md">
                  {error.message}
                </p>
              </div>
            </div>
          ) : data ? (
            <div className="space-y-6 pb-4">
              {/* Header with avatar and basic info */}
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16 border">
                  <AvatarImage src={data.image || ""} alt={data.name} />
                  <AvatarFallback className="text-lg bg-primary/10 text-primary">
                    {getInitials(data.name)}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <h2 className="text-xl font-bold">{data.name}</h2>
                  <p className="text-sm text-muted-foreground">ID: {data.id}</p>
                </div>

                <Badge
                  variant={data.role === "admin" ? "default" : "outline"}
                  className="ml-auto"
                >
                  {data.role === "admin" ? "Admin" : "User"}
                </Badge>
              </div>

              <Separator />

              {/* Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <MailIcon className="size-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                      Email
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <p className="text-base">{data.email}</p>
                      {data.emailVerified ? (
                        <Badge className="text-xs">
                          <BadgeCheckIcon className="size-3 mr-1" />
                          Verified
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="text-xs">
                          Not Verified
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheckIcon className="size-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                      Security
                    </h3>
                    <div className="mt-0.5">
                      <Badge
                        variant={data.twoFactorEnabled ? "default" : "outline"}
                        className="text-xs"
                      >
                        {data.twoFactorEnabled ? "2FA Enabled" : "2FA Disabled"}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldAlertIcon className="size-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                      Account Status
                    </h3>
                    <div className="mt-0.5">
                      {data.banned ? (
                        <div className="space-y-1">
                          <Badge variant="destructive">Banned</Badge>
                          <p className="text-sm text-destructive">
                            Reason: {data.banReason || "No reason provided"}
                          </p>
                          {data.banExpires && (
                            <p className="text-sm text-muted-foreground">
                              Expires: {formatDate(data.banExpires)}
                            </p>
                          )}
                        </div>
                      ) : (
                        <Badge
                          variant="outline"
                          className="bg-green-50 text-green-700 dark:bg-green-950/40 dark:text-green-400 border-green-200 dark:border-green-800"
                        >
                          Active
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                {/* Add more details here if needed */}
              </div>

              <Separator />

              {/* Footer with dates */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <CalendarIcon className="size-4" />
                  <span>Created: {formatDate(data.createdAt)}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <CalendarIcon className="size-4" />
                  <span>Updated: {formatDate(data.updatedAt)}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-muted-foreground">No parent data available</p>
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
