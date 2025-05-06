"use client";

import React, { useState } from "react";
import { Loader, PlusIcon } from "lucide-react";
import { toast } from "sonner";

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
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

import { useGetClasses } from "@/features/classes/api/use-get-classes";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAssignClass } from "../api/use-assign-class";

interface AssignToClassProps {
  childId: string;
}

export function AssignToClass({ childId }: AssignToClassProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedClass, setSelectedClass] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const { data, isPending } = useGetClasses({
    page: 1,
    limit: 10,
    search: ""
  });
  const { mutate, isPending: assigning } = useAssignClass();

  const onSubmit = async () => {
    if (!selectedClass) {
      toast.error("Please select a class to assign the child to.");
      return;
    }

    mutate(
      { id: childId, values: { classId: selectedClass } },
      {
        onSuccess: () => setOpen(false)
      }
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button icon={<PlusIcon />}>Assign to Class</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Assign to Class</DialogTitle>
          <DialogDescription>
            {`Make changes on student profile here. Click save when you're done.`}
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-y-3 mt-2">
          <div className="space-y-2">
            <p className="text-sm font-medium">Search</p>
            <Input
              placeholder="Type class name here..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <ScrollArea className="h-[180px] w-full space-y-2 border rounded-md p-2 bg-sidebar">
            {isPending && (
              <div className="w-full flex items-center justify-center py-3">
                <Loader className="size-6 animate-spin" />
              </div>
            )}

            <RadioGroup
              defaultValue=""
              value={selectedClass}
              onValueChange={setSelectedClass}
            >
              {data?.classes?.map((item) => (
                <div className="flex items-center space-x-2" key={item.id}>
                  <Card
                    id={item.id}
                    className="px-2 py-3 cursor-pointer gap-x-2 rounded-md w-full flex flex-row items-center"
                    onClick={() => setSelectedClass(item.id)}
                  >
                    <RadioGroupItem value={item.id}></RadioGroupItem>
                    <Label htmlFor={item.id}>{item.name}</Label>
                  </Card>
                </div>
              ))}
            </RadioGroup>
          </ScrollArea>
        </div>

        <Separator className="my-2" />

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <Button
            type="submit"
            disabled={!selectedClass}
            onClick={onSubmit}
            loading={assigning}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
