"use client";

import React from "react";
import { useParams } from "next/navigation";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { AssignBadge } from "../assign-badge";
import { useGetChildBadges } from "../../api/use-get-child-badges";
import { useGetChildFeedbacks } from "../../api/use-get-child-feedbacks";
import { AddNewFeedback } from "@/features/feedbacks/components/new-feedback-modal";

export function TabView() {
  const { id } = useParams<{ id: string }>();

  const { data: badges, isPending: badgesLoading } = useGetChildBadges({
    childId: id
  });

  const { data: feedbacks, isPending: feedbacksLoading } = useGetChildFeedbacks(
    {
      childId: id
    }
  );

  // Function to get initials from badge name
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  return (
    <Card className="w-full py-0 h-full bg-background/10 dark:bg-background/20">
      <Tabs defaultValue="badges" className="w-full">
        <CardHeader className="p-0">
          <TabsList className="w-full rounded-none border-b bg-transparent px-3">
            <TabsTrigger value="badges">Badges</TabsTrigger>
            <TabsTrigger value="feedbacks">Feedbacks</TabsTrigger>
          </TabsList>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-fit">
            <TabsContent value="badges" className="px-6 pt-4 pb-3">
              <div>
                <div className="w-full mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Badges Earned</h3>
                  <AssignBadge childId={id} />
                </div>

                {badgesLoading ? (
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="bg-white p-4 rounded shadow">
                        <div className="flex items-center gap-3">
                          <Skeleton className="h-12 w-12 rounded-full" />
                          <div className="space-y-2">
                            <Skeleton className="h-4 w-[100px]" />
                            <Skeleton className="h-3 w-[150px]" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : badges && badges?.badges?.length > 0 ? (
                  <div className="grid grid-cols-2 gap-4">
                    {badges?.badges.map((badge) => (
                      <div
                        key={badge.id}
                        className="bg-white p-4 rounded-md shadow-lg border flex items-start gap-3"
                      >
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={badge.imageUrl!} alt={badge.name} />
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {getInitials(badge.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="text-md font-semibold">
                            {badge.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {badge.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">No badges earned yet.</p>
                )}
              </div>
            </TabsContent>
            <TabsContent value="feedbacks" className="px-6 pt-4 pb-3">
              <div>
                <div className="w-full mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Feedbacks</h3>
                  <AddNewFeedback childId={id} />
                </div>

                {feedbacksLoading ? (
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="bg-white p-4 rounded shadow">
                        <div className="flex items-center gap-3">
                          <Skeleton className="h-12 w-12 rounded-full" />
                          <div className="space-y-2">
                            <Skeleton className="h-4 w-[100px]" />
                            <Skeleton className="h-3 w-[150px]" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : feedbacks?.feedbacks && feedbacks?.feedbacks?.length > 0 ? (
                  <div className="grid grid-cols-2 gap-4">
                    {feedbacks.feedbacks?.map((feedback) => (
                      <div
                        key={feedback.id}
                        className="bg-white p-4 rounded-md shadow-lg border flex items-start gap-3"
                      >
                        <div>
                          <h4 className="font-semibold">{feedback.content}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">
                    No feedback records found.
                  </p>
                )}
              </div>
            </TabsContent>
          </ScrollArea>
        </CardContent>
      </Tabs>
    </Card>
  );
}
