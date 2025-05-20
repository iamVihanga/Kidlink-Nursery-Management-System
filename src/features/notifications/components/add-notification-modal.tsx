"use client";

import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Loader, Tag, Users } from "lucide-react";

import { client } from "@/lib/rpc";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

interface AddNotificationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  organizationId?: string;
}

export function AddNotificationModal({ open, onOpenChange, organizationId }: AddNotificationModalProps) {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    title: "",
    message: "",
    selectedTags: [] as string[],
    selectedRecipients: [] as string[]
  });

  // Fetch notification tags
  const {
    data: tagsResponse = [],
    isPending: tagsLoading
  } = useQuery({
    queryKey: ["notification-tags"],
    queryFn: async () => {
      try {
        const response = await client.api.notifications.tag.$get();
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching notification tags:", error);
        return [];
      }
    },
    enabled: open && !!organizationId
  });

  // Ensure tags is always an array
  const tags = Array.isArray(tagsResponse) ? tagsResponse : [];

  // Fetch all users (for selecting recipients)
  const {
    data: users = [],
    isPending: usersLoading
  } = useQuery({
    queryKey: ["users", organizationId],
    queryFn: async () => {
      if (!organizationId) return [];
      
      try {
        const response = await client.api.users.$get({
          query: { organizationId }
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching users:", error);
        return [];
      }
    },
    enabled: open && !!organizationId
  });
  
  // Send notification mutation
  const sendNotificationMutation = useMutation({
    mutationFn: async (data: {
      title: string;
      message: string;
      recipients: string[];
      tags: string[];
    }) => {
      return client.api.notifications.$post({
        json: {
          title: data.title,
          message: data.message,
          recipients: data.recipients,
          tags: data.tags
        }
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
      toast.success("Notification sent successfully");
      resetForm();
      onOpenChange(false);
    },
    onError: () => {
      toast.error("Failed to send notification");
    }
  });

  // Function to handle sending a notification
  const handleSendNotification = () => {
    if (!formData.title.trim()) {
      toast.error("Title is required");
      return;
    }
    
    if (!formData.message.trim()) {
      toast.error("Message is required");
      return;
    }
    
    if (formData.selectedTags.length === 0) {
      toast.error("At least one tag is required");
      return;
    }
    
    if (formData.selectedRecipients.length === 0) {
      toast.error("At least one recipient is required");
      return;
    }
    
    sendNotificationMutation.mutate({
      title: formData.title,
      message: formData.message,
      recipients: formData.selectedRecipients,
      tags: formData.selectedTags
    });
  };

  // Reset form after submission
  const resetForm = () => {
    setFormData({
      title: "",
      message: "",
      selectedTags: [],
      selectedRecipients: []
    });
  };

  // Clean up when closing
  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      resetForm();
    }
    onOpenChange(newOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create New Notification</DialogTitle>
          <DialogDescription>
            Create a notification to send to users in your organization.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="title" className="text-sm font-medium">Title</label>
            <Input 
              id="title" 
              value={formData.title}
              onChange={(e) => setFormData({
                ...formData,
                title: e.target.value
              })}
              placeholder="Notification title"
            />
          </div>
          
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <Textarea 
              id="message" 
              value={formData.message}
              onChange={(e) => setFormData({
                ...formData,
                message: e.target.value
              })}
              placeholder="Enter notification message"
              rows={3}
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Tag className="h-4 w-4" /> Tags
            </label>
            <Select 
              value={formData.selectedTags.join(',')}
              onValueChange={(value) => {
                setFormData({
                  ...formData,
                  selectedTags: value ? value.split(',') : []
                });
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select tags" />
              </SelectTrigger>
              <SelectContent>
                {tagsLoading ? (
                  <div className="flex items-center justify-center p-2">
                    <Loader className="h-4 w-4 mr-2 animate-spin" />
                    Loading tags...
                  </div>
                ) : (
                  Array.isArray(tags) ? 
                    tags.map(tag => (
                      <SelectItem key={tag.id} value={tag.id}>
                        {tag.name}
                      </SelectItem>
                    ))
                  : (
                    <SelectItem disabled value="">
                      No tags available
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid gap-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Users className="h-4 w-4" /> Recipients
            </label>
            <Select 
              value={formData.selectedRecipients.join(',')}
              onValueChange={(value) => {
                setFormData({
                  ...formData,
                  selectedRecipients: value ? value.split(',') : []
                });
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select recipients" />
              </SelectTrigger>
              <SelectContent>
                {usersLoading ? (
                  <div className="flex items-center justify-center p-2">
                    <Loader className="h-4 w-4 mr-2 animate-spin" />
                    Loading users...
                  </div>
                ) : (
                  users.map(user => (
                    <SelectItem key={user.id} value={user.id}>
                      {user.name || user.email}
                    </SelectItem>
                  ))
                )}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <DialogFooter>
          <Button 
            variant="outline" 
            onClick={() => handleOpenChange(false)}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleSendNotification}
            disabled={sendNotificationMutation.isPending}
          >
            {sendNotificationMutation.isPending ? (
              <>
                <Loader className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>Send Notification</>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}