import React from "react";
import { FaBurger, FaFacebook } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="pt-[5rem] pb-[3rem] bg-gray-900">
        <div
          className="w-[80%] pb-[2rem] border-b-[2px] border-b-gray-300 border-opacity-50 mx-auto grid
            grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem] items-start"
        >
          {/* 1st part */}
          <div className="">
            {/* logo */}
            <div className="flex items-center text-white space-x-2">
              <FaBurger className="w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-orange-500" />
              <h1 className="text-[20px] sm:tet-[30px] font-semibold">
                فست فود
              </h1>
            </div>
            <p className="text-white text-opacity-65 mt-[.4rem]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است
            </p>
            <p className="mt-[1rem] text-white">Fooodshop@gmail.com</p>
            <p className="text-red-300 text-[20px] font-bold ">09120043676</p>
          </div>
          {/* 2nd part */}
          <div className="">
            <h1 className="text-[25px] font-semibold mb-[2rem] text-white">
              محصولات
            </h1>
            <p
              className="mt-[.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
                    duration-200 cursor-pointer w-fit "
            >
              همبرگر خانگی
            </p>

            <p
              className="mt-[.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
                    duration-200 cursor-pointer w-fit "
            >
              همبرگر گوشت
            </p>

            <p
              className="mt-[.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
                    duration-200 cursor-pointer w-fit "
            >
              همبرگر کریسپی
            </p>

            <p
              className="mt-[.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
                    duration-200 cursor-pointer w-fit "
            >
              همبرگر مخصوص
            </p>
          </div>
          {/* 3 part */}
          <div className="">
            <h1 className="text-[25px] font-semibold mb-[2rem] text-white">
              لینک ها
            </h1>
            <p
              className="mt-[.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
                    duration-200 cursor-pointer w-fit "
            >
              صفحه اصلی
            </p>

            <p
              className="mt-[.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
                    duration-200 cursor-pointer w-fit "
            >
              درباره ما
            </p>

            <p
              className="mt-[.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
                    duration-200 cursor-pointer w-fit "
            >
              لیست غذا
            </p>

            <p
              className="mt-[.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
                    duration-200 cursor-pointer w-fit "
            >
              محصولات
            </p>

            <p
              className="mt-[.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
                    duration-200 cursor-pointer w-fit "
            >
              پیوستن
            </p>
          </div>
          <div className="">
            {/* 4 part */}
            <h1 className="text-[25px] font-semibold mb-[2rem] text-white">
              ساعات کار
            </h1>
            <p className="text-white tet-[18px]">از 7:00 الی10:00</p>

            {/* socials */}
            <div className="mt-[2rem] ">
              <h5 className="font-medium mt-1 text-white">شبکه های اجتماعی</h5>
              <div className="flex">
                <ul className="flex gap-5">
                  <li className="my-3">
                    <a
                      href=""
                      className="decoration-0 text-white hover:text-yellow-300"
                    >
                      <FaFacebook />
                    </a>
                  </li>

                  <li className="my-3">
                    <a
                      href=""
                      className="text-decoration-0 text-white hover:text-yellow-300"
                    >
                      <IoLogoTwitter />
                    </a>
                  </li>

                  <li className="my-3">
                    <a
                      href=""
                      className="text-decoration-0 text-white hover:text-yellow-300"
                    >
                      <FaInstagramSquare />
                    </a>
                  </li>

                  <li className="my-3">
                    <a
                      href=""
                      className="text-decoration-none text-white hover:text-yellow-300"
                    >
                      <FaTelegram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
