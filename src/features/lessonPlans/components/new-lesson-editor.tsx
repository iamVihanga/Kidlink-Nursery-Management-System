"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusCircle } from "lucide-react";

import {
  addLessonSchema,
  type AddLessonSchema
} from "@/features/lessonPlans/schemas/zod-lesson-schema";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import { NovelEditor } from "@/features/novel/components/editor";
import { useRouter } from "next/navigation";
import { useCreateLesson } from "../api/use-add-lesson";
import { MediaUploader } from "@/modules/media/components/MediaUploader";
import { MediaUploadPaths } from "@/modules/media/types";
import { toast } from "sonner";
import { useGetClasses } from "@/features/classes/api/use-get-classes";

export function NewLessonEditor() {
  const { mutate, isPending } = useCreateLesson();
  const router = useRouter();
  const { data: classesData, isLoading: classesLoading } = useGetClasses({
    limit: 100 // Fetch a reasonable number of classes
  });

  const form = useForm<AddLessonSchema>({
    resolver: zodResolver(addLessonSchema),
    defaultValues: {
      title: "",
      description: "{}",
      thumbnail: "",
      classId: ""
    }
  });

  const handleCreateLesson = (values: AddLessonSchema) => {
    console.log({ values });
    mutate(values, {
      onSuccess: () => {
        form.reset();
        router.push(`/dashboard/lessons`);
      }
    });
  };

  return (
    <Card>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleCreateLesson)}>
          <CardHeader>
            <CardTitle className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel />
                    <FormControl>
                      <input
                        placeholder="Lesson title..."
                        className="text-2xl font-normal w-full outline-none border-none px-5 py-4 rounded-md dark:bg-neutral-900/45 bg-neutral-100"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="classId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Class</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      disabled={classesLoading}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a class" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {classesData?.classes.map((classItem) => (
                          <SelectItem key={classItem.id} value={classItem.id}>
                            {classItem.name}
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
                name="thumbnail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Add Lesson Thumbnail</FormLabel>
                    <FormControl>
                      <MediaUploader
                        acceptedTypes={["image"]}
                        path={MediaUploadPaths.LESSONS}
                        onUpload={(file) => {
                          field.onChange(file.url);
                        }}
                        onError={(error) => {
                          console.log(error);
                          toast.error("Failed to upload image", {
                            description: error.message
                          });
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardTitle>
          </CardHeader>

          <CardContent className="mt-4">
            <NovelEditor
              value={form.watch("description")}
              onChange={(value) => form.setValue("description", value)}
            />
          </CardContent>

          <CardFooter className="flex justify-end">
            <Button
              type="submit"
              icon={<PlusCircle className="size-4" />}
              loading={isPending}
            >
              Create Lesson
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
