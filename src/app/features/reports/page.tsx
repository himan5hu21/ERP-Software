"use client";
import Link from "next/link";
import {
  Activity,
  BarChart3,
  CheckCircle,
  GitCompare,
  ShieldCheck,
  Star,
  TrendingUp,
  Truck,
  Users,
} from "lucide-react";
import { useState } from "react";

const reportFeatures = [
  {
    title: "Reports & Analytic Dashboards",
    description:
      "Provides a range of reports and dashboards for analyzing various aspects of the manufacturing process",
    icon: <BarChart3 className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: "Process/Production Reports",
    description:
      "Detailed reports on the production processes help identify bottlenecks and optimize workflows",
    icon: <Activity className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: "Sales Reports",
    description:
      "Generates reports on sales performance, customer behavior, and market trends to support strategic decision-making.",
    icon: <TrendingUp className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: "Quality Control Report",
    description:
      "Monitor and evaluate the adherence to quality standards at various stages of production and flag quality issues",
    icon: <CheckCircle className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: "Comparative Reports",
    description:
      "Compare sales and profitability across different products, and periods, providing insights for strategic planning.",
    icon: <GitCompare className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: "Dispatch Reports",
    description:
      "Monitors and reports on the dispatch of finished goods, ensuring timely and accurate deliveries.",
    icon: <Truck className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: "Compliance Reporting",
    description:
      "Tracks compliance metrics and helps avoid penalties. Reports on industry-specific compliance measures.",
    icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: "Supplier/Vendor Reports",
    description:
      "Real-time reports on negotiations, performance, and collaborations with suppliers and vendors",
    icon: <Users className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: "Brand Analysis Report",
    description:
      "Analyzes the performance of different product brands in the market, helping in strategic brand management.",
    icon: <Star className="w-6 h-6 text-indigo-600" />,
  },
];

export default function Report() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="bg-indigo-50 rounded-lg px-6 py-10">
        <h1 className="text-4xl font-bold text-indigo-700 text-center mb-10">
          Reports
        </h1>

        <nav className="flex justify-center" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-indigo-700 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <Link
                  href="/features"
                  className="ms-1 text-sm font-medium text-gray-700 hover:text-indigo-700 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                >
                  Features
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                  Reports
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="relative max-w-2xl mx-auto sm:text-center">
            <div className="relative z-10">
              <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Let&apos;s help power your SaaS
              </h3>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                congue, nisl eget molestie varius, enim ex faucibus purus.
              </p>
            </div>
            <div
              className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]"
              style={{
                background:
                  "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
              }}
            ></div>
          </div>
          <div className="relative mt-12">
            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-start">
              {reportFeatures.map((item, idx) => (
                <FeatureItem
                  key={idx}
                  item={item}
                  isOpen={openIndex === idx}
                  onClick={() => handleToggle(idx)}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

interface FeatureItemProps {
  item: {
    icon: React.ReactNode;
    title: string;
    description: string;
  };
  isOpen: boolean;
  onClick: () => void;
}

function FeatureItem({ item, isOpen, onClick }: FeatureItemProps) {
  return (
    <li
      className="bg-white p-4 border rounded-lg group transition-all duration-500 ease-in-out overflow-hidden cursor-pointer"
      onClick={onClick} // click for mobile
    >
      <div className="flex gap-5 items-center justify-start">
        <span className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-50">
          {item.icon}
        </span>
        <h4 className="text-lg text-gray-800 font-semibold mb-2 my-auto">
          {item.title}
        </h4>
      </div>

      <div
        className={`
          transition-all duration-500 ease-in-out overflow-hidden
          ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
          md:group-hover:max-h-[500px] md:group-hover:opacity-100
        `}
      >
        <p className="text-gray-600 mt-2">{item.description}</p>
      </div>
    </li>
  );
}
