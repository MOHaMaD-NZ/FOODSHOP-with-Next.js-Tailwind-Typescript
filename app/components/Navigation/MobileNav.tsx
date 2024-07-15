import React from "react";
import { ImCross } from "react-icons/im";
import Link from "next/link";

interface Props {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`fixed ${navStyle} left-0  transition-all duration-500 delay-200 flex flex-col items-center right-0 top-0 buttom-0 h-[100vh] bg-[#000000e0] z-[1002]`}
    >
      <ImCross
        onClick={closeNav}
        className="absolute top-[2rem] left-[2rem] w-[2rem] h-[2rem] text-white"
      />
      {/* Nav Div */}
      <div
        className={` bg-emerald-700 ${navStyle} translate-x-40  transition-all duration-500 delay-200 flex flex-col items-center justify-center w-[70%] h-[100%]`}
      >
        {/* Nav Links */}
        <ul className="space-y-10">
          <li className="text-[35px] font-medium hover:text-yellow-400 text-white">
            <Link href="/">راه ارتباط</Link>
          </li>
          <li className="text-[35px] font-medium hover:text-yellow-400 text-white">
            <Link href="/">وبلاگ</Link>
          </li>
          <li className="text-[35px] font-medium hover:text-yellow-400 text-white">
            <Link href="/">لیست غذا</Link>
          </li>
          <li className="text-[35px] font-medium hover:text-yellow-400 text-white">
            <Link href="/">خرید</Link>
          </li>
          <li className="text-[35px] font-medium hover:text-yellow-400 text-white">
            <Link href="/">صفحه اصلی</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
