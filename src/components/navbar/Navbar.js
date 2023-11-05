import React, { useState, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { BsSearch } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import MySVGComponent from "../../svg/Logo";

export default function Navbar() {
  const [showInlineFlex, setShowInlineFlex] = useState(
    window.innerWidth >= 768
  );

  useEffect(() => {
    const handleResize = () => {
      setShowInlineFlex(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav className="flex bg-blue-700 items-center h-12 px-3 mytablet:px-8 justify-between">
      <MySVGComponent />
      {showInlineFlex ? (
        <div className="flex items-center">
          <div className="w-[436px] h-[20px] inline-flex gap-4 text-white mr-4 my-2">
            <button className="flex items-center author">
              NEWS <MdKeyboardArrowDown />
            </button>
            <button className="flex items-center author">
              FEATURES <MdKeyboardArrowDown />
            </button>
            <button className="flex items-center author">
              TOPICS <MdKeyboardArrowDown />
            </button>
            <button className="flex items-center author">
              VIDEO <MdKeyboardArrowDown />
            </button>
            <button className="flex items-center author">
              <GoDotFill color="red" />
              LIVE
            </button>
          </div>
          <button className="w-12 h-12 bg-search flex justify-center items-center text-white">
            <BsSearch />
          </button>
        </div>
      ) : (
        <div className="flex">
          <button className="w-12 h-12 flex justify-center items-center text-white">
            <BsSearch />
          </button>
          <button className="w-12 h-12 flex justify-center items-center text-white">
            <HiMenu />
          </button>
        </div>
      )}
    </nav>
  );
}
