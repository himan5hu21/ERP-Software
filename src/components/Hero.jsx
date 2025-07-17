import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <section>
      <div className="max-w-screen-xl gap-12 px-4 mx-auto overflow-hidden text-gray-600 py-28 md:px-8 md:flex">
        <div className="flex-none max-w-xl space-y-5">
          <Link
            href="/blog"
            className="inline-flex items-center p-1 pr-6 text-sm font-medium transition-colors duration-150 ease-in-out border rounded-full gap-x-4 md:gap-x-6 hover:bg-indigo-100 hover:text-indigo-600"
          >
            <span className="inline-block px-3 py-1 text-white bg-indigo-600 rounded-full">
              News
            </span>
            <p className="flex items-center gap-1 whitespace-nowrap">
              Read the launch post from here
              <IoIosArrowForward className="w-4 h-4" />
            </p>
          </Link>
          <h1 className="text-4xl font-extrabold text-gray-800 sm:text-5xl">
            Build your ERP exactly how you want
          </h1>
          <p>
            Simplify complex operations and centralize data our ERP helps teams
            move faster, work smarter, and make informed decisions.
          </p>
          <div className="flex items-center gap-x-3 sm:text-sm">
            {/* <a
              href="#"
              className="flex items-center justify-center px-4 py-2 font-medium text-white duration-150 bg-gray-800 rounded-full gap-x-1 hover:bg-gray-700 active:bg-gray-900 md:inline-flex"
            >
              Get started
              <IoIosArrowForward className="w-4 h-4" />
            </a> */}
            <Link
              href="/contact"
              className="flex items-center justify-center px-4 py-2 font-medium text-gray-700 transition-all duration-300 ease-in-out border border-gray-700 rounded-full gap-x-1 hover:text-indigo-600 hover:bg-gray-100 md:inline-flex"
            >
              Contact sales
              <IoIosArrowForward className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="items-center justify-end flex-1 hidden md:flex">
          {/* Replace with your image */}
          <img
            src="https://raw.githubusercontent.com/sidiDev/remote-assets/c86a7ae02ac188442548f510b5393c04140515d7/undraw_progressive_app_m-9-ms_oftfv5.svg"
            className="object-contain w-full h-auto max-w-xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
