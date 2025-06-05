import React from "react";
import { lessonsAuthContext } from "@/features/lessonPlans/lessons-auth-context";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function NewLessonTemplate({
  children
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const header_url = headersList.get("x-current-path") || "";

  if (header_url === "/dashboard/lessons/new") {
    const authContext = await lessonsAuthContext();

    if ("error" in authContext) {
      return redirect("/dashboard/lessons");
    }
  }

  return children;
}
