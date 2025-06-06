"use client";

import React from "react";
import { useParams } from "next/navigation";
import { format } from "date-fns";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
import { MessageSquare, Award, CalendarIcon } from "lucide-react";

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
    <Card className="w-full h-full border-none shadow-md overflow-hidden bg-background dark:bg-background/20">
      <Tabs defaultValue="badges" className="w-full h-full">
        <CardHeader className="p-0 bg-muted/30 border-b">
          <TabsList className="w-full rounded-none bg-transparent px-4 h-12">
            <TabsTrigger
              value="badges"
              className="text-sm data-[state=active]:bg-background"
            >
              <Award className="w-4 h-4 mr-1.5" />
              Badges
            </TabsTrigger>
            <TabsTrigger
              value="feedbacks"
              className="text-sm data-[state=active]:bg-background"
            >
              <MessageSquare className="w-4 h-4 mr-1.5" />
              Feedbacks
            </TabsTrigger>
          </TabsList>
        </CardHeader>
        <CardContent className="p-0 h-[calc(100vh-266px)]">
          <ScrollArea className="h-full">
            <TabsContent value="badges" className="px-4 pt-4 pb-16 m-0">
              <div>
                <div className="w-full mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-semibold flex items-center">
                      <Award className="h-4 w-4 text-primary mr-1.5" />
                      Badges ({badges?.badges?.length || 0})
                    </h3>
                  </div>
                  <AssignBadge childId={id} />
                </div>

                {badgesLoading ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[1, 2, 3, 4].map((i) => (
                      <Skeleton key={i} className="h-20 w-full" />
                    ))}
                  </div>
                ) : badges && badges?.badges?.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {badges?.badges.map((badge) => (
                      <div
                        key={badge.id}
                        className="bg-background rounded border border-border/50 overflow-hidden hover:shadow-sm transition-shadow flex h-20"
                      >
                        <div className="bg-primary/10 px-3 flex items-center justify-center">
                          <Avatar className="h-12 w-12">
                            <AvatarImage
                              src={badge.imageUrl!}
                              alt={badge.name}
                            />
                            <AvatarFallback className="bg-primary text-primary-foreground text-base">
                              {getInitials(badge.name)}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                        <div className="p-3 flex-1 overflow-hidden">
                          <div className="flex justify-between items-start">
                            <h4 className="font-medium text-sm truncate">
                              {badge.name}
                            </h4>
                            {/* <Badge variant="outline" className="bg-primary/5 text-xs h-5 px-1.5">
                              {format(new Date(badge.updatedAt), "MMM d")}
                            </Badge> */}
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                            {badge.description || "No description available"}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 bg-muted/10 rounded border border-dashed border-border">
                    <Award className="w-10 h-10 text-muted-foreground/40 mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground">
                      No badges earned yet.
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
            <TabsContent value="feedbacks" className="px-4 pt-4 pb-4 m-0">
              <div>
                <div className="w-full mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-semibold flex items-center">
                      <MessageSquare className="h-4 w-4 text-primary mr-1.5" />
                      Feedbacks ({feedbacks?.feedbacks?.length || 0})
                    </h3>
                  </div>
                  <AddNewFeedback childId={id} />
                </div>

                {feedbacksLoading ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[1, 2, 3, 4].map((i) => (
                      <Skeleton key={i} className="h-24 w-full" />
                    ))}
                  </div>
                ) : feedbacks?.feedbacks && feedbacks?.feedbacks?.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {feedbacks.feedbacks?.map((feedback) => (
                      <div
                        key={feedback.id}
                        className="bg-yellow-50 rounded border border-border/50 p-3 hover:shadow-sm transition-shadow"
                      >
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium text-sm line-clamp-1">
                            {feedback.content.substring(0, 30) + "..." ||
                              "Feedback"}
                          </h4>
                          <div className="text-xs text-muted-foreground flex items-center">
                            <CalendarIcon className="w-3 h-3 mr-1" />
                            {format(new Date(feedback.createdAt), "MMM d")}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 bg-muted/10 rounded border border-dashed border-border">
                    <MessageSquare className="w-10 h-10 text-muted-foreground/40 mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground">
                      No feedback records found.
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
          </ScrollArea>
        </CardContent>
      </Tabs>
    </Card>
  );
}
