import React from "react";
import Link from "next/link";
import LazyLoad from "react-lazy-load";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar({ fixed }) {
  let { t } = useTranslation();
  let router = useRouter();
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav
        className="relative flex flex-wrap items-center justify-start py-3"
        style={{ backgroundColor: "#0e1447" }}
      >
        <div className="container pl-8 mx-auto flex flex-wrap items-center justify-start ml-0">
          <div className="w-full relative flex justify-start lg:w-auto lg:static lg:block">
            <Link href="/">
              <a className=" font-bold leading-relaxed inline-block py-2 whitespace-nowrap uppercase text-white">
                <div>
                  <img
                    src="/assets/img/exe-logo.png"
                    loading="lazy"
                    className="w-28 px-2 transition duration-300 ease-linear align-middle"
                  />
                </div>
              </a>
            </Link>

            <button
              className="flex flex-grow justify-end items-center text-white font-light cursor-pointer text-4xl lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow lg:flex-none items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto justify-start">
              <li className="nav-item">
                <Link href="/">
                  <a className="px-2 py-2 flex items-center text-sm uppercase leading-snug text-white hover:text-sky-300">
                    <span className="ml-2">ホーム</span>
                  </a>
                </Link>
              </li>
              {/* dropdown */}
              <div className="flex justify-start px-2">
                <div>
                  <div className="dropdown relative">
                    <Link href="/about">
                      <a className="px-0 py-2 flex items-center text-sm uppercase leading-snug text-white hover:text-sky-300">
                        <span className="ml-2">エクセについて</span>
                      </a>
                    </Link>
                    <ul
                      className="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left shadow-lg mt-1 hidden bg-clip-padding border-none"
                      aria-labelledby="dropdownMenuButton1tx"
                    >
                      <li>
                        <Link href="/greetings">
                          <a className="dropdown-item px-12 text-sm py-2 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                            社長メッセージ
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/corporate">
                          <a className="dropdown-item px-12 text-sm py-2 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                            会社概要
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* dropdown */}

              <li className="nav-item">
                <div className="flex justify-center">
                  {/* <div>
                    <div className="relative" data-te-dropdown>
                      <button
                        className="flex items-center bg-darkblue px-6 pt-2.5 pb-2 text-sm font-medium uppercase leading-normal text-white -mt-0.5"
                        type="button"
                        id="dropdownMenuButton1"
                        data-te-dropdown-toggle
                        aria-expanded="false"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      >
                        海外プロジェクト
                        <span className="ml-2 w-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </button>
                      <ul
                        className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden border-none bg-white text-left text-base shadow-lg [data-te-dropdown-show]"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a
                            className="block w-full bg-transparent py-1 px-4 text-sm bg-darkblue text-white border"
                            href="/myanmar"
                          >
                            ミャンマー
                          </a>
                        </li>
                        <li>
                          <a
                            className="block w-full bg-transparent py-1 px-4 text-sm bg-darkblue text-white border"
                            href="/mongolia"
                          >
                            モンゴル
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                  <li className="nav-item">
                    <div className="flex justify-center">
                      <div className="dropdown text-white">
                        <span className="flex items-center bg-darkblue px-6 pt-2.5 pb-2 text-sm font-medium uppercase leading-normal text-white -mt-0.5">
                          海外プロジェクト
                        </span>
                        <div className="dropdown-content">
                          <a
                            className="block w-full bg-transparent py-1 px-4 text-sm bg-darkblue text-white border"
                            href="/myanmar"
                          >
                            ミャンマー
                          </a>
                          <a
                            className="block w-full bg-transparent py-1 px-4 text-sm bg-darkblue text-white border"
                            href="/mongolia"
                          >
                            モンゴル
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </div>
              </li>
              <li className="nav-item">
                <Link href="/domestic">
                  <a className="px-2 py-2 flex items-center text-sm uppercase leading-snug text-white hover:text-sky-300">
                    <span className="ml-2">国内プロジェクト</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <div className="flex justify-center">
                  {/* <div>
                    <div className="relative" data-te-dropdown-ref>
                      <button
                        className="flex items-center bg-darkblue px-6 pt-2.5 pb-2 text-sm font-medium uppercase leading-normal text-white -mt-0.5"
                        type="button"
                        id="dropdownMenuButton1"
                        data-te-dropdown-toggle-ref
                        aria-expanded="false"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      >
                        インターンシップ・採用
                        <span className="ml-2 w-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </button>
                      <ul
                        className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden border-none bg-white bg-clip-padding text-left text-base shadow-lg [&[data-te-dropdown-show]]:block"
                        aria-labelledby="dropdownMenuButton1"
                        data-te-dropdown-menu-ref
                      >
                        <li>
                          <a
                            className="block w-full bg-transparent py-1 px-4 text-sm bg-darkblue text-white border"
                            href="/intership"
                            data-te-dropdown-item-ref
                          >
                            インターンシップ
                          </a>
                        </li>
                        <li>
                          <a
                            className="block w-full bg-transparent py-1 px-4 text-sm bg-darkblue text-white border"
                            href="/recruit"
                            data-te-dropdown-item-ref
                          >
                            リクルート
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                  <li className="nav-item">
                    <div className="flex justify-center">
                      <div className="dropdown text-white">
                        <span className="flex items-center bg-darkblue px-6 pt-2.5 pb-2 text-sm font-medium uppercase leading-normal text-white -mt-0.5">
                          インターンシップ・採用
                        </span>
                        <div className="dropdown-content">
                          <a
                            className="block w-full bg-transparent py-1 px-4 text-sm bg-darkblue text-white border"
                            href="/intership"
                            data-te-dropdown-item-ref
                          >
                            インターンシップ
                          </a>
                          <a
                            className="block w-full bg-transparent py-1 px-4 text-sm bg-darkblue text-white border"
                            href="/recruit"
                            data-te-dropdown-item-ref
                          >
                            リクルート
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </div>
              </li>

              <li className="nav-item">
                <Link href="/contact">
                  <a className="px-2 py-2 flex items-center text-sm uppercase leading-snug text-white hover:text-sky-300">
                    <span className="ml-2">お問い合わせ</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Language */}
          <div className="flex flex-grow justify-center sm:justify-end -mt-20">
            <div className="dropdown relative">
              <ul
                className="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left
    shadow-lg m-8 hidden bg-clip-padding border-none"
                aria-labelledby="dropdownMenuButton1tx"
              >
                <li>
                  <Link href="/">
                    <a className="dropdown-item px-2 md:px-12 text-sm py-2 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                      日本語
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/en">
                    <a className="dropdown-item px-2 md:px-12 text-sm py-2 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                      ENGLISH
                    </a>
                  </Link>
                </li>
                {/* {router.locales.map((l) => (
                  <li key={l}>
                    <Link href={router.asPath} locale={l}>
                      <a className="dropdown-item px-2 md:px-12 text-sm py-2 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                        {l}
                      </a>
                    </Link>
                  </li>
                ))} */}
              </ul>
            </div>
          </div>
        </div>
        {/* Language */}
      </nav>
    </>
  );
}
