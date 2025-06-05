"use client";

import PageContainer from "@/components/layouts/page-container";
import { NewLessonEditor } from "@/features/lessonPlans/components/new-lesson-editor";

export default function AddNewMaterialPage() {
  return (
    <PageContainer scrollable={false}>
      <div className="flex flex-1 flex-col space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Add New Lesson</h1>
        </div>

        <NewLessonEditor />
      </div>
    </PageContainer>
  );
}
