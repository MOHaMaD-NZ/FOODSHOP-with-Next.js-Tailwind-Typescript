"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import s1 from "@/public/images/s1.jpg";
import s2 from "@/public/images/s2.jpg";
import Image from "next/image";
import { IoBicycle } from "react-icons/io5";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Hero = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay={true}
      autoPlaySpeed={4000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
      showDots={true}
    >
      {/* slide1 */}
      <div className="bg-blue-950 text-center leading-[50px] md:flex md:justify-center md:items-center md:clip_path pb-10">
        <div className="md:grid grid-cols-1 grid-cols-2 justify-center items-center gap-[2rem] ">
          {/* image */}

          {/* information */}
          <div className="px-[20px] md:px-0">
            <h1 className="text-[40px] font-semibold pt-10">همبرگر</h1>
            <h1 className="text-[90px] leading-[7rem] text-white font-bold">
              <p className="">بهترین</p>
              <p className="">همبرگرها</p>
            </h1>
            <p className="mt-[1rem] text-white text-opacity-70 text-[18px] ">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </p>
            <button className="px-5 py-2 mb-[1rem] text-[16px] bg-green-500 transition-all duration-200 hover:bg-green-700 flex items-center rounded-md space-x-2 text-white ml-auto">
              <span className="font-bold ">سفارش</span>
              <span>
                <IoBicycle className="w-[1.7rem] h-[1.7rem]" />
              </span>
            </button>
          </div>
          <Image
            src={s1}
            alt="burger"
            className="rounded h-[400px] translate-y-[-10px] hidden md:block "
          />
        </div>
      </div>
      {/* slide2 */}
      <div className="bg-red-950 text-center leading-[50px] md:flex justify-center items-center md:clip_path pb-8">
        <div className="md:grid grid-cols-1 grid-cols-2 justify-center items-center gap-[2rem] ">
          {/* image */}

          {/* information */}
          <div className="px-[20px] md:px-0">
            <h1 className="text-[40px]  font-semibold pt-10">همبرگر لذیذ</h1>
            <h1 className="md:text-[90px] text-[70px] leading-[7rem] text-white font-bold pt-3 ">
              <p className="">همبرگرهای</p>
              <p className="">درجه یک</p>
            </h1>
            <p className="mt-[1rem] text-white text-opacity-70 text-[18px] ">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </p>
            <button className="px-5 py-2 mb-[1rem] text-[16px] bg-blue-500 transition-all duration-200 hover:bg-blue-700 flex items-center rounded-md space-x-2 text-white ml-auto">
              <span className="font-bold ">سفارش</span>
              <span>
                <IoBicycle className="w-[1.7rem] h-[1.7rem]" />
              </span>
            </button>
          </div>
          <Image
            src={s1}
            alt="burger"
            className="rounded h-[400px] translate-y-[-10px] hidden md:block "
          />
        </div>
      </div>
    </Carousel>
  );
};

export default Hero;
