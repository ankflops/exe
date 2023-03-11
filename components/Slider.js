import React from "react";

const Slider = () => {
  return (
    <div>
      <div
        id="carouselDarkVariant"
        className="carousel slide carousel-fade carousel relative"
        data-bs-ride="carousel"
      >
        <div className="relative w-full lg:h-[560px] xs:-mt-64 mx-auto overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <img
              src="/assets/img/2.jpg のコピー.jpg"
              className="block w-full"
              alt="1"
            />
            <div className="carousel-caption hidden md:block absolute text-left ">
              <h5 className="text-sm sm:text-2xl md:text-4xl xl:text-5xl md:mb-0 md:pb-4 md:max-w-3xl text-[#0E1447] font-bold">
                全てのマーケットには<br></br>
                　最高の投資機会がある
              </h5>
              <p className="text-sm md:text-xl md:mb-24 sm:pb-8 md:pb-96"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
