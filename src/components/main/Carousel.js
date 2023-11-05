import React from "react";

export default function Carousel() {
  const backgroundImageUrl = "/images/background/bg.jpg";

  return (
    <div className="flex justify-center">
      <div
        className="flex mymd:h-[400px]  w-full bg-no-repeat relative"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="bg-blue-500 w-[64px] h-[64px] absolute top-[164px] left-[60px]"></div>
        <div className="absolute w-[615px] h-[188px] top-[106px] left-[92px] bg-black p-8  text-white">
            <h1 className="text-[28px] pb-5">
              This is how a Trump constitutional coup would unfold
            </h1>
            <div className="flex items-center gap-4">
              <img src="/images/profilePictures/alfonspp.png" alt="alfonspp" />
              <p className="text-[12px]">ALFONS LOPEZ TENA</p>
            </div>
        </div>
      </div>
    </div>
  );
}
