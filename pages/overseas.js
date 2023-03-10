import React from "react";
import ImageGallery from "react-image-gallery";

import Projects from "../components/Projects";
import MainLayout from "../layout/MainLayout";
import Link from "next/link";
import LazyLoad from "react-lazy-load";

const images = [
  {
    original: "/assets/img/slider1.jpg",
    thumbnail: "/assets/img/slider1.jpg",
  },
  {
    original: "/assets/img/27.jpg のコピー.jpg",
    thumbnail: "/assets/img/27.jpg のコピー.jpg",
  },
  {
    original: "/assets/img/22.jpg のコピー.jpg",
    thumbnail: "/assets/img/22.jpg のコピー.jpg",
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

const overseas = () => {
  return (
    <MainLayout>
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat h-[16rem] md:h-[20rem] lg:h-[28rem]"
        style={{
          backgroundPosition: "50%",
          backgroundImage: 'url("/assets/img/yangon.jpg")',
        }}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
        >
          <div className="flex h-full items-center justify-center text-center text-white">
            <h1 className="mb-6 text-2xl md:text-4xl font-bold">
              全てのマーケットには
            </h1>
          </div>
        </div>
      </div>
      <div className="p-8">
        <h1 className="font-bold text-2xl text-gray-700">サクラタワー</h1>
        <div className="lg:flex block">
          <div className="flex text-justify">
            <p className="basis-128 text-lg font-medium w-auto lg:h-[563px] ml-10 mr-5 mt-4 text-gray-600 max-w-4xl ">
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
              <a href="http://www.sakura-tower-yangon.com">
                http://www.sakura-tower-yangon.com
              </a>
            </p>
          </div>

          {/* slider */}
          <ImageGallery items={images} />
        </div>
      </div>
      <div className="p-0 md:p-8 xl:p-12 -mt-10">
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
      <div className="p-8">
        <h1 className="font-bold text-2xl text-gray-700">サクラレジデンス</h1>
        <div className="lg:flex block">
          <div className="flex text-justify">
            <p className="basis-128 text-lg font-medium w-auto lg:h-[563px] ml-10 mr-5 mt-4 text-gray-600 max-w-4xl ">
              サクラレジデンスは、1998年にヤンゴンで最初に作られた海外駐在員向けの世界水準のサービスを備えた高級サービスアパートメントであり、1泊からもご利用いただける高級ホテルでもあります。閑静な住宅地やインヤ通りのヤシ並木に程近い場所に位置し、ヤンゴン国際空港やビジネス街からほんの数分という好立地にあります。
              <br></br>
              <br></br>
              レジデンス内からは、黄金に輝くシュエダゴンパゴダの素晴らしい景色をご覧頂けます。
              <br></br>
              <br></br>
              サクラレジデンスは、お客様が訪れた瞬間から「我が家」と呼ぶに相応しい、ワンルームから広々とした3ベッドルームまでの261室の家具付きのお部屋、広く開放的な庭園やプール、美味しい料理をいつでも味わうことのできるレストラン「カフェ・ティリピセヤ」等、リラックスして快適にお過ごしいただける各種サービスをご用意しています。
              <br></br>
              <br></br>
              Address: 9 Inya Road, Block 10, Kamaryut Township, Yangon, Myanmar
              <br></br>
              Tel: (95 1) 525 001<br></br>E-mail:rsvn@sakuraresidence.com.mm,
              sales@sakuraresidence.com.mm
              <br></br>Website:
              <a href="http://www.sakura-residence-yangon.com/">
                http://www.sakura-residence-yangon.com/
              </a>
            </p>
          </div>

          {/* slider */}
          <ImageGallery items={images} />
        </div>
      </div>
      <div className="p-0 md:p-8 xl:p-12 mt-10">
        <div class="text-3xl font-bold box-content h-144 lg:h-96 w-auto p-10 border-0 bg-[#f6fafd] m-7">
          設備
          <div className="block sm:flex">
            <div className="font-normal text-base mt-8 sm:ml-5 block">
              24時間体制のセキュリティとメンテナンス<br></br>- -
              コンシェルジュサービス<br></br>- 毎日のハウスキーピングサービス
              <br></br>- スイミングプール、フィットネスセンター
              <br></br>- レストラン、バー、バーベキューテラス<br></br>-
              キッズルーム<br></br>- ルームサービス<br></br>- 小会議室<br></br>-
              ビジネスセンター<br></br>
              （各部屋からのインターネットアクセスも可能　※要契約）<br></br>-
              屋根付き駐車場完備<br></br>- 車での送迎サービス<br></br>-
              コンビニエンスストア
            </div>
            <div className="font-bold text-3xl m-7">
              <div className="font-normal text-base mt-10 sm:ml-20 md:ml-64 block">
                - 個別操作可能な空調設備<br></br>- IDD電話<br></br>-
                専用インターネットアクセス<br></br>- 多チャンネル衛星放送
                <br></br>- 金庫<br></br>- 4口調理台、電動湯沸かし器<br></br>-
                各種家電（洗濯乾燥機、冷凍冷蔵庫、炊飯器、オーブ<br></br>
                ン機能付き電子レンジ、トースター、電気ポット、コー<br></br>
                ヒーメーカー、アイロン、ヘア･ドライヤー、ビデオ、小型ステレオ）
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
export default overseas;
