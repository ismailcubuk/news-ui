import React from "react";
import PopularSection from "./PopularSection";
import MiddleSection from "./MiddleSection";
import LeftSection from "./LeftSection";

export default function Layer1() {
  return (
    <div className="grid grid-cols-2 gap-4 divide-x-2 pb-6">
      <LeftSection/>
      <div className="col-span-1 grid-cols-2 grid divide-x-2">
        <MiddleSection/>
        <PopularSection/>
      </div>
    </div>
  );
}
