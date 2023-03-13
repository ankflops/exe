import MainLayout from "../layout/MainLayout";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LazyLoad from "react-lazy-load";

const contact = () => {
  return (
    <div>
      <MainLayout>
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat h-[16rem] md:h-[20rem] lg:h-[28rem]"
          style={{
            backgroundPosition: "50%",
            backgroundImage: 'url("/assets/img/mv.jpg")',
          }}
        >
          <div
            className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <div className="flex h-full items-center justify-center text-center text-white">
              <h1 className="mb-6 text-2xl md:text-3xl font-bold">
                お問い合わせ
              </h1>
            </div>
          </div>
        </div>

        <div>
          <div className="container my-12 px-6 mx-auto">
            {/* Section: Design Block */}
            <section className="mb-32 text-center text-gray-800">
              <div className="max-w-[700px] mx-auto px-3 lg:px-6">
                <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>{" "}
                <h1 className="text-xl md:text-3xl font-bold">
                  (81) 3 3288 2371
                </h1>
                <p>
                  {/* <i className="fa-solid fa-heart fa-beat"></i>{" "} */}
                  <a
                    href="mailto:mail@exegroup.co.jp"
                    className="text-xl md:text-2xl font-bold"
                  >
                    mail@exegroup.co.jp
                  </a>
                </p>
                {/* <p className="text-xl md:text-2xl font-bold font-serif md:text-left my-4 pt-4">
                  お問い合わせください。
                </p> */}
                <h2 className="text-xl md:text-3xl font-bold m-8">お問い合わせ</h2>
                <form>
                  <div className="form-group mb-6">
                    <input
                      type="text"
                      className="form-control block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleInput7"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group mb-6">
                    <input
                      type="email"
                      className="form-control block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleInput8"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="form-group mb-6">
                    <textarea
                      className="
    form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  "
                      id="exampleFormControlTextarea13"
                      rows={3}
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>

                  <button
                    type="submit"
                    className="
  w-full
  px-6
  py-2.5
  bg-darkblue
  text-white
  font-medium
  text-xs
  leading-tight
  uppercase
  rounded
  shadow-md
  hover:bg-blue-700 hover:shadow-lg
  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
  active:bg-blue-800 active:shadow-lg
  transition
  duration-150
  ease-in-out"
                  >
                    Send
                  </button>
                </form>
              </div>
            </section>
            {/* Section: Design Block */}
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default contact;
