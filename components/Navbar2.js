import { useState } from "react";

const ResponsiveMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggle1 = () => setIsOpen1(!isOpen1);

  return (
    <div className="relative bg-darkblue">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-18">
          <div className="flex items-center">
            <a href="/">
              <div>
                <img
                  src="/assets/img/exe-logo.png"
                  loading="lazy"
                  className="w-28 px-2 transition duration-300 ease-linear align-middle"
                />
              </div>
            </a>
          </div>
          <div className="flex lg:hidden items-center">
            <button
              className="navbar-burger flex items-center text-white p-3"
              onClick={toggle}
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
          <div className={`hidden lg:flex lg:items-center lg:justify-start`}>
            <div className="flex lg:items-center ">
              <a
                href="/"
                className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                ホーム
              </a>
              <a
                href="/about"
                className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                エクセについて
              </a>
            </div>
            <div>
              <button
                type="button"
                className="inline-flex items-center justify-center w-full text-gray-700 hover:text-gray-900 focus:outline-none"
                onClick={toggle1}
              >
                <span className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                  海外プロジェクト
                </span>
                <svg
                  className="ml-2 w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#fff"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 9.586l3.293-3.293a1 1 0 011.414 1.414l-4 4A1 1 0 0110 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-darkblue shadow-lg z-10">
                  <a
                    href="/myanmar"
                    className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 text-base font-medium border border-white"
                  >
                    ミャンマー
                  </a>
                  <a
                    href="/mongolia"
                    className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 text-base font-medium border border-white"
                  >
                    モンゴル
                  </a>
                </div>
              )}
            </div>
            <div className="flex lg:items-center ">
              <a
                href="/domestic"
                className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                国内プロジェクト
              </a>
            </div>
            <div>
              <button
                type="button"
                className="inline-flex items-center justify-center w-full text-gray-700 hover:text-gray-900 focus:outline-none"
                onClick={toggle}
              >
                <span className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                  インターンシップ・採用
                </span>
                <svg
                  className="ml-2 w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#fff"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 9.586l3.293-3.293a1 1 0 011.414 1.414l-4 4A1 1 0 0110 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-darkblue shadow-lg z-10">
                  <a
                    href="/intership"
                    className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 text-base font-medium border border-white"
                  >
                    インターンシップ
                  </a>
                  <a
                    href="/recruit"
                    className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 text-base font-medium border border-white"
                  >
                    リクルート
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${
          isOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-gray-800 z-20`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-darkblue">
          <a
            href="#"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </a>
          <a
            href="#"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
