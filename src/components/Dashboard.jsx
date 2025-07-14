"use client";
import React from "react";
import Hero from "./Hero";
import LogoGrid from "./LogoGrid";
import Features from "./Features";
import Faqs from "./Faqs";
import { FaArrowRightLong } from "react-icons/fa6";
import { useForm } from "react-hook-form";

const Dashboard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    // You can send data to your backend here.
  };
  return (
    <section>
      <Hero />
      <LogoGrid />
      <section className="relative max-w-screen-xl mx-auto mt-8 py-4 px-4 md:px-8">
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
        <div className="relative z-10 gap-5 items-center lg:flex">
          <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
            <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
              build your websites with{" "}
              <span className="text-indigo-600">high performance</span>
            </h3>
            <p className="text-gray-500 leading-relaxed mt-3">
              Nam erat risus, sodales sit amet lobortis ut, finibus eget metus.
              Cras aliquam ante ut tortor posuere feugiat. Duis sodales nisi id
              porta lacinia.
            </p>
            <a
              className="mt-5 px-4 py-2 text-indigo-600 font-medium bg-indigo-50 rounded-full inline-flex items-center"
              href="#"
            >
              Try it out
              <FaArrowRightLong className="relative top-0.5 ml-1 duration-150" />
            </a>
          </div>
          <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
            <img
              src="https://i.postimg.cc/kgd4WhyS/container.png"
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </section>
      <Features />
      <Faqs />
      <section className="mt-4 py-8">
        <div className="mt-8 px-4 py-12 md:px-8 bg-indigo-700">
          <h1 className="text-3xl text-white text-center font-semibold">
            Let's get in touch
          </h1>
          <p className="mt-3 text-white text-center">
            Have questions or need assistance? We're just a message away!
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 max-w-5xl mx-auto space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              <div>
                <input
                  {...register("name", { required: "Name is required" })}
                  placeholder="Your Name"
                  className="px-4 py-2 rounded-md w-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                {errors.name && (
                  <p className="text-sm text-red-100 mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Enter a valid 10-digit phone number",
                    },
                  })}
                  placeholder="Phone Number"
                  className="px-4 py-2 rounded-md w-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                {errors.phone && (
                  <p className="text-sm text-red-100 mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2 md:col-span-1">
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Enter a valid email",
                    },
                  })}
                  placeholder="Email Address"
                  className="px-4 py-2 rounded-md w-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                {errors.email && (
                  <p className="text-sm text-red-100 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="mt-4 bg-white text-indigo-700 font-semibold px-6 py-2 rounded-md hover:bg-indigo-100 transition duration-200"
              >
                Contact Us
              </button>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
};

export default Dashboard;
