import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
        <div className="flex-none space-y-5 max-w-xl">
          <a
            href="#"
            className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white"
          >
            <span className="inline-block rounded-full px-3 py-1 bg-indigo-600 text-white">
              News
            </span>
            <p className="flex items-center">
              Read the launch post from here
              <IoIosArrowForward className="w-4 h-4" />
            </p>
          </a>
          <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl">
            Build your SaaS exactly how you want
          </h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          </p>
          <div className="flex items-center gap-x-3 sm:text-sm">
            <a
              href="#"
              className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
            >
              Get started
              <IoIosArrowForward className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-x-1 py-2 px-4 text-gray-700 hover:text-gray-900 font-medium duration-150 md:inline-flex"
            >
              Contact sales
              <IoIosArrowForward className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="flex-1 hidden md:block">
          {/* Replace with your image */}
          <img
            src="https://raw.githubusercontent.com/sidiDev/remote-assets/c86a7ae02ac188442548f510b5393c04140515d7/undraw_progressive_app_m-9-ms_oftfv5.svg"
            className="max-w-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
