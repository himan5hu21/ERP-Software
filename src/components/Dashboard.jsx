"use client";
import React from "react";
import Hero from "./Hero";
import LogoGrid from "./LogoGrid";
import Features from "./Features";
import Faqs from "./Faqs";
import Features2 from "./Features2";
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
      {/* <LogoGrid /> */}
      <Features2 />
      <section className="relative max-w-screen-xl px-4 py-4 mx-auto mt-8 md:px-8">
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
        <div className="relative items-center gap-5 lg:flex">
          <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
            <h3 className="text-3xl font-semibold text-gray-800 md:text-4xl">
              Experience streamlined business operations with{" "}
              <span className="text-indigo-600">real-time control.</span>
            </h3>
            <p className="mt-3 leading-relaxed text-gray-500">
              From sales inquiries to delivery tracking, simplify every step
              with tools that support structured processes and flexible
              permissions.
            </p>
            {/* <a
              className="inline-flex items-center px-4 py-2 mt-5 font-medium text-indigo-600 rounded-full bg-indigo-50"
              href="#"
            >
              Try it out
              <FaArrowRightLong className="relative top-0.5 ml-1 duration-150" />
            </a> */}
          </div>
          <div className="flex-1 mx-auto mt-5 sm:w-9/12 lg:mt-0 lg:w-auto">
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
      <section className="py-8 mt-4">
        <div className="px-4 py-12 mt-8 bg-indigo-700 md:px-8">
          <h1 className="text-3xl font-semibold text-center text-white">
            Let's get in touch
          </h1>
          <p className="mt-3 text-center text-white">
            Have questions or need assistance? We're just a message away!
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-5xl mx-auto mt-8 space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              <div>
                <input
                  {...register("name", { required: "Name is required" })}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-100">
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
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-100">
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
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-100">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 mt-4 font-semibold text-indigo-700 transition duration-200 bg-white rounded-md hover:bg-indigo-100"
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
