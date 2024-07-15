"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BurgerCard from "./BurgerCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const PopularBurger = () => {
  return (
    <div className="pt-[3rem] pb-[3rem]">
      <h1 className="heading">
        همبرگرهای <span className="text-red-600">مشهور</span> ما
      </h1>
      <div className="w-[80%] mt-[4rem] mx-auto">
        <Carousel
          additionalTransfrom={0}
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          centerMode={false}
          infinite
          responsive={responsive}
          itemClass="item"
          showDots={false}
        >
          <BurgerCard
            title="همبرگر مخصوص"
            image="/images/p1.jpg"
            reviews="6"
            price="20 هزار تومان"
          />
          <BurgerCard
            title="همبرگر مخصوص"
            image="/images/p2.jpg"
            reviews="6"
            price="20 هزار تومان"
          />
          <BurgerCard
            title="همبرگر مخصوص"
            image="/images/p3.jpg"
            reviews="6"
            price="20 هزار تومان"
          />
          <BurgerCard
            title="همبرگر مخصوص"
            image="/images/p4.jpg"
            reviews="6"
            price="20 هزار تومان"
          />
          <BurgerCard
            title="همبرگر مخصوص"
            image="/images/p5.jpg"
            reviews="6"
            price="20 هزار تومان"
          />
          <BurgerCard
            title="همبرگر مخصوص"
            image="/images/p6.jpg"
            reviews="6"
            price="20 هزار تومان"
          />
          <BurgerCard
            title="همبرگر مخصوص"
            image="/images/p7.jpg"
            reviews="6"
            price="20 هزار تومان"
          />
          <BurgerCard
            title="همبرگر مخصوص"
            image="/images/p8.jpg"
            reviews="6"
            price="20 هزار تومان"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default PopularBurger;
