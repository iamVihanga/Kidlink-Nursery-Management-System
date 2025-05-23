"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusIcon, Bell, Tag, Users, Loader } from "lucide-react";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

import {
  sendNotificationSchema,
  type SendNotification
} from "../schemas/send-notification";
import { useSendNotification } from "../api/use-send-notification";
import { useGetNotificationTags } from "../api/use-get-notification-tags";

// Mock recipients data (replace with actual API integration)
const RECIPIENTS = [
  { id: "user1", name: "Admin", email: "admin@example.com" },
  { id: "user2", name: "Safety Officer", email: "safety@example.com" },
  { id: "user3", name: "Curriculum Coordinator", email: "curriculum@example.com" },
  { id: "user4", name: "Teacher Smith", email: "smith@example.com" },
  { id: "user5", name: "Teacher Jones", email: "jones@example.com" }
];

export function AddNotificationModal() {
  const { data: session, isPending: sessionPending } = authClient.useSession();
  const { isPending, mutate } = useSendNotification();
  const { data: tags, isLoading: isTagsLoading } = useGetNotificationTags();

  const [open, setOpen] = useState<boolean>(false);
  const [selectedRecipients, setSelectedRecipients] = useState<string[]>([]);

  const form = useForm<SendNotification>({
    resolver: zodResolver(sendNotificationSchema),
    defaultValues: {
      content: "",
      tags: [],
      recipients: []
    }
  });

  const handleRecipientChange = (recipientId: string) => {
    if (selectedRecipients.includes(recipientId)) {
      const updated = selectedRecipients.filter(id => id !== recipientId);
      setSelectedRecipients(updated);
      form.setValue("recipients", updated);
    } else {
      const updated = [...selectedRecipients, recipientId];
      setSelectedRecipients(updated);
      form.setValue("recipients", updated);
    }
  };

  const onSubmit = (values: SendNotification) => {
    // Ensure recipients are set
    const dataToSubmit = {
      ...values,
      recipients: selectedRecipients
    };
    
    mutate(
      dataToSubmit,
      {
        onSuccess() {
          form.reset();
          setSelectedRecipients([]);
          setOpen(false);
        }
      }
    );
  };

  if (sessionPending) {
    return <Skeleton className="h-8 w-40" />;
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon className="size-3 mr-1" />
          New Notification
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[525px]"
        onInteractOutside={(e) => {
          if (isPending) {
            e.preventDefault();
          }
        }}
      >
        <DialogHeader>
          <DialogTitle>Create New Notification</DialogTitle>
          <DialogDescription>
            Send a notification to selected recipients.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-y-5 mt-2">
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Bell className="h-4 w-4" /> Message
                    </FormLabel>
                    <FormControl>
                      <Textarea 
                        {...field} 
                        placeholder="Enter notification message"
                        className="min-h-[100px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Tag className="h-4 w-4" /> Category
                    </FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange([value])}
                      disabled={isTagsLoading}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={isTagsLoading ? "Loading..." : "Select a category"} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {tags?.map((tag) => (
                          <SelectItem key={tag.id} value={tag.id}>
                            {tag.name}
                          </SelectItem>
                        )) || []}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="recipients"
                render={() => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Users className="h-4 w-4" /> Recipients
                    </FormLabel>
                    <FormControl>
                      <div className="space-y-3">
                        <Select
                          onValueChange={handleRecipientChange}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select recipients" />
                          </SelectTrigger>
                          <SelectContent>
                            {RECIPIENTS.map((recipient) => (
                              <SelectItem
                                key={recipient.id}
                                value={recipient.id}
                                disabled={selectedRecipients.includes(recipient.id)}
                              >
                                {recipient.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        
                        {selectedRecipients.length > 0 && (
                          <ScrollArea className="h-20 rounded-md border p-2">
                            <div className="flex flex-wrap gap-2">
                              {selectedRecipients.map((id) => {
                                const recipient = RECIPIENTS.find(r => r.id === id);
                                return recipient ? (
                                  <Badge
                                    key={id}
                                    variant="secondary"
                                    className="gap-1 px-2 py-1"
                                  >
                                    {recipient.name}
                                    <button
                                      type="button"
                                      className="ml-1 rounded-full hover:bg-muted-foreground/20"
                                      onClick={() => handleRecipientChange(id)}
                                    >
                                      ×
                                    </button>
                                  </Badge>
                                ) : null;
                              })}
                            </div>
                          </ScrollArea>
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Separator className="my-4" />

            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="secondary" disabled={isPending}>
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" disabled={isPending}>
                {isPending ? (
                  <>
                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Notification"
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}