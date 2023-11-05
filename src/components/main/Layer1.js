import PopularSection from "./PopularSection";
import MiddleSection from "./MiddleSection";
import LeftSection from "./LeftSection";

export default function Layer1() {
  return (
    <div className="flex flex-col-reverse myxl:flex-col mytablet:mx-8 ">
      <div className="flex w-full h-12 flex-row justify-center items-center">
        <div className="w-full border-2" />
      </div>
      <div className="flex items-start flex-col mytablet:flex-row">
        <div className="mytablet:w-2/4">
          <LeftSection />
        </div>
        <div className=" h-[700px] hidden mytablet:flex w-12 flex-row justify-center items-center">
          <div className="h-full border-2" />
        </div>
        <div className="flex w-full h-12 mytablet:hidden flex-row justify-center items-center">
          <div className="w-full border-2" />
        </div>
        <div className="flex flex-col mytablet:w-2/4 px-8 mytablet:px-0 mysm:flex-row">
          <MiddleSection />
          <div className=" min-h-full hidden mysm:flex w-12 flex-row justify-center items-center">
            <div className="h-full border-2" />
          </div>
          <div className="w-full h-12 flex mysm:hidden flex-col justify-center items-center">
            <div className="w-full border-2" />
          </div>
          <PopularSection />
        </div>
      </div>
    </div>
  );
}
