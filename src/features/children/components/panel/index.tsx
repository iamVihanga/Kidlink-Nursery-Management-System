import React from "react";
import { Overview } from "./overview";
import { TabView } from "./tab-view";

export function Panel() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 h-[calc(100vh-200px)]">
      <div className="w-full lg:w-[320px] h-full">
        <Overview />
      </div>
      <div className="w-full lg:flex-1 h-full">
        <TabView />
      </div>
    </div>
  );
}
