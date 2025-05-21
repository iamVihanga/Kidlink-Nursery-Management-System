"use client";

import { useState } from "react";
import { Tag, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
// import { useToast } from "@/components/ui/use-toast";

// Sample notification tags
const NOTIFICATION_TAGS = [
  { id: "tag1", name: "Reminder" },
  { id: "tag2", name: "Event" },
  { id: "tag3", name: "Information" },
  { id: "tag4", name: "Alert" }
];

// Sample users (potential recipients)
const USERS = [
  { id: "user1", name: "Admin", email: "admin@example.com" },
  { id: "user2", name: "Safety Officer", email: "safety@example.com" },
  { id: "user3", name: "Curriculum Coordinator", email: "curriculum@example.com" },
  { id: "user4", name: "Teacher Smith", email: "smith@example.com" },
  { id: "user5", name: "Teacher Jones", email: "jones@example.com" }
];

// Form schema
const formSchema = z.object({
  content: z.string().min(1, "Notification content is required"),
  tagIds: z.array(z.string()).min(1, "Select at least one tag"),
  recipientIds: z.array(z.string()).min(1, "Select at least one recipient")
});

export interface AddNotificationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddNotificationModal({ open, onOpenChange }: AddNotificationModalProps) {
  // const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
      tagIds: [],
      recipientIds: []
    }
  });

  // Form submission handler
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Here you would normally call your API
      console.log("Submitting notification:", data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success message
      // toast({
      //   title: "Notification sent",
      //   description: "Your notification has been sent successfully.",
      // });
      
      // Reset form and close modal
      form.reset();
      onOpenChange(false);
    } catch (error) {
      // toast({
      //   title: "Error",
      //   description: "Failed to send notification. Please try again.",
      //   variant: "destructive",
      // });
      console.error("Error sending notification:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create New Notification</DialogTitle>
          <DialogDescription>
            Create a notification to send to users in your organization.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Enter notification content"
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="tagIds"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Tag className="h-4 w-4" /> Tags
                  </FormLabel>
                  <Select
                    onValueChange={(value) => field.onChange([value])}
                    defaultValue={field.value?.[0]}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a tag" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {NOTIFICATION_TAGS.map((tag) => (
                        <SelectItem key={tag.id} value={tag.id}>
                          {tag.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="recipientIds"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Users className="h-4 w-4" /> Recipients
                  </FormLabel>
                  <Select
                    onValueChange={(value) => field.onChange([...field.value, value])}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select recipients" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {USERS.map((user) => (
                        <SelectItem key={user.id} value={user.id}>
                          {user.name} ({user.email})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {field.value.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {field.value.map((userId) => {
                        const user = USERS.find((u) => u.id === userId);
                        return user ? (
                          <div 
                            key={user.id} 
                            className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm flex items-center gap-1"
                          >
                            {user.name}
                            <button
                              type="button"
                              className="text-secondary-foreground/70 hover:text-secondary-foreground"
                              onClick={() => {
                                field.onChange(field.value.filter((id) => id !== userId));
                              }}
                            >
                              ×
                            </button>
                          </div>
                        ) : null;
                      })}
                    </div>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
          
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Notification"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}