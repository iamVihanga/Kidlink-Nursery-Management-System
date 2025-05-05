"use effect";

import React, { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

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
import { Skeleton } from "@/components/ui/skeleton";

import { useGetParents } from "../api/use-get-parents";

type Props = {
  value: string | null;
  onChange: (value: string) => void;
};

export function ParentsDropdown({ value, onChange }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const { data: parents, isPending } = useGetParents({
    limit: 10,
    page: 1,
    search: search
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
            ? parents?.parents?.find((parent) => parent.userId === value)?.email
            : "Select parent..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput
            placeholder="Search parent..."
            className="h-9"
            value={search}
            onValueChange={(e) => setSearch(e)}
          />
          <CommandList>
            {(!isPending || !parents) && (
              <CommandEmpty>No parent found.</CommandEmpty>
            )}

            <CommandGroup>
              {isPending && (
                <div className="flex flex-col items-center gap-1 p-2">
                  {Array(5)
                    .fill("_")
                    .map((_, index) => (
                      <Skeleton className="h-4 w-full" key={index} />
                    ))}
                </div>
              )}

              {parents?.parents.map((parent) => (
                <CommandItem
                  key={parent.id}
                  value={parent.userId}
                  onSelect={(currentValue) => {
                    onChange(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {parent.email}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === parent.email ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
