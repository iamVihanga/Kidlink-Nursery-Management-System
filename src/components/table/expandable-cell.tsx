"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

interface ExpandableCellProps {
  content: string;
  maxLength?: number;
}

export function ExpandableCell({ content, maxLength = 50 }: ExpandableCellProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  if (!content) return null;
  
  // If content is shorter than maxLength, just render it
  if (content.length <= maxLength) {
    return <div className="whitespace-normal break-words">{content}</div>;
  }

  // Otherwise, show truncated content with "Read More" button
  const truncated = `${content.substring(0, maxLength)}...`;

  return (
    <>
      <div>
        <p className="whitespace-normal break-words mb-1">{truncated}</p>
        <Button 
          variant="outline" 
          size="sm" 
          className="h-7 text-xs"
          onClick={() => setIsOpen(true)}
        >
          Read More
        </Button>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Full Content</DialogTitle>
          </DialogHeader>
          <div className="whitespace-pre-wrap break-words py-4 max-h-[60vh] overflow-y-auto">
            {content}
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button>Close</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}