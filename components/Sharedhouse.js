import React from "react";
import Link from "next/link";
import LazyLoad from "react-lazy-load";

const Sharedhouse = () => {
  return (
    <div className="pb-8">
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2">
          <div className=" p-4 md:p-4">
            <h2 className="text-lg md:text-3xl font-semibold text-gray-700 text-center md:text-left">
              モンゴルプロジェクト
            </h2>
            <p className="my-4 text-lg font-medium text-gray-500 text-justify">
              2010年に日本初の投資事業会社Sanaa EXE
              LLCを設立し、不動産投資事業、金融事業、教育事業を展開しています。エクセプラザ、Olonglong」スクールを運営しています。
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link href="/mongolia">
                <button
                  className="bg-gray-200 px-14 py-3 bg-darkblue text-gray-400 font-extrabold text-base leading-snug uppercase"
                  role="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  詳細はこちら
                </button>
              </Link>
            </div>
          </div>
          <div className="md:px-4 row-start-1 md:row-span-1">
            <img
              src="/assets/img/exe website mongolia.jpg"
              loading="lazy"
              className="w-75% h-auto align-middle mx-auto bg-center bg-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sharedhouse;
