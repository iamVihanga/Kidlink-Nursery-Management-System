"use client";

import React from "react";
import { useParams } from "next/navigation";
import { ClassOverview } from "./class-overview";
import { ClassTabView } from "./class-tab-view";

export default function ClassDetailsPage() {
  const params = useParams();
  const classId = params.id as string;

  return (
    <div className="flex flex-col lg:flex-row gap-4 h-[calc(100vh-200px)]">
      <div className="w-full lg:w-[320px] h-full">
        <ClassOverview classId={classId} />
      </div>
      <div className="w-full lg:flex-1 h-full">
        <ClassTabView classId={classId} />
      </div>
    </div>
  );
}
