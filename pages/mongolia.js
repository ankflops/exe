import React from "react";
import Link from "next/link";
import MainLayout from "../layout/MainLayout";
import LazyLoad from "react-lazy-load";

const mongolia = () => {
  return (
    <MainLayout>
      <div
        className="top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden text-center relative bg-no-repeat bg-cover"
        style={{
          backgroundImage: 'url("/assets/img/mongolia1.jpg")',
          backgroundColor: "rgba(0, 0, 0, 0)",
          height: 450,
        }}
      >
        <div className="flex justify-center items-center h-full">
          <div>
            <h2 className="font-bold text-4xl font-sans text-white uppercase">
              モンゴルのプロジェクト
            </h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto bg-white max-w-6xl md:py-16">
        <h2 className="font-serif text-2xl text-gray-600 font-bold mt-8 md:ml-8 ml-3">
          Olonlog EXE IT学校（オロンログ・エグゼ）
        </h2>
        <div className="flex justify-center col-span-2 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="flex md:order-last md:ml-16 ">
              <img
                src="/assets/img/1659508110.jpg"
                loading="lazy"
                className="transition duration-300 ease-linear align-middle w-full h-72"
              />
            </div>
            <div className="w-full px-8">
              <p className="font-medium text-gray-500 text-lg max-w-xl text-justify mt-4">
                2010年からモンゴルの教育現場を支援し、総生徒数3,500人の校舎ビル建設プロジェクトを実行し、2018年にモンゴル初のITカリキュラムを小学生から教えるOlonlog
                EXE
                IT学校（オロンログ・エグゼ）を設立し現在運営をしています。小学校1年生から高校生まで500人近くの優秀な生徒が通い、デジタル時代のモンゴルのパワーになるために勤勉に勉強をしています。
                <br />
                <br />
                設立以来、IT、数学、英語の全国大会やウランバートル市の大会などで毎年数多くのメダルを獲得しており、教育機関からの全額奨学金を受け米国、カナダ、日本へ留学する生徒も輩出しています。本校の生徒たちは、モンゴルだけでなく、世界をリードする国際的にトップ・レベルのプロフェッショナルになれると信じています。
                <br />
                <br />
                Sanaa EXE LLC <br></br>
                EXE Plaza, Tumurchnii street 7/1, Chingeltei district,
                Ulaanbaatar 15171, Mongolia <br></br>
                Tel: (976) 11 325 552 / Fax: (976) 11 325 552 / E-mail:
                info@exeplaza.mn<br></br>
              </p>
              <Link href="/education">
                <a
                  className="inline-block px-7 py-4 my-4 bg-sky-500 text-white font-light text-sm leading-snug uppercase rounded hover:bg-sky-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  role="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  もっと詳しく知る
                </a>
              </Link>
            </div>
          </div>
        </div>

        <h2 className="font-serif text-2xl text-gray-600 font-bold mt-2 ml-5 md:ml-8">
          ターコイズ・ファイナンス
        </h2>
        <div className="flex justify-center col-span-2 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="flex md:order-last md:ml-16 ">
              <img
                src="/assets/img/1659582198.jpg"
                loading="lazy"
                className="transition duration-300 ease-linear align-middle w-full h-72"
              />
            </div>
            <div className="w-full px-8">
              <p className="font-medium text-gray-500 text-lg max-w-xl text-justify mt-4">
                株式会社エクセは、モンゴル最大手証券会社であるBDSec
                JSCの機関投資家大株主の一つであり、役員会に取締役も務めています。
                <br />
                <br />
                モンゴル金融庁の免許を受けた金融サービス会社である現地法人子会社であるターコイズ・ファイナンスを通じて、モンゴル証券取引所や店頭市場における株式・債券の引受を行うなど、BDSecと共にモンゴルの金融市場で事業を行っています。
                <br />
                <br />
                引受業務以外に、ターコイズ・ファイナンスは現地の事業法人に直接ローンを発行し、非銀行部門の金融市場のマーケット・メーカーとしての役割も果たしています。
              </p>
              <Link href="/education">
                <a
                  className="inline-block px-7 py-4 my-4 bg-sky-500 text-white font-light text-sm leading-snug uppercase rounded hover:bg-sky-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  role="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  もっと詳しく知る
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="flex justify-center pt-4 col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:mx-16">
            <div>
              <img
                src="/assets/img/1659582198.jpg"
                loading="lazy"
                className="transition duration-300 ease-linear align-middle w-full"
              />
            </div>
            <div className="w-full md:mx-16 px-8">
              <h2 className="font-serif text-3xl text-gray-800 font-bold mt-8 ">
              金融業界
              </h2>
              <p className="font-light mt-6 font-sans text-gray-800 max-w-xl text-justify ">
              株式会社エクセは、モンゴル最大手証券会社であるBDSec JSCの機関投資家大株主の一つであり、役員会に取締役も務めています。今までBDSecがモンゴル最大手の鉱山会社であるErdenes Tavan Tolgoi社の社債発行、最大手商業銀行であるKhan銀行のIPOといったモンゴル証券市場の主な大きな案件の主幹事会社を務めて来ました。その中でエグゼのモンゴル現地法人である金融サービス会社ターコイズ・ファイナンスがBDSecの引受業務の主なパートナーの一つです。<br/><br/>
              ターコイズ・ファイナンスがモンゴル金融庁の金融サービス免許を受けています。モンゴル証券取引所や店頭取引における株式や債券の引受業務など以外に現地の事業法人に直接ローンを発行し、非銀行部門の金融市場のマーケット・メーカーとしての役割も果たしています。
              </p>
              {/* <Link href="/finance">
                <a
                  className="inline-block px-7 py-4 my-4 bg-sky-500 text-white font-light text-sm leading-snug uppercase rounded hover:bg-sky-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  role="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  もっと詳しく知る
                </a>
              </Link> */}
        {/* </div>
          </div>
        </div> */}
      </div>
    </MainLayout>
  );
};

export default mongolia;
