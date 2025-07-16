"use client";
import { useState } from "react";
import FaqsCard from "@/components/Faqs";

type PlanKey = "basic" | "business" | "enterprise";

const checkIcon = (
  <svg
    className="w-5 h-5 mx-auto text-indigo-600"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" />
  </svg>
);
const minusIcon = (
  <svg
    className="w-5 h-5 mx-auto text-gray-500"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" />
  </svg>
);

const plans = [
  {
    name: "Free",
    desc: "Lorem ipsum dolor sit amet torrel, consectet adipiscing elit.",
    price: "0",
  },
  {
    name: "Basic",
    desc: "Lorem ipsum dolor sit amet torrel, consectet adipiscing elit.",
    price: "15",
  },
  {
    name: "Business",
    desc: "Lorem ipsum dolor sit amet torrel, consectet adipiscing elit.",
    price: "20",
  },
  {
    name: "Enterprise",
    desc: "Lorem ipsum dolor sit amet torrel, consectet adipiscing elit.",
    price: "50",
  },
];

const tables = [
  {
    label: "Features",
    label_icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
    items: [
      {
        name: "Aliquam finibus",
        free: checkIcon,
        basic: checkIcon,
        business: checkIcon,
        enterprise: checkIcon,
      },
      {
        name: "Vestibulum tristique",
        free: minusIcon,
        basic: minusIcon,
        business: checkIcon,
        enterprise: checkIcon,
      },
      {
        name: "Aliquam finibus",
        free: minusIcon,
        basic: minusIcon,
        business: minusIcon,
        enterprise: checkIcon,
      },
      {
        name: "Praesent aliquet",
        free: minusIcon,
        basic: minusIcon,
        business: "150GB",
        enterprise: "Unlimited",
      },
    ],
  },
  {
    label: "Analytics",
    label_icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
    items: [
      {
        name: "Aliquam finibus",
        free: checkIcon,
        basic: checkIcon,
        business: checkIcon,
        enterprise: checkIcon,
      },
      {
        name: "Vestibulum tristique",
        free: minusIcon,
        basic: minusIcon,
        business: checkIcon,
        enterprise: checkIcon,
      },
      {
        name: "Aliquam finibus",
        free: minusIcon,
        basic: minusIcon,
        business: minusIcon,
        enterprise: checkIcon,
      },
      {
        name: "Lorinto dinor",
        free: minusIcon,
        basic: "30",
        business: "60",
        enterprise: "Custom",
      },
      {
        name: "Praesent aliquet",
        free: minusIcon,
        basic: "Limited",
        business: "Limited",
        enterprise: checkIcon,
      },
      {
        name: "Praesent aliquet",
        free: minusIcon,
        basic: minusIcon,
        business: "150GB",
        enterprise: "Unlimited",
      },
    ],
  },
  {
    label: "Support",
    label_icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
        />
      </svg>
    ),
    items: [
      {
        name: "Aliquam finibus",
        free: checkIcon,
        basic: checkIcon,
        business: checkIcon,
        enterprise: checkIcon,
      },
      {
        name: "Vestibulum tristique",
        free: minusIcon,
        basic: minusIcon,
        business: checkIcon,
        enterprise: checkIcon,
      },
      {
        name: "Aliquam finibus",
        free: minusIcon,
        basic: minusIcon,
        business: minusIcon,
        enterprise: checkIcon,
      },
      {
        name: "Praesent aliquet",
        free: minusIcon,
        basic: minusIcon,
        business: "150GB",
        enterprise: "Unlimited",
      },
    ],
  },
];

const planning = [
  {
    name: "Free",
    link: "free",
    moPrice: 0,
    yrPrice: 0,
    desc: "For most businesses that want to optimaize web queries.",
    popular: false,
    features: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
  },
  {
    name: "Basic",
    link: "basic",
    moPrice: 19,
    yrPrice: 39,
    desc: "For most businesses that want to optimaize web queries.",
    popular: false,
    features: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
  },
  {
    name: "Business",
    link: "business",
    moPrice: 49,
    yrPrice: 99,
    desc: "For most businesses that want to optimaize web queries.",
    popular: true,
    features: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
  },
  {
    name: "Enterprise",
    link: "enterprise",
    moPrice: 99,
    yrPrice: 199,
    desc: "For most businesses that want to optimaize web queries.",
    popular: false,
    features: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
  },
];

export default function Partners() {
  const [selectedPlan, setSelectedPlan] = useState(plans[0].name);

  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <>
      <section className="px-2 bg-white sm:px-4 md:px-10 lg:px-40">
        <div className="container px-6 py-8 mx-auto">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl ">
                Simple, transparent pricing
              </h2>
              <p className="mt-4 text-gray-500 ">
                No Contracts. No surorise fees.
              </p>
            </div>

            <div className="overflow-hidden p-0.5 mt-6 border rounded-lg ">
              <div className="sm:-mx-0.5 flex">
                <button
                  className={`focus:outline-none px-3 w-1/2 sm:w-auto py-1 sm:mx-0.5 rounded-lg transition-colors duration-300 ease-in-out ${
                    isMonthly
                      ? "bg-indigo-700 text-white"
                      : "bg-transparent text-gray-800 hover:bg-gray-200"
                  }`}
                  onClick={() => setIsMonthly(true)}
                >
                  Monthly
                </button>
                <button
                  className={` focus:outline-none px-3 w-1/2 sm:w-auto py-1 sm:mx-0.5 rounded-lg transition-colors duration-300 ease-in-out  ${
                    !isMonthly
                      ? "bg-indigo-700 text-white"
                      : "bg-transparent text-gray-800 hover:bg-gray-200"
                  }`}
                  onClick={() => setIsMonthly(false)}
                >
                  Yearly
                </button>
              </div>
            </div>
          </div>

          <div className="grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {planning.map((item, index) => (
              <div
                key={index}
                className={`px-6 py-4 transition-colors duration-300 transform border rounded-lg hover:bg-gray-200 ${
                  item.popular ? "border-indigo-700" : "border-gray-200"
                }`}
              >
                <p className="text-lg font-medium text-gray-800 ">
                  {item.name}
                </p>

                <h4 className="mt-2 text-3xl font-semibold text-gray-800 ">
                  {isMonthly ? "$" + item.moPrice : "$" + item.yrPrice}{" "}
                  <span className="text-base font-normal text-gray-600">
                    / {isMonthly ? "Month" : "Year"}
                  </span>
                </h4>

                <p className="mt-4 text-gray-500 ">{item.desc}</p>

                <div className="mt-8 space-y-8">
                  {item.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-indigo-700"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-700 ">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-5 text-gray-600 py-14">
        <div className="">
          <div className="relative max-w-xl px-4 mx-auto space-y-3 sm:text-center md:px-0">
            <p className="text-3xl font-semibold text-gray-800 sm:text-4xl">
              Compare our plans and find yours
            </p>
            <div className="max-w-xl">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                efficitur consequat nunc.
              </p>
            </div>
          </div>
          <div className="mt-16">
            {/* Sticky header */}
            <div className="sticky top-0 py-6 bg-white border-b">
              <div className="max-w-screen-xl mx-auto">
                <ul className="flex justify-around px-4 ml-auto gap-x-6 md:px-8 lg:max-w-[850px] 3xl:max-w-[900px] xl:max-w-5xl">
                  {plans.map((item, idx) => (
                    <li
                      key={idx}
                      className={`space-y-4 w-full ${
                        item.name != selectedPlan ? "hidden lg:block" : ""
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-700">
                          {item.name}
                        </span>
                        <div className="relative lg:hidden">
                          <svg
                            className="absolute inset-y-0 right-0 w-5 h-5 my-auto text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <select
                            value={selectedPlan}
                            className="px-8 bg-transparent outline-none appearance-none cursor-pointer"
                            onChange={(e) => setSelectedPlan(e.target.value)}
                          >
                            <option value="" disabled>
                              Switch plan
                            </option>
                            {plans.map((option, idx) => (
                              <option key={idx} value={option.name}>
                                {option.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="text-3xl font-semibold text-gray-800">
                        ${item.price}{" "}
                        <span className="text-xl font-normal text-gray-600">
                          /mo
                        </span>
                      </div>
                      <p className="text-sm">{item.desc}</p>
                      <button className="w-full px-3 py-3 text-sm font-semibold text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700">
                        Get Started
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Feature table */}
            <div className="max-w-screen-xl px-4 mx-auto mt-10 space-y-4 overflow-auto md:overflow-visible md:px-8">
              {tables.map((table, idx) => (
                <table
                  key={idx}
                  className="w-full text-sm text-left table-auto"
                >
                  <thead className="font-medium text-gray-600 border-b">
                    <tr>
                      <th className="z-20 py-6 top-12 lg:sticky">
                        <div className="flex items-center gap-x-3">
                          <div className="flex items-center justify-center w-12 h-12 text-indigo-600 border rounded-full">
                            {table.label_icon}
                          </div>
                          <h4 className="text-xl font-medium text-gray-800">
                            {table.label}
                          </h4>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 divide-y">
                    {table.items.map((item, idx) => (
                      <tr key={idx}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.name}
                        </td>
                        {/* For large devices */}
                        <td className="text-center w-[250px] px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                          {item.free}
                        </td>
                        <td className="text-center w-[250px] px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                          {item.basic}
                        </td>
                        <td className="text-center w-[250px] px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                          {item.business}
                        </td>
                        <td className="text-center w-[250px] px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                          {item.enterprise}
                        </td>
                        {/* For small devices */}
                        <td className="text-center w-[250px] px-6 py-4 whitespace-nowrap lg:hidden">
                          {item[selectedPlan.toLowerCase() as PlanKey]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FaqsCard />
    </>
  );
}
