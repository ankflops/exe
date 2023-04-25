import React from "react";
import ImageGallery from "react-image-gallery";


import MainLayout from "../layout/MainLayout";


const images = [
  {
    original: "/assets/img/slider1.jpg",
    thumbnail: "/assets/img/slider1.jpg",
  },
  {
    original: "/assets/img/27.JPG のコピー.jpg",
    thumbnail: "/assets/img/27.JPG のコピー.jpg",
  },
  {
    original: "/assets/img/22.JPG のコピー.jpg",
    thumbnail: "/assets/img/22.JPG のコピー.jpg",
  },
  {
    original: "/assets/img/21.jpg",
    thumbnail: "/assets/img/21.jpg",
  },
  {
    original: "/assets/img/25.JPG のコピー.jpg",
    thumbnail: "/assets/img/25.JPG のコピー.jpg",
  },
];

const Overseasprojects1 = () => {
  return (
    <MainLayout>
      <div
        className="top-0 right-0 bottom-0 left-0 w-full h-full text-center relative overflow-hidden bg-no-repeat"
        style={{
          backgroundImage: 'url("/assets/img/yangon.jpg")',
          backgroundColor: "rgba(0, 0, 0, 0)",
          height: 450,
        }}
      >
        <div className="flex justify-center items-center h-full">
          <div>
            <h2 className="font-bold text-5xl font-sans text-white uppercase">
              ミャンマープロジェクト
            </h2>
          </div>
        </div>
      </div>

      <div className="p-8">
        <h1 className="font-bold text-2xl text-gray-700">サクラタワー</h1>
        <div className="flex">
          <div className="flex text-justify">
            <p className=" basis-128 text-lg font-medium w-auto lg:h-[563px] ml-10 mr-6 mt-4 text-gray-600 max-w-2 xl ">
              サクラタワーは（株）日本設計、（株）鴻池組と、日本企業の手で1999年に完成しました。ヤンゴンのビジネス及び政治のまさに中心地区に位置し、総貸室面積12,425㎡、高さは地上約100mの20階建て耐震設計オフィスビルです。
              <br></br>
              <br></br>
              地上1階～3階は総貸室面積1,183㎡の小売業エリアと
              なっており、主要航空会社のチケットオフィスや旅行代理店、歯医者、ショールームなどが入居しています
              <br></br>
              <br></br>
              5階から19階にはJICA、三菱商事、日経、NHK等、グローバルに活躍する企業や団体が入居しています。
              <br></br>
              <br></br>
              Address: 339 Bogyoke Aung San Road, Kyauktada Township, Yangon,
              Myanmar<br></br>
              Tel: (95 1) 255 255<br></br>
              E-mail: stowersales@myanmar.com.mm<br></br> Website:
              http://www.sakura-tower-yangon.com
            </p>
          </div>

          {/* slider */}
          <ImageGallery items={images} />
        </div>
      </div>
      <div className="p-10">
        <div class="text-3xl font-bold box-content h-128 lg:h-64 w-auto p-10 border-0 bg-[#f6fafd] m-7">
          設備
          <div className="block sm:flex">
            <div className="font-normal text-base mt-8 sm:ml-5 block">
              - 24時間フルバックアップの自家発電システム<br></br>-
              24時間体制の監視カメラと警備員による24時間保守警備<br></br>-
              OA機器用床下配線<br></br>- 高い国際基準に合わせて設計された耐震性
              <br></br>- 火災報知機、スプリンクラー、避難口を各階に設置<br></br>
              - 専用インターネットアクセス
            </div>
            <div className="font-normal text-base mt-10 sm:ml-20 md:ml-64 block">
              - 4基のハイスピードエレベーター（日立製、三菱電機製）<br></br>-
              貨物専用エレベーター<br></br>-
              44台収容可能な機械式パーキングシステム<br></br>- IDD電話
              <br></br>- 衛星テレビ、ケーブルテレビ<br></br>- 電話回線：400回線
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Overseasprojects1;
