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
      <div className="bg-darkblue grid gap-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-10 bg-neutral-800 w-full p-4 md:p-12">
        <div className="sm:col-span-1 md:col-span-3 lg:col-span-4 max-w-lg pl-4 mt-4 md:p-4">
          <h2 className="ml-4 underline text-white text-md mb-8">
            お問い合わせ
          </h2>

          <ul className="text-gray-300 font-light pl-4 list-none w-full">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="mr-2"
                fill="currentColor"
              >
                <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
              </svg>
              <li className="font-bold">
                〒102-0083 東京都千代田区麹町1-10-5 澤田麹町ビル6階
              </li>
            </div>
            <div className="flex mt-5">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                clipRule="evenodd"
                className="mr-2"
              >
                <path d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.542-.755-2.898-5.594-1.54.754c-.181.087-.384.134-.597.134-2.561 0-6.841-8.204-4.241-9.596l1.546-.763-2.875-5.612zm7.746 22.711c-5.68 0-12.221-11.114-12.221-17.832 0-2.419.833-4.146 2.457-4.992l2.382-1.176 3.857 7.347-2.437 1.201c-1.439.772 2.409 8.424 3.956 7.68l2.399-1.179 3.816 7.36s-2.36 1.162-2.476 1.215c-.547.251-1.129.376-1.733.376" />
              </svg>
              <li className="font-bold">03-3288-2371</li>
            </div>
            <div className="flex mt-8">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                clipRule="evenodd"
                className="mr-2"
              >
                <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
              </svg>
              <li>
                {" "}
                <a
                  href="mailto:info@exegroup.co.jp"
                  className="font-bold hover:text-blue-500"
                >
                  {" "}
                  info@exegroup.co.jp{" "}
                </a>
              </li>
            </div>
          </ul>
        </div>

        <div className="font-bold max-w-lg mt-8 sm:col-span-1 md:col-span-2 lg:col-span-2">
          <h2 className="ml-9 mb-5 text-white text-md underline ">
            エクセについて
          </h2>
          <ul className="text-gray-300 font-light pl-6 list-none">
            <li className="nav-item">
              <Link href="/greetings">
                <a className="font-bold px-2 py-2 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">会社概要</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="font-bold max-w-lg pl-4 pb-4 mt-4 md:p-4 md:-ml-4 sm:col-span-1 md:col-span-2 lg:col-span-2">
          <h2 className="ml-9 underline mb-5 text-white text-md ">
            プロジェクト
          </h2>
          <ul className="text-gray-300 font-light pl-6 list-none">
            <li className="nav-item">
              <Link href="#">
                <a className="font-bold px-2 py-2 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">海外プロジェクト</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/overseas">
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
              <Link href="/domestic">
                <a className="font-bold px-2 py-2 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">国内プロジェクト</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="font-bold max-w-lg pl-4 mt-4 md:p-4 md:ml-4 sm:col-span-1 md:col-span-2 lg:col-span-2">
          <h2 className="ml-9 mb-5 text-white text-md underline ">
            インターンシップ・採用
          </h2>
          <ul className="text-gray-300 font-light pl-6 list-none">
            <li className="nav-item">
              <Link href="/intership">
                <a className="font-bold px-2 py-2 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2 ">インターンシップ</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/recruit">
                <a className="font-bold px-2 py-2 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">新卒・中途採用</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <a
        className="to-top-button show px-3 py-2 mb-16 mr-8 border text-[12px] bg-gray-300 rounded-lg duration-300 bg-white"
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
