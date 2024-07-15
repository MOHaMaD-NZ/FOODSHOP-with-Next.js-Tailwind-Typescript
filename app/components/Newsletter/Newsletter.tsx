import React from "react";

const Newsletter = () => {
  return (
    <div className="pt-[5rem] pb-[5rem]">
      <div className="text-center">
        <h1 className="text-[30px] sm:text-[50px] text-black font-bold ">
          به جمع ما بپیوندید
        </h1>
        <p className="text-black text-opacity-70 mx-auto w-[85%] md:w-[60%]">
          ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
          از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله ورم ایپسوم
          متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
          گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
          لازم است
        </p>
        <div className="flex items-center space-x-2 mt-[3rem] justify-center">
          {/* input */}
          <input
            type="email"
            placeholder="ایمیل"
            className="px-5 py-4 bg-gray-400 w-[40%]
                 outline-none rounded-lg placeholder:text-black"
          />
          {/* subscribe button */}
          <button
            className="px-8 py-4 bg-green-700 hover:bg-green-900 transition-all duration-200
                 rounded-md text-white font-bold"
          >
            پیوستن
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
