import React from "react";
import Link from "next/link";
import MainLayout from "../layout/MainLayout";

const overseas = () => {
  return (
    <MainLayout>
      <div className="my-8 pt-8">
        <h2 className="font-serif text-3xl text-gray-600 text-center mb-8 font-semibold">
          海外プロジェクト
        </h2>
        <div className="text-center text-gray-500 font-medium text-lg p-4">
          <p className="py-2">
            ミャンマー、モンゴル、ベトナム、イスラエルなどで数多くのプロジェクトを完成・運営し、これらの国々の発展のお手伝いをさせていただいております。
          </p>
          <p className="py-2">
            当社が常に掲げてきた信念「変化こそチャンスである」を形にしてきたのが、新興国を中心とした海外プロジェクトです。
          </p>
          <p className="py-2">
            時代の変化をビジネスチャンスと捉え、社会に求められるもの、そして未来の時代を見据え投資を行って参りました。
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2">
            <div className="p-4 md:p-8">
              <img
                src="/assets/img/i.jpg"
                loading="lazy"
                className="w-75% h-auto align-middle mx-auto bg-center bg-cover"
              />
            </div>

            <div className="p-4 my-4 md:p-8 mx-4">
              <h2 className=" text-3xl font-bold text-gray-800">
                ミャンマープロジェクト
              </h2>
              <p className="my-4 text-xl font-medium text-gray-500">
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
      <div className="pb-8">
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2">
          <div className=" p-4 m-4 md:p-4">
            <h2 className=" text-3xl font-bold text-gray-800">
            モンゴルプロジェクト
            </h2>
            <p className="my-8 text-xl font-medium text-gray-500">
            2010年に日本初の投資事業会社Sanaa EXE LLCを設立し、不動産投資事業、金融事業、教育事業を展開しています。エクセプラザ、Olonglong」スクールを運営しています。

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
          <div className="p-4">
            <img
              src="/assets/img/1659582198.jpg"
              loading="lazy"
              className="w-75% h-auto align-middle mx-auto bg-center bg-cover"
            />
          </div>
        </div>
      </div>
    </div>
    </MainLayout>
  );
};

export default overseas;
