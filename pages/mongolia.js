import React from "react";
import Link from "next/link";
import MainLayout from "../layout/MainLayout";
import ImageGallery from "react-image-gallery";
import LazyLoad from "react-lazy-load";
const images = [
  {
    original: "../assets/img/slider1.jpg",
    thumbnail: "../assets/img/slider1.jpg",
  },
  {
    original: "../assets/img/27.jpg",
    thumbnail: "../assets/img/27.jpg",
  },
  {
    original: "../assets/img/22.jpg",
    thumbnail: "../assets/img/22.jpg",
  },
  {
    original: "../assets/img/21.jpg",
    thumbnail: "../assets/img/21.jpg",
  },
  {
    original: "../assets/img/25.jpg",
    thumbnail: "../assets/img/25.jpg",
  },
  {
    original: "../assets/img/25.jpg",
    thumbnail: "../assets/img/25.jpg",
  },
];

const mongolia = () => {
  return (
    <MainLayout>
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat h-[16rem] md:h-[20rem] lg:h-[28rem]"
        style={{
          backgroundPosition: "50%",
          backgroundImage: 'url("/assets/img/mongolia1.jpg")',
        }}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
        >
          <div className="flex h-full items-center justify-center text-center text-white">
            <h1 className="mb-6 text-2xl md:text-4xl font-bold">
              モンゴルのプロジェクト
            </h1>
          </div>
        </div>
      </div>
      <div className="px-4">
        <h1 className="font-bold text-2xl text-gray-700 mt-8 text-center md:text-left">
          Olonlog EXE IT学校（オロンログ・エグゼ）{" "}
        </h1>
        <div className="lg:flex block">
          <div className="flex text-justify">
            <p className="text-lg font-medium w-auto lg:h-auto md:p-5 pb-8 text-gray-500 max-w-4xl p-4">
              2010年からモンゴルの教育現場を支援し、総生徒数3,500人の校舎ビル建設プロジェクトを実行し、2018年にモンゴル初のITカリキュラムを小学生から教えるOlonlog
              EXE
              IT学校（オロンログ・エグゼ）を設立し現在運営をしています。小学校1年生から高校生まで500人近くの優秀な生徒が通い、デジタル時代のモンゴルのパワーになるために勤勉に勉強をしています。
              <br></br>
              <br></br>
              設立以来、IT、数学、英語の全国大会やウランバートル市の大会などで毎年数多くのメダルを獲得しており、教育機関からの全額奨学金を受け米国、カナダ、日本へ留学する生徒も輩出しています。本校の生徒たちは、モンゴルだけでなく、世界をリードする国際的にトップ・レベルのプロフェッショナルになれると信じています。
              <br></br>
              <br></br>
              Sanaa EXE LLC <br></br>
              <br></br>
              EXE Plaza, Tumurchnii street 7/1, Chingeltei district, Ulaanbaatar
              15171, Mongolia Myanmar<br></br>
              Tel: (976) 11 325 552 / Fax: (976) 11 325 552 / E-mail:
              info@exeplaza.mn<br></br>
            </p>
          </div>

          {/* slider */}
          <div className="m-4">
            <ImageGallery items={images} />
          </div>
        </div>
      </div>
      <div className="font-bold text-lg md:text-3xl px-4 md:px-8 mt-8 text-gray-700 text-center md:text-left">
        ターコイズ・ファイナンス
      </div>
      <div className="flex justify-center mb-10 pl-4">
        <div className="grid md:grid-cols-2">
          <div className="md:p-8 p-4 text-justify">
            <p className="text-xl font-medium text-gray-500">
              株式会社エクセは、モンゴル最大手証券会社であるBDSec
              JSCの機関投資家大株主の一つであり、役員会に取締役も務めています。
            </p>
            <p className="my-8 text-xl font-medium text-gray-500">
              モンゴル金融庁の免許を受けた金融サービス会社である現地法人子会社であるターコイズ・ファイナンスを通じて、モンゴル証券取引所や店頭市場における株式・債券の引受を行うなど、BDSecと共にモンゴルの金融市場で事業を行っています。
            </p>
            <p className="my-8 text-xl font-medium text-gray-500">
              引受業務以外に、ターコイズ・ファイナンスは現地の事業法人に直接ローンを発行し、非銀行部門の金融市場のマーケット・メーカーとしての役割も果たしています。
            </p>
            <div className="flex justify-center lg:justify-start"></div>
          </div>
          <div className="md:p-10">
            <img
              src="/assets/img/1659582198.jpg"
              loading="lazy"
              className="w-100% h-auto align-middle mx-auto bg-center bg-cover"
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default mongolia;
