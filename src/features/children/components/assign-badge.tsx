"use client";

import React from "react";
import { Check, ChevronsUpDown, PlusCircleIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
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
import { useGetBadges } from "@/features/badges/api/use-get-badges";
import { useAssignBadge } from "@/features/badges/api/use-assign-badge";

type Props = {
  childId: string;
};

export function AssignBadge({ childId }: Props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [search, setSearch] = React.useState("");

  const { data, isPending } = useGetBadges({ page: 1, limit: 10, search });
  const { mutate, isPending: isAssigning } = useAssignBadge();

  const handleAssign = async () => {
    if (!value) return;

    mutate(
      { badgeId: value, childId },
      {
        onSuccess: () => setOpen(false)
      }
    );
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size={"icon"}>
          <PlusCircleIcon className="size-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Assign new Badge to Child</AlertDialogTitle>
          <AlertDialogDescription>
            Select a badge to assign to the child. You can search for badges
          </AlertDialogDescription>
        </AlertDialogHeader>

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between"
            >
              {data?.badges
                ? data.badges.find((badge) => badge.id === value)?.name
                : "Select badge..."}
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command>
              <CommandInput
                placeholder="Search badge..."
                className="h-9"
                value={search}
                onValueChange={(e) => setSearch(e)}
              />
              <CommandList>
                {!isPending && !data && (
                  <CommandEmpty>No badge found.</CommandEmpty>
                )}
                {isPending && <CommandEmpty>Loading...</CommandEmpty>}
                <CommandGroup>
                  {data?.badges?.map((badge) => (
                    <CommandItem
                      key={badge.id}
                      value={badge.id}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      {badge.name}
                      <Check
                        className={cn(
                          "ml-auto",
                          value === badge.id ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              disabled={!value}
              onClick={handleAssign}
              loading={isAssigning}
            >
              Assign
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
