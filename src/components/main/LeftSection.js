import sharanpp from '../../images/profilePictures/sharanpp.png';
import thumb1 from '../../images/thumbs/thumb1.jpg';

export default function LeftSection() {
  return (
    <div className="mytablet:w-2/4 flex flex-col gap-6 shrink-0 w-full">
        <img src={thumb1} alt="thumb1"/>
          <p className="px-8 mytablet:px-0 mymd:text-[42px] mymd:leading-[52px] mytablet:text-[36px] mytablet:leading-[44px] text-[28px] leading-[36px] font-bold">
            Celebrate Kamala Harris, But Don’t Stop Applying Pressure To The
            System
          </p>
          <p className="px-8 mytablet:px-0 font-normal text-[16px] leading-[24px] mysm:text-[18px] mysm:leading-[28px]">
            We shouldn’t downplay what vice president-elect Kamala Harris means
            as a minority woman in high office, but we can’t ignore her
            complicated past nor a system she inhabits that is built to thwart
            change.
          </p>
          <div className="px-8 mytablet:px-0 flex items-center gap-4">
            <img src={sharanpp} alt="sharanpp" />
            <p>Sharan Dhaliwal</p>
        </div>
      </div>
  )
}
