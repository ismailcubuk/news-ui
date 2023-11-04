import React from "react";

export default function Carousel() {
  const backgroundImageUrl = "/images/bg.jpg";

  return (
    <div className="flex justify-center border-2 border-blue-800">
      <div
        className="flex h-400 w-[1440px] bg-no-repeat border-2 border-red-600 relative"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="bg-blue-500 w-[64px] h-[64px] absolute top-[164px] left-[60px]"></div>
        <div className="absolute w-[615px] h-[188px] top-[106px] left-[92px] p-[32px] bg-black text-white">
          <div className=" grid gap-5">
            <h1 className="text-[28px]">
              This is how a Trump constitutional coup would unfold
            </h1>
            <div className="flex items-center gap-4">
              <img src="/images/pp.png" alt="Profil Resmi" />
              <p className="text-[12px]">ALFONS LOPEZ TENA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
