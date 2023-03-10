import React from "react";

const Slider = () => {
  return (
    <div>
      <div
        id="carouselDarkVariant"
        className="carousel slide carousel-fade carousel relative"
        data-bs-ride="carousel"
      >
        {/* Indicators */}
        {/* <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to={1}
            aria-label="Slide 1"
          />
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to={2}
            aria-label="Slide 1"
          />
        </div> */}
        {/* Inner */}
        <div className="relative w-full lg:h-[560px] xs:-mt-64 mx-auto overflow-hidden">
          {/* Single item */}
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
        {/* Inner */}
        {/* Controls */}
        {/* <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          />
          <span className="visually-hidden">Previous</span>
        </button> */}
        {/* <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          />
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>
    </div>
  );
};

export default Slider;
