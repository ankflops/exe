import React from "react";
import Link from "next/link";
import LazyLoad from "react-lazy-load";

const Domesticprojects = () => {
  return (
    <div className="pb-8">
      {/* <div className="my-8 pt-8">
        <h2 className="font-serif text-3xl text-gray-600 text-center mb-8 font-semibold">
           海外プロジェクト
        </h2>
        <div className="justify-center">
          <p className="text-center text-gray-500 font-medium mt-3 mb-5 mr-5 ml-5 lg:ml-60 lg:mr-60 text-lg">ミャンマー、モンゴル、ベトナム、イスラエルなどで数多くのプロジェクトを完成・運営し、これらの国々の発展のお手伝いをさせていただいております。</p>
          <p className="text-center text-gray-500 font-medium mt-3 mb-5 mr-5 ml-5 lg:ml-72 lg:mr-72 text-lg">当社が常に掲げてきた信念「変化こそチャンスである」を形にしてきたのが、新興国を中心とした海外プロジェクトです。</p>
          <p className="text-center text-gray-500 font-medium mt-3 mb-5 mr-5 ml-5 lg:ml-96 lg:mr-96 text-lg">時代の変化をビジネスチャンスと捉え、社会に求められるもの、そして未来の時代を見据え投資を行って参りました。</p>
        </div>
      </div> */}

      <div className="flex justify-center">
        <div className="grid md:grid-cols-2">
          <div className="p-10">
            <img
              src="/assets/img/i.jpg"
              loading="lazy"
              className="w-75% h-auto align-middle mx-auto bg-center bg-cover"
            />
          </div>

          <div className=" p-4 my-4 md:p-8">
            <h2 className=" text-3xl font-bold text-gray-800">
              ミャンマープロジェクト
            </h2>
            <p className="my-8 text-xl font-medium text-gray-500">
              1999年より日本初となるオフィスビル・ホテル事業を展開しています。サクラタワーを所有し、海外駐在員向けアパートメントとなるサクラレジデンスの運営をしています。
            </p>
            <div className="flex justify-center lg:justify-end">
              <Link href="/overseas">
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
