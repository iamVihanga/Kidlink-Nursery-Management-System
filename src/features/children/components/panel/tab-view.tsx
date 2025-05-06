"use client";

import React from "react";
import { useParams } from "next/navigation";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export function TabView() {
  const { id } = useParams<{ id: string }>();

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
                <h3 className="text-lg font-semibold mb-4">Badges Earned</h3>
                <p className="text-muted-foreground">Child ID: {id}</p>
                {/* Add your badges content here */}
              </div>
            </TabsContent>
            <TabsContent value="feedbacks" className="px-6 pt-4 pb-3">
              <div>
                <h3 className="text-lg font-semibold mb-4">Feedback History</h3>
                <p className="text-muted-foreground">
                  No feedback records found.
                </p>
                {/* Add your feedback content here */}
              </div>
            </TabsContent>
          </ScrollArea>
        </CardContent>
      </Tabs>
    </Card>
  );
}
