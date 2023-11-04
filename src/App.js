import Navbar from "./components/navbar/Navbar";
import Carousel from "./components/main/Carousel";

function App() {
  return (
    <div className="flex justify-center w-full border-2 border-blue-500">
      <div className="max-w-screen-2xl w-full">
        <Navbar />
        <div className="w-fit ml-[60px] my-[32px] text-[20px] font-bold text-blue-700">
        OPINION
        </div>
        <Carousel />
        </div>
    </div> 
  );
}

export default App;
