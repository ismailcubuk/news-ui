import Navbar from "./components/navbar/Navbar";
import Carousel from "./components/main/Carousel";
import Opinion from "./components/Opinion";
import Layer1 from "./components/main/Layer1";
import Layer2 from "./components/main/Layer2";
import { DividerW } from "./components/Divider";

function App() {
  return (
    <div className="flex justify-center w-full nato-serif">
      <div className="max-w-screen-myxl">
        <Navbar />
        <Opinion />
        <Carousel />
        <div className="mx-[60px]">
          <DividerW />
        </div>
        <div className="mx-[60px]">
          <Layer1 />
          <DividerW />
          <Layer2 />
        </div>
        <div className="bg-footer h-20 w-full" />
      </div>
    </div>
  );
}

export default App;
