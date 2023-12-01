import React from "react";
import HeroImg from "../assets/hero.png";
import { primaryColor } from "../constants";

const Hero = () => {
  return (
    <div className="flex items-center justify-between w-[80%] m-auto h-[90vh]">
      <div className="px-12 py-24 flex-[1.60] h-[100%] flex flex-col gap-6 ">
        <h1 className="text-neutral-800 font-bold text-[60px] leading-normal">
          Take Your Learning to The Next Level.
        </h1>
        <p className="text-neutral-400 text-[20px] leading-10 pr-8">
          Boost Your Skills With Our Specialized Courses Designed To Make You An
          Expert.
        </p>
        <div>
          {" "}
          <button
            className={`bg-[${primaryColor}] py-[0.7rem] px-8 text-white font-semibold text-center rounded-md`}
          >
            Get Started
          </button>
        </div>
      </div>
      <div className={`flex-[1.40] bg-[${primaryColor}] rounded-lg px-2`}>
        <img src={HeroImg} alt="hero" className="mt-4 h-[100%] w-[100%]" />
      </div>
    </div>
  );
};

export default Hero;