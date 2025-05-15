"use client";

import React, { useState } from "react";

import { cn } from "@/lib/utils";
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
import { useGetChildren } from "../api/use-get-children";
import { ChevronsUpDown, Check } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function ChildrenDropdown({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const { data, isPending } = useGetChildren({
    page: 1,
    limit: 20,
    search
  });

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? data?.children.find((child) => child.id === value)?.firstName
            : "Select Children..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput
            placeholder="Search children..."
            value={search}
            onValueChange={(e) => setSearch(e)}
          />
          <CommandList>
            {!isPending && <CommandEmpty>No children found.</CommandEmpty>}

            {isPending && <CommandEmpty>Loading...</CommandEmpty>}

            <CommandGroup>
              {data?.children.map((child) => (
                <CommandItem
                  key={child.id}
                  value={child.id}
                  onSelect={(currentValue) => {
                    onChange(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === child.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {child.firstName} {child.lastName}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
