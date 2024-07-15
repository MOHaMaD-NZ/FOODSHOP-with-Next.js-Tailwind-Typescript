import React from "react";
import { BsDoorOpen } from "react-icons/bs";
import { IoFastFood } from "react-icons/io5";
import { RiEBike2Fill } from "react-icons/ri";
import deliveryImg from "@/public/images/delivery.jpg";
import Image from "next/image";

const Delivery = () => {
  return (
    <div className="pt-[8rem] pb-[3rem]">
      <div className="w-[88%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[3rem]">
        {/* image */}
        <div className="">
          <Image src={deliveryImg} alt="delivery" className="w-[420px]" />
        </div>
        {/* Text Content */}
        <div>
          <h1 className="text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold leading-[3rem] md:leading-[4rem]">
            <span className="text-red-600">همبرگر مورد علاقت</span> تو راهه
          </h1>
          <p className="mt-[2rem] text-black text-opacity-70 text-[17px] ">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </p>
          <div className="flex items-center space-x-3 mt-[2rem]">
            <RiEBike2Fill className="w-[2rem] h-[2rem] text-red-600 " />
            <h1 className=" text-[18px] text-black font-medium">
              تحویل در 30 دقیقه
            </h1>
          </div>

          <div className="flex items-center space-x-3 mt-[1rem]">
            <IoFastFood className="w-[2rem] h-[2rem] text-red-600 " />
            <h1 className=" text-[18px] text-black font-medium">
              ارسال رایگان
            </h1>
          </div>

          <div className="flex items-center space-x-3 mt-[1rem]">
            <BsDoorOpen className="w-[2rem] h-[2rem] text-red-600 " />
            <h1 className=" text-[18px] text-black font-medium">
              تحویل درب منزل
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
