import React from "react";
import PopularSection from "./PopularSection";
import MiddleSection from "./MiddleSection";
import LeftSection from "./LeftSection";
import { DividerW, DividerH } from "../Divider";

export default function Layer1() {
  return (
    <div className="flex flex-col-reverse myxl:flex-col mx-8 ">
      <DividerW />
      <div className="flex items-start flex-col mytablet:flex-row ">
        <div className="mytablet:w-2/4">
        <LeftSection />
        </div>
        <div className="flex flex-col border-2 mytablet:w-2/4 border-red-500 mysm:flex-row">
          <MiddleSection />
          <PopularSection />
        </div>
      </div>
    </div>
  );
}

  {/* <div className="flex h-[700px] w-12 flex-row justify-center items-center">
          <div className="h-full border-2" />
        </div> */}