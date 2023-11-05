import React from 'react'

export default function LeftSection() {
  return (
    <div className="flex flex-col gap-6 shrink-0 w-[648px]">
        <img src="/images/thumbs/thumb1.jpg" alt="thumb1"/>
          <p className="text-[42px] font-bold leading-[52px] capitalize">
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
            <img src="/images/profilePictures/sharanpp.png" alt="sharanpp" />
            <p>Sharan Dhaliwal</p>
        </div>
      </div>
  )
}
