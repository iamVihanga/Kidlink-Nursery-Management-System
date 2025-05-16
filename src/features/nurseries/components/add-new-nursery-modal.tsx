"use client";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { ImageIcon, Upload, PlusIcon, ChevronDown } from "lucide-react";
import { HexColorPicker } from "react-colorful";

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
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  createNurserySchema,
  type CreateNurserySchema
} from "../schemas/create-nursery";

import { useCreateNursery } from "../api/use-create-nursery";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";

// Compact color picker component
function CompactColorPicker({ value, onChange }: { value: string, onChange: (color: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const presetColors = [
    "#FF6B6B", "#FFC107", "#4CAF50", "#2196F3", "#9B59B6",
    "#E91E63", "#673AB7", "#3F51B5", "#00BCD4", "#8BC34A"
  ];

  return (
    <div className="space-y-2">
      {/* Color input and preview */}
      <div className="flex items-center gap-2">
        <div
          className="h-8 w-8 rounded-full border"
          style={{ backgroundColor: value }}
        />
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1"
          placeholder="#FFFFFF"
        />
      </div>

      {/* Collapsible color picker */}
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="border rounded-md"
      >
        <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 text-sm text-left">
          <span>Color Picker</span>
          <ChevronDown className="h-4 w-4" style={{ transform: isOpen ? 'rotate(180deg)' : '' }} />
        </CollapsibleTrigger>
        <CollapsibleContent className="px-3 pb-3">
          {/* Color wheel */}
          <div className="mb-2 mt-1">
            <HexColorPicker
              color={value}
              onChange={onChange}
              style={{ width: "100%", height: "120px" }}
            />
          </div>
          
          {/* Preset colors */}
          <div className="grid grid-cols-5 gap-2 mt-2">
            {presetColors.map((color) => (
              <button
                key={color}
                type="button"
                className="h-6 w-6 rounded-full border"
                style={{ backgroundColor: color }}
                onClick={() => onChange(color)}
              />
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}

export function AddNewNursery() {
  const { data: session, isPending: sessionPending } = authClient.useSession();
  const { isPending, mutate } = useCreateNursery();

  const [open, setOpen] = useState<boolean>(false);
  const [colorPreview, setColorPreview] = useState("#4CAF50"); // Default color
  const inputRef = useRef<HTMLInputElement>(null);

  const form = useForm<CreateNurserySchema>({
    resolver: zodResolver(createNurserySchema),
    defaultValues: {
      name: "",
      description: "",
      themeColor: "#4CAF50" // Default color
    }
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      form.setValue("image", file);
    }
  };

  const handleColorChange = (color: string) => {
    setColorPreview(color);
    form.setValue("themeColor", color);
  };

  const onSubmit = (values: CreateNurserySchema) => {
    mutate(values, {
      onSuccess() {
        form.reset();
        setOpen(false);
      }
    });
  };

  if (sessionPending) {
    return <Skeleton className="h-8 w-40" />;
  }

  if (session?.user.role !== "admin") {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon className="size-3 mr-1" />
          Add new Nursery
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[700px]" // Wider dialog for horizontal layout
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle>Create new Nursery</DialogTitle>
          <DialogDescription>
            Fill the following details to create new nursery.
          </DialogDescription>
        </DialogHeader>

        {/* Dialog Content */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {/* Two column layout */}
            <div className="grid grid-cols-2 gap-6 mt-2">
              {/* Left column - Basic info */}
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nursery name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter nursery name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Nursery description" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Nursery Logo */}
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nursery Logo</FormLabel>
                      <div className="flex items-center gap-x-4">
                        {field.value ? (
                          <div className="h-16 w-16 relative rounded-md overflow-hidden">
                            <Image
                              alt="logo"
                              fill
                              className="object-cover"
                              src={
                                field.value instanceof File
                                  ? URL.createObjectURL(field.value)
                                  : field.value
                              }
                            />
                          </div>
                        ) : (
                          <Avatar className="h-16 w-16">
                            <AvatarFallback>
                              <ImageIcon className="h-8 w-8 text-neutral-400" />
                            </AvatarFallback>
                          </Avatar>
                        )}
                        <div className="flex flex-col flex-1">
                          <p className="text-xs text-muted-foreground mb-2">
                            JPG, PNG, SVG or JPEG (max 1MB)
                          </p>
                          <input
                            className="hidden"
                            type="file"
                            accept=".jpg, .png, .jpeg, .svg"
                            ref={inputRef}
                            disabled={isPending}
                            onChange={handleImageChange}
                          />
                          <Button
                            type="button"
                            disabled={isPending}
                            variant={field.value ? "destructive" : "default"}
                            size="sm"
                            className="w-fit"
                            onClick={() => {
                              if (field.value) {
                                field.onChange(null);
                                if (inputRef.current) {
                                  inputRef.current.value = "";
                                }
                              } else {
                                inputRef.current?.click();
                              }
                            }}
                          >
                            <Upload className="size-3 mr-1" />
                            {field.value ? "Remove" : "Upload"}
                          </Button>
                        </div>
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              {/* Right column - Theme color */}
              <div>
                <FormField
                  control={form.control}
                  name="themeColor"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Theme Color</FormLabel>
                      <FormControl>
                        <CompactColorPicker 
                          value={field.value || colorPreview} 
                          onChange={(color) => {
                            field.onChange(color);
                            setColorPreview(color);
                          }} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <Separator className="my-4" />

            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" disabled={isPending}>
                {isPending ? "Creating..." : "Create Nursery"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}