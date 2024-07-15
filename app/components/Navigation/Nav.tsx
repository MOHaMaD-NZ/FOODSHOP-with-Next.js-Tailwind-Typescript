import React from "react";
import { MdFastfood } from "react-icons/md";
import { IoBicycle } from "react-icons/io5";
import { BiShoppingBag } from "react-icons/bi";
import { HiBars3BottomLeft } from "react-icons/hi2";
import Link from "next/link";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="h-[12vh] bg-white">
      <div className="sm:w-[90%] w-[95%] mx-auto flex h-[100%] items-center justify-between">
        {/* buttons */}
        <div className="flex items-center space-x-4">
          <HiBars3BottomLeft
            onClick={openNav}
            className="lg:hidden w-[2rem] h-[2rem] text-black"
          />
          <button className="sm:px-6 sm:py-3 px-4 py-2 hover:bg-green-700 transition-all duration-200 bg-orange-600 flex items-center rounded-md text-white">
            <BiShoppingBag className="w-[1.3rem] h-[1.3rem] sm:w-[1.6rem] sm:h-[1.7rem]" />
          </button>
          <button className="px-6 py-2 sm:px-8 sm:py-3 text-[14px] bg-blue-950 transition-all duration-200 hover:bg-red-600 flex items-center rounded-md space-x-2 text-white">
            <span className="font-bold">سفارش</span>
            <span>
              <IoBicycle className="w-[1.3rem] h-[1.3rem] sm:w-[1.6rem] sm:h-[1.7rem]" />
            </span>
          </button>
        </div>

        {/* nav links */}
        <ul className="hidden lg:flex items-center space-x-10">
          <li className="text-[20px] font-medium hover:text-red-600">
            <Link href="/">راه ارتباط</Link>
          </li>
          <li className="text-[20px] font-medium hover:text-red-600">
            <Link href="/">وبلاگ</Link>
          </li>
          <li className="text-[20px] font-medium hover:text-red-600">
            <Link href="/">لیست غذا</Link>
          </li>
          <li className="text-[20px] font-medium hover:text-red-600">
            <Link href="/">خرید</Link>
          </li>
          <li className="text-[20px] font-medium hover:text-red-600">
            <Link href="/">صفحه اصلی</Link>
          </li>
        </ul>

        {/* Logo Div */}
        <div className="flex items-center space-x-2 justify-center ">
          <h1 className="text-[20px] sm:text-[30px] font-semibold">فست فود</h1>
          <MdFastfood className="w-[2.2rem] h-[2.2rem] sm:w-[3.4rem] sm:h-[3.4rem] text-orange-500 translate-y-[-7px] " />
        </div>
      </div>
    </div>
  );
};

export default Nav;
