import React from "react";
import { Overview } from "./overview";
import { TabView } from "./tab-view";

export function Panel() {
  return (
    <div className="flex flex-1 h-[calc(100vh-200px)]">
      <div className="w-1/3 pr-4">
        <Overview />
      </div>
      <div className="w-2/3">
        <TabView />
      </div>
    </div>
  );
}
