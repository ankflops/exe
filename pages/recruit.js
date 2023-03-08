import React from "react";
import MainLayout from "../layout/MainLayout";
import LazyLoad from "react-lazy-load";

const recruit = () => {
  return (
    <div>
      <MainLayout>
        <div
          className="top-0 right-0 bottom-0 left-0 w-full h-full text-center relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundImage: 'url("/assets/img/mv-sm.jpg")',
            backgroundColor: "rgba(0, 0, 0, 0)",
            height: 450,
          }}
        >
          <div className="">
            <div className="flex justify-center items-center h-full ">
              <h2 className="font-bold text-4xl font-sans text-white uppercase mt-52 mb-28">
                リクルート
              </h2>
            </div>
            <div className="grid lg:block">
              <p className="font-extrabold text-white text-left text-3xl ml-8">
                変化こそチャンスである。
              </p>
              <p className=" font-extrabold text-white text-left text-3xl ml-20">
                人と同じではなく自分なりの価値観を信じよう。
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto text-center font-sans">
          <p className="mx-auto text-center text-lg text-gray-500 font-sans mt-12 ml-16 mr-16">
            当社が常に掲げてきた信念は、「変化こそチャンスである」ということです。時代の変化にたじろぐことなく、不安定化をむしろビジネスチャンスと捉えていくのが当社のスピリットです。
          </p>
          <p className="mt-8 text-lg text-gray-500 gont-sans ml-16 mr-16">
            投資に関する信念は、「人」に対する信念にもつながります。
            <br></br>{" "}
            当社は人材への投資こそ最高の投資であると考えて、「自ら変化を求める人材」、「人と同じではなく自分なりの価値観を持っている人材」を常に求めております。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <img
            src="/assets/img/youtube.png"
            alt=""
            className="mt-16 lg:ml-80"
            loading="lazy"
          />
        </div>

        {/* table */}
        <div>
          <div className="md:mt-20 md:mr-20 md:ml-20 border-2 border-darkblue bg-darkblue h-14">
            <p className=" text-center text-lg font-medium text-gray-400 mt-3">
              求人票
            </p>
          </div>
          <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-t-darkblue border-r-darkblue border-l-darkblue">
            <div className="text-center font-medium m-3">採用職種</div>
            <div className="p-2 col-span-2"> 総合職</div>
          </div>
          <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-t-darkblue border-r-darkblue border-l-darkblue">
            <div className="text-center font-medium mt-48 md:mt-28">
              採用職種詳細
            </div>
            <div className="p-2 col-span-2">
              ■プロジェクトマネジメント業務 <br></br>
              ミャンマーにて所有するオフィスビル、サービスアパートメント、ホテル、レストランに関わる業務全般を担当いただきます。
              <br></br>
              ※セールス、エンジニアリング、アカウンティング、人事・総務関連など
              <br></br>
              ■サクラタワー <br></br>
              ヤンゴンのランドマークタワー <br></br>
              多くの日本企業がオフィスを構え、最上階に位置する屋上のバー「ヤンゴンヤンゴン」はミャンマーにおけるエンターテイメントの発信地となっている。
              <br></br>
              ■サクラレジデンス <br></br>
              ヤンゴン最大の規模を誇る長期滞在者向けのアパートメント
            </div>
          </div>
          <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-t-darkblue border-r-darkblue border-l-darkblue">
            <div className="text-center font-medium m-3">雇用形態</div>
            <div className="p-2 col-span-2">正社員</div>
          </div>
          <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-t-darkblue border-r-darkblue border-l-darkblue">
            <div className="text-center font-medium mt-8 md:m-6">
              エントリー/採用方法
            </div>
            <div className="p-2 col-span-2">
              書類審査・面接試験・英語試験 <br></br>
              1週間のヤンゴンでのインターンシップ研修により最終判断
            </div>
          </div>
          <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-t-darkblue border-r-darkblue border-l-darkblue">
            <div className="text-center font-medium mt-10 md:m-6">
              選考方法・重視点
            </div>
            <div className="p-2 col-span-2">
              アジアに興味ある方。アジアが大好きな方。<br></br>
              度胸と愛嬌のある方。ミャンマー語に興味ある方歓迎。
            </div>
          </div>
          <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-t-darkblue border-r-darkblue border-l-darkblue">
            <div className="text-center font-medium m-3">
              提出書類・その他選考
            </div>
            <div className="p-2 col-span-2">
              履歴書　※中途の方は職務経歴書もご提出ください。
            </div>
          </div>
          <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-t-darkblue border-r-darkblue border-l-darkblue">
            <div className="text-center font-medium m-6 md:m-3">想定年収</div>
            <div className="p-2 col-span-2">
              年収：280万~500万　※詳細は初回面接時にご説明します。
            </div>
          </div>
          <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-t-darkblue border-r-darkblue border-l-darkblue">
            <div className="text-center font-medium m-3">
              昇給・賞与・諸手当
            </div>
            <div className="p-2 col-span-2">昇給あり、賞与あり</div>
          </div>
          <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-t-darkblue border-r-darkblue border-l-darkblue">
            <div className="text-center font-medium m-3">勤務地</div>
            <div className="p-2 col-span-2">ミャンマー（ヤンゴン）</div>
          </div>
          <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-t-darkblue border-r-darkblue border-l-darkblue">
            <div className="text-center font-medium mt-7 md:m-3">勤務時間</div>
            <div className="p-2 col-span-2">
              サクラタワー8:30~17:30　ホテル・レジデンス・レストラン・バー5:30~23:00（シフト制）
            </div>
          </div>
          <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-t-darkblue border-r-darkblue border-l-darkblue">
            <div className="text-center font-medium mt-6 md:m-3">福利厚生</div>
            <div className="p-2 col-span-2">
              勤務年数報酬制度あり、社宅あり、送迎あり、食事手当
            </div>
          </div>
          <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-t-darkblue border-r-darkblue border-l-darkblue">
            <div className="text-center font-medium m-3">社会保険</div>
            <div className="p-2 col-span-2">加入</div>
          </div>
          <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-t-darkblue border-r-darkblue border-l-darkblue">
            <div className="text-center font-medium mt-8 md:m-7">休日休暇</div>
            <div className="col-span-2 p-2">
              月4～8日（シフト制含む） <br></br>
              ※担当業務やイベント時期により変動、ミャンマー暦に準ずる
            </div>
          </div>
          <div className="divide-darkblue grid grid-cols-3 divide-x md:mb-20 md:mr-20 md:ml-20 border-2 border-t-darkblue border-r-darkblue border-l-darkblue">
            <div className="text-center font-medium m-3">教育研修</div>
            <div className="p-2 col-span-2">必要に応じ支援制度あり</div>
          </div>
        </div>

        <div>
          <div>
            <h2 className="font-bold text-2xl text-gray-600 text-center mt-5">
              採用担当からのメッセージ
            </h2>
            <img
              src="/assets/img/border.png"
              alt=""
              className="mx-auto max-w-2xl max-h-full"
              loading="lazy
              "
            />
          </div>
          <div className="md:flex grid grid-cols-1 md:grid-cols-2">
            <img
              src="/assets/img/img3.png"
              alt=""
              className="ml-28 m-5 md:ml-20 h-[294px] w-[279px] sm:mx-auto"
              loading="lazy
              "
            />
            <div className="grid">
              <h3 className="m-5 font-bold text-gray-600">
                中塚翔大（Shota Nakatsuka）　Recruiter
              </h3>
              <div className="mt-10">
                <p className="-mt-10 lg:-mt-44 m-5 md:mr-28 text-gray-500">
                  日本人事としてインターン生、新卒・中途採用を担当しています。大学卒業後、外資系大手人材会社にて10年在籍し
                  現在は株式会社エクセの人事を担当。「変化こそチャンスである」は、創業当初からの弊社の信念となります。
                  自分なりの価値の確立を目指し、未来を切り開こうとする姿勢を全力で応援しています。興味のある方はお気軽にお問い合わせください！！
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <h2 className="font-bold text-2xl text-gray-600 text-center m-1 mb-5">
                よくある質問
              </h2>
              <div className="grid justify-center">
                <div className="relative" data-te-dropdown-ref>
                  <button
                    className="flex items-center px-6 text-3xl underline font-medium uppercase leading-normal text-gray-600 -mt-0.5 mb-5"
                    type="button"
                    id="dropdownMenuButton1"
                    data-te-dropdown-toggle-ref
                    aria-expanded="false"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Q.ミャンマーってどんな国ですか？
                  </button>
                  <ul
                    className="absolute z-[500] hidden overflow-hidden rounded-lg bg-clip-padding [&[data-te-dropdown-show]]:block"
                    aria-labelledby="dropdownMenuButton1"
                    data-te-dropdown-menu-ref
                  >
                    <li>
                      <div
                        className="block whitespace-nowrap bg-green-400 p-2 bg-green"
                        data-te-dropdown-item-ref
                      >
                        『アジア最後のフロンティア』と呼ばれるミャンマー。
                        <br></br>人口は5380万人、135の民族による多民族国
                        家であり、<br></br>
                        イギリスの旧植民地でビルマ語と英語を利用します。
                        <br></br>国民の約9割が仏教徒で街中には仏塔
                        （パゴダ）が並びます。<br></br>
                        素朴で穏やかな優しい人が多く、<br></br>
                        気質は日本人に似ているとも言われます。
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="relative" data-te-dropdown-ref>
                  <button
                    className="flex items-center px-6 text-3xl underline font-medium uppercase leading-normal text-gray-600 -mt-0.5 mb-5"
                    type="button"
                    id="dropdownMenuButton1"
                    data-te-dropdown-toggle-ref
                    aria-expanded="false"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Q.英語はどれくらい利用しますか？
                  </button>
                  <ul
                    className="absolute z-[500] hidden overflow-hidden rounded-lg bg-clip-padding [&[data-te-dropdown-show]]:block"
                    aria-labelledby="dropdownMenuButton1"
                    data-te-dropdown-menu-ref
                  >
                    <li>
                      <div
                        className="block whitespace-nowrap bg-green-400 p-2 bg-green"
                        data-te-dropdown-item-ref
                      >
                        英語は海外駐在員やローカルスタッフとの接客
                        <br></br>
                        やコミュニケーションで利用します。
                        <br></br>ローカルスタッ
                        フとはビルマ語を話す機会もあります。
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="relative" data-te-dropdown-ref>
                  <button
                    className="flex items-center px-6 text-3xl underline font-medium uppercase leading-normal text-gray-600 -mt-0.5 mb-5"
                    type="button"
                    id="dropdownMenuButton1"
                    data-te-dropdown-toggle-ref
                    aria-expanded="false"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Q. TOEICなど応募条件はありますか？
                  </button>
                  <ul
                    className="absolute z-[500] hidden overflow-hidden rounded-lg bg-clip-padding [&[data-te-dropdown-show]]:block"
                    aria-labelledby="dropdownMenuButton1"
                    data-te-dropdown-menu-ref
                  >
                    <li>
                      <div
                        className="block whitespace-nowrap bg-green-400 p-2 bg-green"
                        data-te-dropdown-item-ref
                      >
                        3ヶ月以内の短期留学の場合、目安としてTOEIC800
                        <br></br>
                        点程度の英語力があると幅広い業務への挑戦機会
                        <br></br>
                        が提供できると考えています。<br></br>
                        6カ月など長期留学の場合はインターン当初<br></br>
                        の英語力は求めませんが、
                        <br></br>
                        TOEIC600点はあることが望ましいです。
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="relative" data-te-dropdown-ref>
                  <button
                    className="flex items-center px-6 text-3xl underline font-medium uppercase leading-normal text-gray-600 -mt-0.5 mb-5"
                    type="button"
                    id="dropdownMenuButton1"
                    data-te-dropdown-toggle-ref
                    aria-expanded="false"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Q.治安や衛生面に心配はないのでしょうか？
                  </button>
                  <ul
                    className="absolute z-[500] hidden overflow-hidden rounded-lg bg-clip-padding [&[data-te-dropdown-show]]:block"
                    aria-labelledby="dropdownMenuButton1"
                    data-te-dropdown-menu-ref
                  >
                    <li>
                      <div
                        className="block whitespace-nowrap bg-green-400 p-2 bg-green"
                        data-te-dropdown-item-ref
                      >
                        2021年以降の軍事政権下で治安が心配されていますが、
                        <br></br>
                        駐在員のルールを守り活動いただければ問題なく、
                        <br></br>
                        過去40名以上のインターン受け入れにおいてトラブル・事故
                        <br></br>
                        が発生したことはございません。<br></br>
                        衛生面においては外出時の飲食では注意が必<br></br>
                        要ですので駐在員の指示に従っていただきます。
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="relative" data-te-dropdown-ref>
                  <button
                    className="flex items-center px-6 text-3xl underline font-medium uppercase leading-normal text-gray-600 -mt-0.5 mb-5"
                    type="button"
                    id="dropdownMenuButton1"
                    data-te-dropdown-toggle-ref
                    aria-expanded="false"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Q.駐在先はどちらになるのでしょうか？
                  </button>
                  <ul
                    className="absolute z-[500] hidden overflow-hidden rounded-lg bg-clip-padding [&[data-te-dropdown-show]]:block"
                    aria-labelledby="dropdownMenuButton1"
                    data-te-dropdown-menu-ref
                  >
                    <li>
                      <div
                        className="block whitespace-nowrap bg-green-400 p-2 bg-green"
                        data-te-dropdown-item-ref
                      >
                        エクセが所有するサクラレジデンスに駐在いただきます。
                        <br></br>日本人駐在員も常駐しておりますので、
                        <br></br>
                        困りごとがあればすぐに対応できる体制となっております。
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="relative" data-te-dropdown-ref>
                  <button
                    className="flex items-center px-6 text-3xl underline font-medium uppercase leading-normal text-gray-600 -mt-0.5 mb-5"
                    type="button"
                    id="dropdownMenuButton1"
                    data-te-dropdown-toggle-ref
                    aria-expanded="false"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Q.インターン参加は必須でしょうか？
                  </button>
                  <ul
                    className="absolute z-[500] hidden overflow-hidden rounded-lg bg-clip-padding [&[data-te-dropdown-show]]:block"
                    aria-labelledby="dropdownMenuButton1"
                    data-te-dropdown-menu-ref
                  >
                    <li>
                      <div
                        className="block whitespace-nowrap bg-green-400 p-2 bg-green"
                        data-te-dropdown-item-ref
                      >
                        旅行と異なり、ミャンマー現地に駐在する場合、
                        <br></br>
                        生活習慣や文化、慣習などへの適用が大切です。
                        <br></br>インターン参加は必須ではありませんが、
                        <br></br>
                        インターンに参加した後に本採用エン<br></br>
                        トリーをすることをオススメしております。
                      </div>
                    </li>
                  </ul>
                </div>

                <p className="mt-6 text-gray-500 font-normal text-base md:text-xl ml-2">
                  ※ 応募書類は返却いたしません。
                </p>
                <p className="text-gray-500 font-normal text-base md:text-xl ml-2">
                  ※ ご不明な点がございましたら、お問い合わせください。
                </p>
              </div>
              <div className="items-center text-center">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSddgYtieThncUj6lXwjolR6aRRCVLUjdG63GqD7Teo7uwjXvA/viewform?usp=send_form">
                  <button
                    className="inline-block px-20 py-5 m-10 bg-blue-600 text-white font-extrabold text-2xl rounded-lg leading-snug uppercase focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    role="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    応募する
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default recruit;
