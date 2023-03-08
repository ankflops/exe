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
              className="flex flex-grow justify-end items-center text-white font-light cursor-pointer text-4xl lg:hidden outline-none focus:outline-none -mr-20 sm:mr-20"
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
                    <Link href="/greetings">
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
                <Link href="/overseas">
                  <a className="px-2 py-2 flex items-center text-sm uppercase leading-snug text-white hover:text-sky-300">
                    {/* <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i> */}
                    <span className="ml-2">海外プロジェクト</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/domestic">
                  <a className="px-2 py-2 flex items-center text-sm uppercase leading-snug text-white hover:text-sky-300">
                    <span className="ml-2">国内プロジェクト</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/intership">
                  <a className="px-2 py-2 flex items-center text-sm uppercase leading-snug text-white hover:text-sky-300">
                    <span className="ml-2">インターンシップ・採用</span>
                  </a>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link href="/recruit">
                  <a className="px-2 py-2 flex items-center text-sm uppercase leading-snug text-white hover:text-sky-300">
                    <span className="ml-2">リクルート</span>
                  </a>
                </Link>
              </li> */}
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
          <div className="flex flex-grow justify-end items-center">
            <div className="dropdown relative">
              <button
                className="mr-30 text-left py-2 flex text-sm uppercase leading-snug text-white hover:text-sky-300 items-center text-white font-light cursor-pointer outline-none focus:outline-none"
                type="button"
                id="dropdownMenuButton1tx"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                🌐LANGUAGE | 言語
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  className="w-2 ml-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  />
                </svg>
              </button>

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
