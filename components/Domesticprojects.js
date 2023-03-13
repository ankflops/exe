import React from "react";
import Link from "next/link";
import LazyLoad from "react-lazy-load";

const Domesticprojects = () => {
  return (
    <div className="pb-8">
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2">
          <div className="md:p-8">
            <img
              src="/assets/img/i.jpg"
              loading="lazy"
              className="w-75% h-auto align-middle mx-auto bg-center bg-cover"
            />
          </div>

          <div className="p-4 my-4 md:p-8">
            <h2 className=" text-3xl font-bold text-gray-700">
              ミャンマープロジェクト
            </h2>
            <p className="my-4 text-lg font-medium text-gray-500 text-justify">
              1999年より日本初となるオフィスビル・ホテル事業を展開しています。サクラタワーを所有し、海外駐在員向けアパートメントとなるサクラレジデンスの運営をしています。
            </p>
            <div className="flex justify-center lg:justify-end">
              <Link href="/myanmar">
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
        </div>
      </div>
    </div>
  );
};

export default Domesticprojects;
