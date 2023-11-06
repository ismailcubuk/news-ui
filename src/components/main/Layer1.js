import PopularSection from "./PopularSection";
import MiddleSection from "./MiddleSection";
import LeftSection from "./LeftSection";
import Divider from "../Dividers";
export default function Layer1() {
  return (
    <div className="flex flex-col-reverse myxl:flex-col mytablet:mx-8 ">
      {/* HEADER */}
      <Divider dividerSection w />
      {/* MAİN CONTENT */}
      <div className="flex items-start flex-col mytablet:flex-row">
        <LeftSection />
        <Divider h7 h />
        <div className="flex flex-col mytablet:w-2/4 px-8 mytablet:px-0 mysm:flex-row">
          <MiddleSection />
          <Divider h7tbl h />
          <PopularSection />
        </div>
      </div>
    </div>
  );
}
