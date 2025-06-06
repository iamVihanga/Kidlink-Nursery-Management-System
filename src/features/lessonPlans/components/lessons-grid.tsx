"use client";
import React from "react";
import { useGetLessons } from "../api/use-get-lessons";

export function LessonsGrid() {
  const { data, error, isPending } = useGetLessons();

  console.log({ data, error, isPending });

  return <div>LessonsGrid</div>;
}
