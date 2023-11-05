import React from "react";
import PopularSection from "./PopularSection";
import MiddleSection from "./MiddleSection";
import LeftSection from "./LeftSection";
import { DividerW, DividerH } from "../Divider";

export default function Layer1() {
  return (
    <div className="flex items-start">
      <LeftSection />
      <div className="flex h-[700px] w-12 flex-row justify-center items-center">
        <div className="h-full border-2" />
      </div>
      <MiddleSection />
      <div className="flex h-[700px] w-12 flex-row justify-center items-center">
        <div className="h-full border-2" />
      </div>
      <PopularSection />
    </div>
  );
}
