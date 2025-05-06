"use client";

import React from "react";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import {
  BuildingIcon,
  PhoneIcon,
  AtSignIcon,
  CalendarIcon,
  PaletteIcon
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useGetNurseryDetails } from "../../api/use-get-nursery-details";

type Props = {
  organizationId: string;
};

export function NurseryDetails({ organizationId }: Props) {
  const { data, error, isPending } = useGetNurseryDetails({
    nurseryId: organizationId
  });

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "MMMM d, yyyy");
    } catch (error) {
      console.log(error);
      return "Invalid date";
    }
  };

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Nursery Details</CardTitle>
      </CardHeader>

      <CardContent>
        <ScrollArea className="h-[calc(100vh-250px)]">
          {isPending ? (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-48" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <Skeleton className="h-5 w-5" />
                  <div className="space-y-1 flex-1">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Skeleton className="h-5 w-5" />
                  <div className="space-y-1">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-36" />
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Skeleton className="h-5 w-5" />
                  <div className="space-y-1">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-40" />
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Skeleton className="h-5 w-5" />
                  <div className="space-y-1">
                    <Skeleton className="h-4 w-20" />
                    <div className="flex gap-2">
                      <Skeleton className="h-6 w-16" />
                      <Skeleton className="h-6 w-16" />
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Skeleton className="h-4 w-32" />
                <div className="flex gap-2">
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
                <p className="text-muted-foreground text-center max-w-md">
                  {error.message}
                </p>
              </div>
            </div>
          ) : (
            data && (
              <div className="space-y-6 pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10">
                      <BuildingIcon className="size-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">Nursery</h2>
                      <p className="text-sm text-muted-foreground">
                        ID: {data.id}
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <BuildingIcon className="size-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">
                        Address
                      </h3>
                      <p className="text-base">
                        {data.address || "No address provided"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <PhoneIcon className="size-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">
                        Phone Number
                      </h3>
                      <p className="text-base">
                        {data.phoneNumber || "No phone number provided"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <AtSignIcon className="size-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">
                        Email Address
                      </h3>
                      <p className="text-base">
                        {data.email || "No email address provided"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <PaletteIcon className="size-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">
                        Theme Colors
                      </h3>
                      <div className="flex gap-4 mt-1">
                        <div className="flex items-center gap-2">
                          <div
                            className="h-6 w-6 rounded border"
                            style={{
                              backgroundColor:
                                data.themePrimaryColor || "transparent"
                            }}
                          />
                          <span className="text-sm">
                            {data.themePrimaryColor || "Not set"}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <div
                            className="h-6 w-6 rounded border"
                            style={{
                              backgroundColor:
                                data.themeSecondaryColor || "transparent"
                            }}
                          />
                          <span className="text-sm">
                            {data.themeSecondaryColor || "Not set"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

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
            )
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
