import React from "react";
import HorizontalLine from "../HorizontalLine";
import VerticalLine from "../VerticalLine";
import PopularSection from "./PopularSection";
import MiddleSection from "./MiddleSection";

export default function Layer1() {
  return (
    <div className="grid grid-cols-2 h-[720px] gap-4 relative">
      {/* LEFT */}
      <div className="grid grid-rows-2 col-span-1 w-[648px]">
        <img src="/images/thumb1.jpg" alt="Profil Resmi" />
        <div className="grid">
          <p className="text-[42px] font-bold leading-[52px]">
            Celebrate Kamala Harris, But Don’t Stop Applying Pressure To The
            System
          </p>
          <p className="font-normal text-[18px] leading-[28px]">
            We shouldn’t downplay what vice president-elect Kamala Harris means
            as a minority woman in high office, but we can’t ignore her
            complicated past nor a system she inhabits that is built to thwart
            change.
          </p>
          <div className="flex items-center gap-4">
            <img src="/images/sharanpp.png" alt="sharanpp Profil Resmi" />
            <p>Sharan Dhaliwal</p>
          </div>
        </div>
      </div>
      <HorizontalLine />
      {/* RİGHT */}
      <div className="col-span-1 grid-cols-2 grid divide-x-2">
        <MiddleSection/>
        <PopularSection/>
      </div>
    </div>
  );
}
