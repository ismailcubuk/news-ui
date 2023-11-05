import React, { useState, useEffect } from "react";
import PopularSection from "./PopularSection";
import MiddleSection from "./MiddleSection";
import LeftSection from "./LeftSection";

export default function Layer1() {
  const [showComponent, setShowComponent] = useState(true);
  const [diver2, setDiver2] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setShowComponent(false);
      } else {
        setShowComponent(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDiver2(false);
      } else {
        setDiver2(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="flex flex-col-reverse myxl:flex-col mytablet:mx-8 ">
      <div className="flex w-full h-12 flex-row justify-center items-center">
        <div className="w-full border-2" />
      </div>
      <div className="flex items-start flex-col mytablet:flex-row">
        <div className="mytablet:w-2/4">
          <LeftSection />
        </div>
        {diver2 ? (
          <div className="flex h-[700px] w-12 flex-row justify-center items-center">
            <div className="h-full border-2" />
          </div>
        ) : (
          <div className="flex w-full h-12 flex-row justify-center items-center">
            <div className="w-full border-2" />
          </div>
        )}
        <div className="flex flex-col mytablet:w-2/4 px-8 mytablet:px-0 mysm:flex-row">
          <MiddleSection />
          {showComponent ? (
            <div className="flex min-h-full w-12 flex-row justify-center items-center">
              <div className="h-full border-2" />
            </div>
          ) : null}
          <PopularSection />
        </div>
      </div>
    </div>
  );
}
