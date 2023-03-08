import React from "react";
import MainLayout from "../layout/MainLayout";
import LazyLoad from "react-lazy-load";

const corporate = () => {
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
            <h2 className="font-bold text-4xl font-sans text-white uppercase">
              会社概要
            </h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col mx-auto max-w-6xl py-16">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden"></div>
            <table
              style={{
                borderCollapse: "collapse",
                width: "100%",
                height: "509.6px",
              }}
              width="100%"
            >
              <colgroup>
                <col style={{ width: "20%" }} />
                <col style={{ width: "49.9341%" }} />
              </colgroup>
              <tbody>
                <tr style={{ height: "19.6px" }}>
                  <th
                    className="text-md font-bold font-sans text-black px-6 py-4 bg-slate-200 leading-8"
                    style={{ height: "19.6px", textAlign: "left" }}
                  >
                    会社名
                  </th>
                  <td
                    className="text-md font-sans font-light text-black px-6 py-4 bg-slate-200 leading-8"
                    style={{ height: "19.6px" }}
                  >
                    株式会社エクセ（英文表記：EXE Corporation）
                  </td>
                </tr>
                <tr style={{ height: "58.8px" }}>
                  <th
                    className="text-md font-bold font-sans text-black px-6 py-4 leading-8"
                    style={{ height: "58.8px", textAlign: "left" }}
                  >
                    所在地
                  </th>
                  <td
                    className="text-md font-sans font-light text-black px-6 py-4 leading-8"
                    style={{ height: "58.8px" }}
                  >
                    <p>〒102-0083 東京都千代田区麹町1-10-5 澤田麹町ビル6階</p>
                    <p>
                      Tel: (81) 3 3288 2371 /&nbsp;
                      <a
                    href="mailto:mail@exegroup.co.jp"
                    className="hover:text-blue-500"
                  >
                    mail@exegroup.co.jp
                  </a>
                    </p>
                  </td>
                </tr>
                <tr style={{ height: "19.6px" }}>
                  <th
                    className="text-md font-bold font-sans text-black px-6 py-4 bg-slate-200 leading-8"
                    style={{ height: "19.6px", textAlign: "left" }}
                  >
                    設立
                  </th>
                  <td
                    className="text-md font-sans font-light text-black px-6 py-4  bg-slate-200 leading-8"
                    style={{ height: "19.6px" }}
                  >
                    1991年8月
                  </td>
                </tr>
                <tr style={{ height: "19.6px" }}>
                  <th
                    className="text-md font-bold font-sans text-black px-6 py-4 leading-8"
                    style={{ height: "19.6px", textAlign: "left" }}
                  >
                    資本金
                  </th>
                  <td
                    className="text-md font-sans font-light text-black px-6 py-4 leading-8"
                    style={{ height: "19.6px" }}
                  >
                    99,000,000円
                  </td>
                </tr>
                <tr style={{ height: "19.6px" }}>
                  <th
                    className="text-md font-bold font-sans text-black px-6 py-4 bg-slate-200 leading-8"
                    style={{ height: "19.6px", textAlign: "left" }}
                  >
                    事業理念
                  </th>
                  <td
                    className="text-md font-sans font-light text-black px-6 py-4  bg-slate-200 leading-8"
                    style={{ height: "19.6px" }}
                  >
                    「人」を大きく育てる・クリエイティブな事業をする
                  </td>
                </tr>
                <tr style={{ height: "19.6px" }}>
                  <th
                    className="text-md font-bold font-sans text-black px-6 py-4 leading-8"
                    style={{ height: "19.6px", textAlign: "left" }}
                  >
                    事業内容
                  </th>
                  <td
                    className="text-md font-sans font-light text-black px-6 py-4 leading-8"
                    style={{ height: "19.6px" }}
                  >
                    日本を含む、アジアを中心とする投資および事業
                  </td>
                </tr>
                <tr style={{ height: "39.2px" }}>
                  <th
                    className="text-md font-bold font-sans text-black px-6 py-4 bg-slate-200 leading-8"
                    style={{ height: "39.2px", textAlign: "left" }}
                  >
                    従業員
                  </th>
                  <td
                    className="text-md font-sans font-light text-black px-6 py-4  bg-slate-200 leading-8"
                    style={{ height: "39.2px" }}
                  >
                    約15人（本社）　約600人（グループ会社含む）
                  </td>
                </tr>
                <tr style={{ height: "117.6px" }}>
                  <th
                    className="text-md font-bold font-sans text-black px-6 py-4 leading-8"
                    style={{ height: "117.6px", textAlign: "left" }}
                  >
                    関連会社
                  </th>
                  <td
                    className="text-md font-sans font-light text-black px-6 py-4 leading-8"
                    style={{ height: "117.6px" }}
                  >
                    EXE Sakura Tower (ヤンゴン)：ヤンゴン・サクラタワーの経営
                    <br />
                    EXE Sakura Residence
                    (ヤンゴン)：ヤンゴン・サクラレジデンスの経営
                    <br />
                  Turquoise Finance (Ulaanbaatar)：Non-Bank Financial Institution
                  <br />
                  Olonlog EXE (Ulaanbaatar)：Olonlog EXE IT School&nbsp;
                  </td>
                </tr>
                <tr style={{ height: 196 }}>
                  <th
                    className="text-md font-bold font-sans text-black px-6 py-4 bg-slate-200 leading-8"
                    style={{ height: 196, textAlign: "left" }}
                  >
                    海外事務所
                  </th>
                  <td
                    className="text-md font-sans font-light text-black px-6 py-4  bg-slate-200 leading-8"
                    style={{ height: 196 }}
                  >
                    <strong>ヤンゴン・オフィス（ミャンマー）</strong>
                    <address>
                      #0505 Sakura Tower, 339 Bogyoke Aung San Road, <br />
                      Kyauktada Township, Yangon, Myanmar <br />
                      Tel: (951) 255 255 / Fax: (951) 255 258 / E-mail:
                      stowersales@myanmar.com.mm
                    </address>
                    <strong>
                      ウランバートル・オフィス～サナ・エクセ内～（モンゴル）
                    </strong>
                    <address>
                      EXE Plaza, Tumurchnii Sreet 7/1, Chingeltei District,
                      <br />
                      Ulaanbaatar 15171 Mongolia
                      <br />
                      Tel: (976) 99182674 / E-mail: &nbsp; 
                      <a
                    href="mailto:tf@exe.mn"
                    className="hover:text-blue-500"
                  >
                    tf@exe.mn
                  </a>
                    </address>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default corporate;
