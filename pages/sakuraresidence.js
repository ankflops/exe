import React from "react";
import MainLayout from "../layout/MainLayout";
import Link from "next/link";
import LazyLoad from "react-lazy-load";

const sakuraresidence = () => {
  return (
    <MainLayout>
      <div
        className="top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden text-center relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundImage: 'url("/assets/img/mv-sm.jpg")',
          backgroundColor: "rgba(0, 0, 0, 0)",
          height: 450,
        }}
      >
        <div className="flex justify-center items-center h-full">
          <div>
            {" "}
            <h2 className="font-bold text-3xl font-sans text-white uppercase">
              {" "}
              Sakura Residence{" "}
            </h2>
            <Link href="http://www.sakura-residence-yangon.com/">
              <a className="hover:font-bold text-white mx-auto" target="_blank">
                http://www.sakura-residence-yangon.com/
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto bg-white max-w-6xl py-16">
        <div className="flex justify-center pt-4 col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:mx-16">
            <div>
              {" "}
              <img
                src="/assets/img/md_1657618555.jpg"
                loading="lazy"
                className="transition duration-300 ease-linear align-middle w-full"
              />{" "}
            </div>
            <div className="w-full md:mx-16">
              <h2 className="font-serif text-3xl text-gray-800 font-bold ">
                {" "}
                サクラレジデンス（ヤンゴン）{" "}
              </h2>
              <p className="font-light mt-6 font-sans text-gray-800 max-w-xl ">
                サクラレジデンスは、1998年にヤンゴンで最初に作られた海外駐在員向けの世界水準のサービスを備えた高級サービスアパートメントであり、1泊からもご利用いただける高級ホテルでもあります。閑静な住宅地やインヤ通りのヤシ並木に程近い場所に位置し、ヤンゴン国際空港やビジネス街からほんの数分という好立地にあります。
                <br />
                <br />
                レジデンス内からは、黄金に輝くシュエダゴンパゴダの素晴らしい景色をご覧頂けます。
                <br />
                <br />
                サクラレジデンスは、お客様が訪れた瞬間から「我が家」と呼ぶに相応しい、ワンルームから広々とした3ベッドルームまでの261室の家具付きのお部屋、広く開放的な庭園やプール、美味しい料理をいつでも味わうことのできるレストラン「カフェ・ティリピセヤ」等、リラックスして快適にお過ごしいただける各種サービスをご用意しています。
              </p>

              <div className="flex space-x-2 justify-start my-4">
                <div>
                  {/* Button trigger modal */}
                  <Link href="/sakuraresidence">
                    <a>
                      {" "}
                      <button
                        type="button"
                        className="inline-block px-6 py-2 border-2 border-gray-400 text-gray-800 font-light text-md leading-tight hover:text-blue-500 hover:border-blue-400 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out
active:bg-white active:shadow-lg transition duration-150 ease-in-out"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        設備
                      </button>
                    </a>
                  </Link>

                  {/* Modal */}
                  <div
                    className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog relative w-auto pointer-events-none">
                      <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                          <h5
                            className="text-xl font-medium leading-normal text-gray-800"
                            id="exampleModalLabel"
                          >
                            設備
                          </h5>
                          <button
                            type="button"
                            className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />{" "}
                        </div>
                        <div className="modal-body relative p-4 font-sans font-light">
                          <ul>
                            <li>- 24時間フルバックアップの自家発電システム</li>
                            <li>
                              -
                              24時間体制の監視カメラと警備員による24時間保守警備
                            </li>
                            <li>- OA機器用床下配線</li>
                            <li>- 高い国際基準に合わせて設計された耐震性</li>
                            <li>
                              - 火災報知機、スプリンクラー、避難口を各階に設置
                            </li>
                            <li>- ブロードバンドインターネットアクセス</li>
                            <li>
                              -
                              4基のハイスピードエレベーター（日立製、三菱電機製）
                            </li>
                            <li>- 貨物専用エレベーター</li>
                            <li>- 44台収容可能な機械式パーキングシステム</li>
                            <li>- IDD電話</li>
                            <li>- 衛星テレビ、ケーブルテレビ</li>
                            <li>- 電話回線：400回線</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* fdfdf */}
                {/* <div>
                
                  <Link href="/sakuraresidence">
                    <a>
                      {" "}
                      <button
                        type="button"
                        className="inline-block px-6 py-2 border-2 border-gray-400 text-gray-800 font-light text-md leading-tight hover:text-blue-500 hover:border-blue-400 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out
active:bg-white active:shadow-lg transition duration-150 ease-in-out"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        調度品
                      </button>
                    </a>
                  </Link>

               
                  <div
                    className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog relative w-auto pointer-events-none">
                      <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                          <h5
                            className="text-xl font-medium leading-normal text-gray-800"
                            id="exampleModalLabel"
                          >
                            調度品
                          </h5>
                          <button
                            type="button"
                            className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />{" "}
                        </div>
                        <div className="modal-body relative p-4">
                          {" "}
                          Furnishings Modal body text goes here.{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}

              
              </div>
            </div>
            {/* sakura residence address */}
            <div className="font-sans font-light m-4">
              <p>
                <strong> Address: </strong> 9 Inya Road, Block 10, Kamaryut
                Township, Yangon, Myanmar <br />
                <strong> Tel: </strong> (95 1) 525 001 <br />
                <strong> E-mail:</strong>
                <br />{" "}
                <a
                  href="mailto:sales@sakuraresidence.com.mm"
                  className="hover:text-blue-500"
                >
                  sales@sakuraresidence.com.mm
                </a>
                &emsp;
                <a
                  href="mailto:rsvn@sakuraresidence.com.mm"
                  className="hover:text-blue-500"
                >
                  {" "}
                  rsvn@sakuraresidence.com.mm
                </a>{" "}
                <br />{" "}
              </p>
              <br />

              {/* <div>
                <p className="font-bold uppercase text-sm">
                  <Link href="http://www.sakura-residence-yangon.com/">
                    <a className="hover:text-sky-400" target="_blank">
                      WEB SITE
                    </a>
                  </Link>
                  &emsp;&emsp;
                  <Link href="https://www.facebook.com/sakura.residence.yangon/">
                    <a className="hover:text-sky-400" target="_blank">
                      FACEBOOK
                    </a>
                  </Link>
                </p>
              </div> */}
            </div>

            <div></div>

            {/* sakura residence address end*/}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default sakuraresidence;
