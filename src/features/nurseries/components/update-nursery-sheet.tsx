import React, { useEffect, useRef, useState, useTransition } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Organization } from "@/types/schema-types/index";
import { authClient } from "@/lib/auth-client";
import {
  createNurserySchema,
  CreateNurserySchema
} from "../schemas/create-nursery";
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
import Image from "next/image";
import { ImageIcon, Upload } from "lucide-react";
import { useUpdateNursery } from "@/features/nurseries/api/use-update-nursery";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UpdateNurseryDetails } from "./update-nursery-details";
import { UpdateNurseryBankDetails } from "./update-nursery-bank-details";

interface UpdateNurserySheetProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  updateNurseryId: string;
}

export function UpdateNurserySheet({
  open,
  setOpen,
  updateNurseryId
}: UpdateNurserySheetProps) {
  const { mutate, isPending } = useUpdateNursery();
  const [isFetching, startFetching] = useTransition();
  const [currentNursery, setCurrentNursery] = useState<Organization | null>(
    null
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const form = useForm<CreateNurserySchema>({
    resolver: zodResolver(createNurserySchema),
    defaultValues: {
      name: "",
      description: "",
      image: undefined
    }
  });

  useEffect(() => {
    if (!open) return;

    startFetching(async () => {
      if (!updateNurseryId) return;

      const { data: organization, error } =
        await authClient.organization.getFullOrganization({
          query: { organizationId: updateNurseryId }
        });

      if (!organization || error) {
        toast.error("Failed to fetch organization data");
        return;
      }

      setCurrentNursery({
        id: organization.id,
        name: organization.name,
        slug: organization.slug,
        logo: organization?.logo || null,
        metadata: organization.metadata,
        createdAt: organization.createdAt
      });
    });
  }, [open, updateNurseryId]);

  useEffect(() => {
    if (!currentNursery) return;

    form.setValue("name", currentNursery.name);

    if (currentNursery.metadata) {
      const desc = JSON.parse(currentNursery.metadata)?.description || "";
      form.setValue("description", desc);
    }

    if (currentNursery.logo) {
      form.setValue("image", currentNursery.logo);
    }
  }, [currentNursery]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      form.setValue("image", file);
    }
  };

  const onSubmit = (values: CreateNurserySchema) => {
    mutate(
      { ...values, id: updateNurseryId },
      {
        onSuccess() {
          form.reset();
          setOpen(false);
        }
      }
    );
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Nursery</SheetTitle>
          <SheetDescription>
            {`Make changes to selected nursery here. Click save when you're done.`}
          </SheetDescription>
        </SheetHeader>

        <ScrollArea className="h-full pb-36">
          {/* Update Form */}
          {isFetching ? (
            <div className="grid gap-6 py-2 px-6">
              <div className="space-y-2">
                <Skeleton className="h-4 w-52" />
                <Skeleton className="h-8 w-full" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-52" />
                <Skeleton className="h-8 w-full" />
              </div>
              <div className="flex items-center gap-3 w-full">
                <Skeleton className="size-14 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-52" />
                  <Skeleton className="h-8 w-40" />
                </div>
              </div>
            </div>
          ) : (
            currentNursery && (
              <div className="flex flex-col">
                {/* Basic Settings Form */}
                <Form {...form}>
                  <form className="px-6" onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-y-5 my-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nursery name</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Enter nursery name"
                              />
                            </FormControl>

                            <FormMessage {...field} />
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
                              <Input
                                {...field}
                                placeholder="Nursery description (Ex: Gampaha)"
                              />
                            </FormControl>

                            <FormMessage {...field} />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                          <div className="flex flex-col gap-y-2">
                            <div className="flex items-center gap-x-5">
                              {field.value ? (
                                <div className="size-[72px] relative rounded-md overflow-hidden">
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
                                <Avatar className="size-[72px]">
                                  <AvatarFallback>
                                    <ImageIcon className="size-[36px] text-neutral-400" />
                                  </AvatarFallback>
                                </Avatar>
                              )}
                              <div className="flex flex-col">
                                <p className="text-sm">Nursery Logo</p>
                                <p className="text-xs text-muted-foreground">
                                  {`JPG, PNG, SVG or JPEG (max 1MB)`}
                                </p>
                                <input
                                  className="hidden"
                                  type="file"
                                  accept=".jpg, .png, .jpeg, .svg"
                                  ref={inputRef}
                                  disabled={isPending}
                                  onChange={handleImageChange}
                                />
                                {field.value ? (
                                  <Button
                                    type="button"
                                    disabled={isPending}
                                    variant={"destructive"}
                                    size="sm"
                                    className="w-fit mt-2"
                                    onClick={() => {
                                      field.onChange(null);
                                      if (inputRef.current) {
                                        inputRef.current.value = "";
                                      }
                                    }}
                                    icon={<Upload className="size-3" />}
                                  >
                                    Remove Image
                                  </Button>
                                ) : (
                                  <Button
                                    type="button"
                                    disabled={isPending}
                                    variant={"default"}
                                    size="sm"
                                    className="w-fit mt-2"
                                    onClick={() => inputRef.current?.click()}
                                    icon={<Upload className="size-3" />}
                                  >
                                    Upload Image
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                      />
                    </div>

                    <SheetFooter className="px-0">
                      <SheetClose asChild>
                        <Button type="submit">Save Basic Settings</Button>
                      </SheetClose>
                    </SheetFooter>
                  </form>
                </Form>

                {/* Nursery Details Form */}
                <div className="">
                  <UpdateNurseryDetails currentNursery={currentNursery} />
                </div>

                {/* Bank Details Form */}
                <div className="">
                  <UpdateNurseryBankDetails currentNursery={currentNursery} />
                </div>
              </div>
            )
          )}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
