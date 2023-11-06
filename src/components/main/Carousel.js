import bg from '../../images/background/bg.jpg';
import alfonspp from '../../images/profilePictures/alfonspp.png';
export default function Carousel() {
  return (
      <div className="flex justify-center">
          <div>
            <div
              className=" mymd:h-[400px] max-w-screen-myxl w-screen mysm:h-[320px] mysm:flex hidden bg-center bg-cover bg-no-repeat relative  min-w-[320px]"
              style={{ backgroundImage: `url(${bg})` }}
            >
              <div className="bg-blue-500 hidden mysm:flex w-[64px] h-[64px] absolute top-1/2 transform -translate-y-1/2 left-[26px] mytablet:left-[36px] mylg:left-[60px]"></div>
              <div className="absolute left-[58px] mymd:left-[68px] mylg:left-[92px] top-1/2 transform -translate-y-1/2  bg-black p-8  text-white">
                <h1 className="mytablet:text-[28px] mytablet:leading-[36px] pb-5">
                  This is how a Trump constitutional coup would unfold
                </h1>
                <div className="flex items-center gap-4">
                  <img
                    src={alfonspp}
                    alt="alfonspp"
                  />
                  <p className="text-[12px]">ALFONS LOPEZ TENA</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mysm:hidden flex flex-col">
            <img src={bg} alt="bg" />
            <div className="bg-black text-white p-6">
              <h1 className="leading-[28px] text-[20px] pb-5">
                This is how a Trump constitutional coup would unfold
              </h1>
              <div className="flex items-center gap-4">
                <img
                  src={alfonspp}
                  alt="alfonspp"
                />
                <p className="text-[12px]">ALFONS LOPEZ TENA</p>
              </div>
            </div>
          </div>
    </div>
  );
}
