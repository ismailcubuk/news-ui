import { MdKeyboardArrowDown } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { BsSearch } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="flex bg-blue-700 items-center h-12 px-5 justify-between">
      <div>
        <span className=" text-white">TRT</span>
        <span className=" text-world">WORLD</span>
      </div>
      <div className="flex">
        <div className="w-[436px] flex gap-4 text-white mr-4 my-2">
          <button className="flex items-center">
            NEWS <MdKeyboardArrowDown />
          </button>
          <button className="flex items-center">
            FEATURES <MdKeyboardArrowDown />
          </button>
          <button className="flex items-center">
            TOPICS <MdKeyboardArrowDown />
          </button>
          <button className="flex items-center">
            VIDEO <MdKeyboardArrowDown />
          </button>
          <button className="flex items-center">
            <GoDotFill color="red" />
            LIVE
          </button>
        </div>
        <button className="w-12 h-12 bg-search flex justify-center items-center text-white">
          <BsSearch />
        </button>
      </div>
    </nav>
  );
}