"use client";

import { formatDistanceToNow } from "date-fns";
import { Check } from "lucide-react";
import { useCallback } from "react";
import { cn } from "@/lib/utils";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { type Notification } from "../api/use-get-notifications";
import { useMarkNotificationRead } from "../api/use-mark-notification-read";

interface NotificationCardProps {
  notification: Notification & {
    sender: {
      id: string;
      name: string;
      image?: string;
      email: string;
    };
    recipients: {
      id: string;
      notificationId: string;
      recipientId: string;
      readAt: string | null;
    }[];
    tags: {
      id: string;
      notificationId: string;
      notificationTagId: string;
      notificationTag: {
        id: string;
        name: string;
      };
    }[];
  };
}

export function NotificationCard({ notification }: NotificationCardProps) {
  const { mutate: markAsRead, isPending } = useMarkNotificationRead();
  const isRead = notification.recipients[0]?.readAt !== null;

  const handleMarkAsRead = useCallback(() => {
    if (!isRead) {
      markAsRead(notification.id);
    }
  }, [notification.id, isRead, markAsRead]);

  const createdAt = new Date(notification.createdAt);
  const timeAgo = formatDistanceToNow(createdAt, { addSuffix: true });
  const senderInitials =
    notification.sender?.name
      ?.split(" ")
      .map((name) => name[0])
      .join("")
      .toUpperCase() || "UN";

  return (
    <Card
      className={cn(
        "p-4 cursor-pointer transition-all hover:shadow-md",
        !isRead && "bg-primary/5 border-l-4 border-l-primary"
      )}
      onClick={handleMarkAsRead}
    >
      <div className="flex gap-4">
        <Avatar className="h-10 w-10">
          <AvatarImage
            src={notification.sender?.image || ""}
            alt={notification.sender?.name || "Unknown"}
          />
          <AvatarFallback>{senderInitials}</AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h4 className="font-medium">
              {notification.sender?.name || "Unknown"}
              <span className="text-xs text-muted-foreground ml-2">
                {timeAgo}
              </span>
            </h4>
            {!isRead && (
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-2 text-primary hover:text-primary/80"
                onClick={(e) => {
                  e.stopPropagation();
                  markAsRead(notification.id);
                }}
                disabled={isPending}
              >
                <Check className="h-4 w-4 mr-1" />
                Mark as read
              </Button>
            )}
          </div>

          <div className="mt-1 text-sm text-foreground">
            {notification.content}
          </div>

          {/* {notification.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1">
              {notification.tags.map((tag) => (
                <Badge key={tag.id} variant="outline" className="text-xs">
                  {tag.notificationTag.name}
                </Badge>
              ))}
            </div>
          )} */}
        </div>
      </div>
    </Card>
  );
}
