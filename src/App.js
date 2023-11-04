import Navbar from "./components/navbar/Navbar";
import Carousel from "./components/main/Carousel";
import Opinion from "./components/Opinion";
import Layer1 from "./components/main/Layer1";
import VerticalLine from "./components/VerticalLine";

function App() {
  return (
    <div className="flex justify-center w-full nato-serif">
      <div className="max-w-screen-myxl">
        <Navbar />
        <Opinion />
        <Carousel />
        <div className="mx-[60px]">
          <VerticalLine/>
          <Layer1 />
        </div>
      </div>
    </div>
  );
}

export default App;
