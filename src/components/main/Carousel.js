import React, { useState, useEffect } from "react";

export default function Carousel() {
  const backgroundImageUrl = "/images/background/bg.jpg";

  const [showData, setShowData] = useState(true);
  const [showDivider, setShowDivider] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 576) {
        setShowData(false);
      } else {
        setShowData(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1440) {
        setShowDivider(false);
      } else {
        setShowDivider(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <div className="flex justify-center">
        {showData ? (
          <div>
            <div
              className="flex mymd:h-[400px] max-w-screen-myxl w-screen mysm:h-[320px] bg-center bg-cover bg-no-repeat relative  min-w-[320px]"
              style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            >
              <div className="bg-blue-500 hidden mysm:flex w-[64px] h-[64px] absolute top-1/2 transform -translate-y-1/2 left-[26px] mytablet:left-[36px] mylg:left-[60px]"></div>
              <div className="absolute left-[58px] mymd:left-[68px] mylg:left-[92px] top-1/2 transform -translate-y-1/2  bg-black p-8  text-white">
                <h1 className="mytablet:text-[28px] mytablet:leading-[36px] pb-5">
                  This is how a Trump constitutional coup would unfold
                </h1>
                <div className="flex items-center gap-4">
                  <img
                    src="/images/profilePictures/alfonspp.png"
                    alt="alfonspp"
                  />
                  <p className="text-[12px]">ALFONS LOPEZ TENA</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <img src={backgroundImageUrl} alt="bg" />
            <div className="bg-black text-white p-6">
              <h1 className="leading-[28px] text-[20px] pb-5">
                This is how a Trump constitutional coup would unfold
              </h1>
              <div className="flex items-center gap-4">
                <img
                  src="/images/profilePictures/alfonspp.png"
                  alt="alfonspp"
                />
                <p className="text-[12px]">ALFONS LOPEZ TENA</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
