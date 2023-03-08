import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faSearch,
//   faAmbulance,
//   faAnchor,
// } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="bg-darkblue font-bold">
      <div className="sticky active:border-[3px] active:border-r-0 border-cyan-600 active:rounded my-[3px] hover:bg-rose-800 duration-150">
        <Link href="/contact"> 問い合わせ </Link>
      </div>
      <div className="bg-darkblue grid gap-1 grid-cols md:grid-cols-4 bg-neutral-800 w-full p-4 md:p-12">
        <div className="max-w-lg pl-4 mt-4 md:p-4 md:ml-">
          <h2 className="ml-4 underline text-white text-md mb-8">
            お問い合わせ
          </h2>

          <ul className="col-span-2 text-gray-300 font-light pl-4 list-none w-full">
            <div className="flex">
              <li className="font-bold">
                〒102-0083 東京都千代田区麹町1-10-5 澤田麹町ビル6階
              </li>
            </div>
            <div className="flex mt-5">
              <li className="font-bold">03-3288-2371</li>
            </div>
            <div className="flex mt-8">
              <li>
                {" "}
                <a
                  href="mailto:mail@exegroup.co.jp"
                  className="font-bold hover:text-blue-500"
                >
                  {" "}
                  mail@exegroup.co.jp{" "}
                </a>
              </li>
            </div>
          </ul>
        </div>

        <div className="mr-2 font-bold max-w-lg pl-4 mt-4 md:p-4 md:ml-4">
          <h2 className="ml-9 mb-5 text-white text-md underline ">
            エクセについて
          </h2>
          <ul className="text-gray-300 font-light pl-6 list-none">
            <li className="nav-item">
              <Link href="/greetings">
                <a className="font-bold px-2 py-2 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2 ">社長メッセージ</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/corporate">
                <a className="font-bold px-2 py-2 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">会社概要</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="font-bold max-w-lg pl-4 pb-4 mt-4 md:p-4 md:ml-4">
          <h2 className="ml-9 underline mb-5 text-white text-md ">
            プロジェクト
          </h2>
          <ul className="text-gray-300 font-light pl-6 list-none">
            <li className="nav-item">
              <Link href="/domestic">
                <a className="font-bold px-2 py-2 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">海外プロジェクト</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/myanmar">
                <a className="font-bold px-2 py-2 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">ミャンマー</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/mongolia">
                <a className="font-bold px-2 py-2 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">モンゴル</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/mongolia">
                <a className="font-bold px-2 py-2 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">国内プロジェクト</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="font-bold max-w-lg pl-4 mt-4 md:p-4 md:ml-4">
          <h2 className="ml-9 mb-5 text-white text-md underline ">
            インターンシップ・採用
          </h2>
          <ul className="text-gray-300 font-light pl-6 list-none">
            <li className="nav-item">
              <Link href="/greetings">
                <a className="font-bold px-2 py-2 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2 ">インターンシップ</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/corporate">
                <a className="font-bold px-2 py-2 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">新卒・中途採用</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <a
        className="to-top-button show px-3 py-2 mb-16 mr-8 border text-[12px] bg-gray-300 rounded-lg duration-300 "
        href="#"
      >
        <i className="fa-sharp fa-solid fa-arrow-up"></i>
        {/* <FontAwesomeIcon
        icon={faAmbulance}
        style={{ fontSize: 100, color: "orange" }}
      />
      <FontAwesomeIcon icon=" fa-arrow-up" /> */}
      </a>

      <div className="text-center text-sm font-bold bg-zinc-900 text-gray-300 p-2">
        Copyright © 2022 株式会社エクセ All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
