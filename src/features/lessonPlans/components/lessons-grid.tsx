"use client";

import React from "react";
import { useGetLessons } from "../api/use-get-lessons";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { CalendarIcon } from "lucide-react";

export function LessonsGrid() {
  const { data, error, isPending } = useGetLessons();

  if (isPending) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Skeleton className="h-full w-full" />
            </div>
            <CardHeader>
              <Skeleton className="h-6 w-3/4" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3" />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-24" />
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-8 text-center">
        <p className="text-red-500">Error loading lessons: {error.message}</p>
      </div>
    );
  }

  if (!data?.lessonPlans || data.lessonPlans.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-muted-foreground">No lessons available</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
      {data.lessonPlans.map((lesson) => (
        <Card
          key={lesson.id}
          className="overflow-hidden hover:shadow-lg transition-shadow p-0"
        >
          <CardHeader className="p-0">
            <div className="relative h-48 w-full">
              <Image
                src={lesson.thumbnail}
                alt={lesson.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold mx-3 my-2">{lesson.title}</h3>
          </CardHeader>

          <CardContent className="px-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
              <CalendarIcon size={14} />
              <span>{new Date(lesson.createdAt).toLocaleDateString()}</span>
            </div>
          </CardContent>

          <CardFooter>
            <button className="text-sm font-medium text-primary hover:underline">
              View Lesson
            </button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
