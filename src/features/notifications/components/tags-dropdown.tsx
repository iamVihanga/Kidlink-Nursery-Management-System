"use client";

import React, { useState, useCallback } from "react";
import { Check, ChevronsUpDown, PlusCircle, X } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

// import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetNotificationTags } from "../api/use-get-notification-tags";
import { client } from "@/lib/rpc";
import { CreateNotificationTag } from "../schemas/create-tag";

interface TagsDropdownProps {
  value: string[];
  onChange: (value: string[]) => void;
}

export function TagsDropdown({ value, onChange }: TagsDropdownProps) {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const queryClient = useQueryClient();

  // Get existing tags
  const { data: tags, isLoading } = useGetNotificationTags();

  // Create new tag mutation
  const createTagMutation = useMutation({
    mutationFn: async (newTagName: string) => {
      const response = await client.api.notifications.tag.$post({
        json: { name: newTagName } as CreateNotificationTag
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to create tag");
      }

      return response.json();
    },
    onSuccess: (data) => {
      // Add the new tag to selected tags
      onChange([...value, data.id]);

      // Reset input value
      setInputValue("");

      // Invalidate tags query to refresh the list
      queryClient.invalidateQueries({ queryKey: ["notification-tags"] });

      toast.success("Tag created successfully");
    },
    onError: (error) => {
      toast.error(
        error instanceof Error ? error.message : "Failed to create tag"
      );
    }
  });

  const handleSelect = useCallback(
    (tagId: string) => {
      onChange(
        value.includes(tagId)
          ? value.filter((id) => id !== tagId)
          : [...value, tagId]
      );
    },
    [value, onChange]
  );

  const createNewTag = useCallback(() => {
    if (inputValue.trim()) {
      createTagMutation.mutate(inputValue.trim());
    }
  }, [inputValue, createTagMutation]);

  const removeTag = useCallback(
    (tagId: string, e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      onChange(value.filter((id) => id !== tagId));
    },
    [value, onChange]
  );

  // Find selected tags data for displaying badges
  const selectedTags = tags?.filter((tag) => value.includes(tag.id)) || [];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value.length > 0 ? (
            <div className="flex flex-wrap gap-1 mr-2">
              {value.length <= 5 ? (
                selectedTags.map((tag) => (
                  <Badge key={tag.id} variant="secondary" className="mr-1">
                    {tag.name}
                    <X
                      className="ml-1 h-3 w-3 cursor-pointer"
                      onClick={(e) => removeTag(tag.id, e)}
                    />
                  </Badge>
                ))
              ) : (
                <span>{`${value.length} tags selected`}</span>
              )}
            </div>
          ) : (
            "Select or create tags"
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput
            placeholder="Search or create tag..."
            value={inputValue}
            onValueChange={setInputValue}
          />
          <CommandList>
            {isLoading ? (
              <div className="p-2">
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-8 w-full mt-2" />
              </div>
            ) : (
              <>
                <CommandEmpty>
                  No tags found.
                  <Button
                    variant="outline"
                    size="sm"
                    className="ml-2"
                    onClick={createNewTag}
                    disabled={!inputValue.trim() || createTagMutation.isPending}
                  >
                    <PlusCircle className="mr-2 h-4 w-4" />
                    {`Create "${inputValue}"`}
                  </Button>
                </CommandEmpty>
                <CommandGroup>
                  {tags?.map((tag) => (
                    <CommandItem
                      key={tag.id}
                      value={tag.name}
                      onSelect={() => handleSelect(tag.id)}
                      className="flex justify-between"
                    >
                      <span>{tag.name}</span>
                      {value.includes(tag.id) && (
                        <Check className="h-4 w-4 text-primary" />
                      )}
                    </CommandItem>
                  ))}
                </CommandGroup>

                {inputValue &&
                  !tags?.some(
                    (tag) => tag.name.toLowerCase() === inputValue.toLowerCase()
                  ) && (
                    <>
                      <CommandSeparator />
                      <CommandGroup>
                        <CommandItem
                          onSelect={createNewTag}
                          className="cursor-pointer"
                          disabled={createTagMutation.isPending}
                        >
                          <PlusCircle className="mr-2 h-4 w-4" />
                          {`Create "${inputValue}"`}
                        </CommandItem>
                      </CommandGroup>
                    </>
                  )}
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
