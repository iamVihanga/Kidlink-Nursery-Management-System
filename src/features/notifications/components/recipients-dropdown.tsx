"use client";

import React, { useState, useCallback } from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

// import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { Skeleton } from "@/components/ui/skeleton";
import { authClient } from "@/lib/auth-client";

interface RecipientsDropdownProps {
  value: string[];
  onChange: (value: string[]) => void;
}

export function RecipientsDropdown({
  value,
  onChange
}: RecipientsDropdownProps) {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const { data: users, isLoading } = useQuery({
    queryKey: ["users", searchTerm],
    queryFn: async () => {
      // Use the admin.listUsers endpoint to fetch users
      const { data, error } = await authClient.admin.listUsers({
        query: searchTerm
          ? {
              searchField: "name",
              searchOperator: "contains",
              searchValue: searchTerm
            }
          : {}
      });

      if (error) throw new Error(error.message);
      return data.users;
    },
    enabled: open // Only fetch when dropdown is open
  });

  const handleSelect = useCallback(
    (userId: string) => {
      onChange(
        value.includes(userId)
          ? value.filter((id) => id !== userId)
          : [...value, userId]
      );
    },
    [value, onChange]
  );

  const removeUser = useCallback(
    (userId: string, e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      onChange(value.filter((id) => id !== userId));
    },
    [value, onChange]
  );

  // Find selected users' data for displaying badges
  const selectedUsers = users?.filter((user) => value.includes(user.id)) || [];

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
              {value.length <= 3 ? (
                selectedUsers.map((user) => (
                  <Badge key={user.id} variant="secondary" className="mr-1">
                    {user.name || user.email}
                    <X
                      className="ml-1 h-3 w-3 cursor-pointer"
                      onClick={(e) => removeUser(user.id, e)}
                    />
                  </Badge>
                ))
              ) : (
                <span>{`${value.length} recipients selected`}</span>
              )}
            </div>
          ) : (
            "Select recipients"
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput
            placeholder="Search users..."
            value={searchTerm}
            onValueChange={setSearchTerm}
          />
          {isLoading ? (
            <div className="p-2">
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-full mt-2" />
              <Skeleton className="h-8 w-full mt-2" />
            </div>
          ) : (
            <CommandList>
              <CommandEmpty>No users found.</CommandEmpty>
              <CommandGroup>
                {users?.map((user) => (
                  <CommandItem
                    key={user.id}
                    value={user.id}
                    onSelect={() => handleSelect(user.id)}
                    className="flex justify-between"
                  >
                    <div className="flex flex-col">
                      <span>{user.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {user.email}
                      </span>
                    </div>
                    {value.includes(user.id) && (
                      <Check className="h-4 w-4 text-primary" />
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          )}
        </Command>
      </PopoverContent>
    </Popover>
  );
}
