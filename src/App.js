import Navbar from "./components/navbar/Navbar";
import Carousel from "./components/main/Carousel";
import Opinion from "./components/Opinion";
import Layer1 from "./components/main/Layer1";
import Layer2 from "./components/main/Layer2";
import Footer from "./components/main/Footer";

function App() {
  return (
    <div className="flex justify-center w-full nato-serif">
      <div className="max-w-screen-myxl">
        <Navbar />
        <Opinion />
        <div className="flex flex-col-reverse myxl:flex-col">
          <Carousel />
          <Layer1 />
        </div>
        <div>
          <div className="flex w-full h-12 flex-row justify-center items-center">
            <div className="w-full border-2" />
          </div>
          <Layer2 />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
