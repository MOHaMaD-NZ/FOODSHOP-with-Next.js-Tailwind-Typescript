import React from "react";
import Image from "next/image";
import h1 from "@/public/images/h1.jpg";
import h2 from "@/public/images/h2.jpg";
import h3 from "@/public/images/h3.jpg";

const Feature = () => {
  return (
    <div className="mt-[5rem] mb-[3rem]">
      {/* Heading */}
      <h1 className="heading">
        همبرگر ها با عشق <br />و <span className="text-red-600">اهمیت</span>{" "}
        <br />
        درست شدند
      </h1>
      {/* Cards */}
      <div
        className="w-[90%] md:w-[88%] mt-[3rem] md:[5rem] mb-[3rem] mx-auto grid grid-cols-1
      md:grid-cols-2 lg:grid-cols-3 gap-[3rem]"
      >
        {/* card1 */}
        <div className="">
          <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
            <Image src={h1} alt="burger" className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
              همبرگر های ما
            </h1>
            <p className="mt-[.2rem] text-black text-opacity-50 text-center">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </p>
          </div>
        </div>
        {/* card 2 */}
        <div className="">
          <div className="p-6 hover:bg-white lg:translate-y-[3rem] rounded-lg transition-all duration-200">
            <Image src={h2} alt="burger" className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
              نظر شما خیلی مهمه
            </h1>
            <p className="mt-[.2rem] text-black text-opacity-50 text-center">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </p>
          </div>
        </div>
        {/* card 3 */}
        <div className="">
          <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
            <Image src={h3} alt="burger" className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
              همبرگر های خانگی
            </h1>
            <p className="mt-[.2rem] text-black text-opacity-50 text-center">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
