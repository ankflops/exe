import React from "react";

const Slider = () => {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-no-repeat h-[16rem] md:h-[20rem] lg:h-[35rem] mb-4"
      style={{
        backgroundPosition: "50%",
        backgroundImage: 'url("/assets/img/starter.jpg")',
      }}
    >
      <div
        className="absolute top-6 sm:top-20 right-0 bottom-0 left-6 sm:left-20 h-full w-full overflow-hidden bg-fixed"
        style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
      >
        <div className="text-sm sm:text-2xl md:text-4xl xl:text-5xl md:mb-0 md:pb-4 md:max-w-3xl text-[#0E1447] font-bold">
          <h3> 全てのマーケットには</h3>
          <h3 className="ml-4">最高の投資機会がある</h3>
        </div>
      </div>
    </div>
  );
};

export default Slider;
