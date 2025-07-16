import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://letstranzact.com/_nuxt/img/multi-bom-snap.f117b72.svg",
  "https://letstranzact.com/_nuxt/img/process-trk-snap.32383b7.svg",
  "https://letstranzact.com/_nuxt/img/costing-snap.337ef83.svg",
  "https://letstranzact.com/_nuxt/img/scrap-trk-snap.f0399d1.svg",
  "https://letstranzact.com/_nuxt/img/subcontract-snap.f2d12d6.svg",
];

const productionTab = [
  {
    title: "Multi-Level BOM",
    desc: (
      <>
        Upload <span className="text-primary">complex recipes</span> (e.g. BOMs
        inside BOMs) of your finished goods easily
      </>
    ),
    img: "https://letstranzact.com/_nuxt/img/multi-bom-snap.f117b72.svg",
  },
  {
    title: "Process Tracking",
    desc: (
      <>
        <span className="text-primary">Track the status</span> of all your
        production processes at a{" "}
        <span className="text-primary">single place</span> to never miss your
        deadlines
      </>
    ),
    img: "https://letstranzact.com/_nuxt/img/process-trk-snap.32383b7.svg",
  },
  {
    title: "Costing",
    desc: (
      <>
        Easily calculate the <span className="text-primary">net cost</span> of
        your Bill of Materials and Production Processes to continuously reduce
        it
      </>
    ),
    img: "https://letstranzact.com/_nuxt/img/costing-snap.337ef83.svg",
  },
  {
    title: "Scrap Tracking",
    desc: (
      <>
        Efficiently track the{" "}
        <span className="text-primary">scrap wastage</span> and accurately
        measure its costing.
      </>
    ),
    img: "https://letstranzact.com/_nuxt/img/scrap-trk-snap.f0399d1.svg",
  },
  {
    title: "Subcontracting",
    desc: (
      <>
        <span className="text-primary">Need to outsource</span> a part of your
        production? Track the status and measure the costing of your
        subcontracts seamlessly
      </>
    ),
    img: "https://letstranzact.com/_nuxt/img/subcontract-snap.f2d12d6.svg",
  },
];

const inventoryTab = [
  {
    title: "Inventory",
    features: [
      {
        desc: "Stock Update Automation",
        img: "https://letstranzact.com/_nuxt/img/stock-update.f31b507.svg",
        bgColor: "bg-yellow-100",
      },
      {
        desc: "Stock Valuation, History and Ageing",
        img: "	https://letstranzact.com/_nuxt/img/stock-valuation.ccd0dfd.svg",
        bgColor: "bg-green-100",
      },
      {
        desc: "Automatic Alerts and Reminders",
        img: "https://letstranzact.com/_nuxt/img/automatic-alerts.00638e8.svg",
        bgColor: "bg-blue-100",
      },
    ],
  },
  {
    title: "Production",
    features: [
      {
        desc: "End-to-end Process Tracking",
        img: "https://letstranzact.com/_nuxt/img/end-to-end.e32670e.svg",
        bgColor: "bg-green-100",
      },
      {
        desc: "Production Costing & Scrap Tracking",
        img: "https://letstranzact.com/_nuxt/img/production-costing.30de19a.svg",
        bgColor: "bg-yellow-100",
      },
      {
        desc: "Subcontract Management",
        img: "	https://letstranzact.com/_nuxt/img/subcontract-management.c27dc53.svg",
        bgColor: "bg-blue-100",
      },
    ],
  },
  {
    title: "Planning",
    features: [
      {
        desc: "One-click MRP Reports",
        img: "https://letstranzact.com/_nuxt/img/one-click-mrp.6da8c39.svg",
        bgColor: "bg-yellow-100",
      },
      {
        desc: "Purchase Requisition (Indent) Tracking",
        img: "	https://letstranzact.com/_nuxt/img/purchase-requisition.a3691a2.svg",
        bgColor: "bg-green-100",
      },
      {
        desc: "Easy Made-to-Order Planning",
        img: "	https://letstranzact.com/_nuxt/img/easy-made-to-order.7fe6c29.svg",
        bgColor: "bg-blue-100",
      },
    ],
  },
  {
    title: "Sales & Purchase",
    features: [
      {
        desc: "Advanced Lead Management",
        img: "https://letstranzact.com/_nuxt/img/advanced-lead.c0e45bb.svg",
        bgColor: "bg-blue-100",
      },
      {
        desc: "16+ Documents Transaction Timeline",
        img: "	https://letstranzact.com/_nuxt/img/documents-transaction.654592c.svg",
        bgColor: "bg-green-100",
      },
      {
        desc: "Gmail/WhatsApp Integration",
        img: "	https://letstranzact.com/_nuxt/img/gmail-whatsapp.fa76d4c.svg",
        bgColor: "bg-yellow-100",
      },
    ],
  },
  {
    title: "Payments",
    features: [
      {
        desc: "Log Payments against Invoices",
        img: "	https://letstranzact.com/_nuxt/img/log-payments.636f9f3.svg",
        bgColor: "bg-yellow-100",
      },
      {
        desc: "Effortless & Error-free Payouts",
        img: "https://letstranzact.com/_nuxt/img/effortless-error-free.4362e4d.svg",
        bgColor: "bg-green-100",
      },
      {
        desc: "Automated Payment Reminders",
        img: "https://letstranzact.com/_nuxt/img/automated-payment.3e99049.svg",
        bgColor: "bg-blue-100",
      },
    ],
  },
  {
    title: "Accounting",
    features: [
      {
        desc: "Integration with Tally, Busy & Zoho",
        img: "	https://letstranzact.com/_nuxt/img/integration-tally.b7c08ec.svg",
        bgColor: "bg-green-100",
      },
      {
        desc: "8+ Accounting Reports",
        img: "https://letstranzact.com/_nuxt/img/accounting-reports.95bb5f4.svg",
        bgColor: "bg-blue-100",
      },
      {
        desc: "Import Master Data from Tally",
        img: "	https://letstranzact.com/_nuxt/img/import-master-data.f1d09e3.svg",
        bgColor: "bg-yellow-100",
      },
    ],
  },
];

export default function Features2() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeTab2, setActiveTab2] = useState(0);
  return (
    <>
      <section className="py-10 mt-5">
        {/* heading */}
        <div className="px-4 lg:mx-16 mb-4">
          <div className="flex flex-col sm:flex-row items-center justify-center text-center gap-4 mb-5">
            {/* Gradient Line Left */}
            <div className="w-full sm:w-32 md:w-40 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
            <h1 className="text-xl md:text-2xl font-semibold text-gray-800 px-4">
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                One-stop solution
              </span>{" "}
              for all your Production Management needs
            </h1>
            {/* Gradient Line Right */}
            <div className="w-full sm:w-32 md:w-40 h-[2px] bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500" />
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto py-10 px-4">
          {/* Tabs */}
          <div className="relative z-10 flex w-full max-w-5xl justify-center mb-5 md:mb-[-20px]">
            <div className="w-full overflow-x-auto scrollbar-none">
              <div className="w-fit mx-auto flex flex-nowrap justify-center gap-4 border border-indigo-100 rounded-full px-4 bg-white shadow-sm whitespace-nowrap">
                {productionTab.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`cursor-pointer flex flex-col items-center px-3 sm:px-4 py-2 text-base text-center transition-all duration-300 ease-in-out ${
                      activeTab === index
                        ? "border-b border-indigo-500 text-indigo-700 font-semibold"
                        : "border-none bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="border border-indigo-500 rounded-4xl px-6 pt-16 pb-12 text-center bg-indigo-50 relative z-0 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="space-y-6"
              >
                <h3 className="text-lg md:text-xl text-gray-700 font-medium">
                  {productionTab[activeTab].desc}
                </h3>
                <img
                  src={productionTab[activeTab].img}
                  alt={productionTab[activeTab].title}
                  className="mx-auto max-w-full h-auto"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Button */}
        <div className="text-center my-5">
          <a
            href="#"
            button-name="Start Production Planning Now"
            className="inline-block bg-indigo-600 text-white font-medium text-sm px-6 py-3 rounded-md shadow-md hover:bg-indigo-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="cta-text">Start Production Planning Now</span>
          </a>
        </div>
      </section>

      <section className="py-10 mt-5">
        {/* heading */}
        <div className="px-4 lg:mx-16 mb-4">
          <div className="flex flex-col sm:flex-row items-center justify-center text-center gap-4 mb-5">
            {/* Gradient Line Left */}
            <div className="w-full sm:w-32 md:w-40 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
            <h1 className="text-xl md:text-2xl font-semibold text-gray-800 px-4">
              Transform your business with{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                TranZact&apos;s full suite
              </span>{" "}
              of solutions
            </h1>
            {/* Gradient Line Right */}
            <div className="w-full sm:w-32 md:w-40 h-[2px] bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500" />
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto py-10 px-4">
          {/* Tabs */}
          <div className="relative z-10 flex w-full max-w-5xl justify-center mb-5">
            <div className="w-full overflow-x-auto scrollbar-none">
              <div className="w-fit mx-auto flex flex-nowrap justify-center gap-4 border border-indigo-100 rounded-full px-4 bg-white shadow-sm whitespace-nowrap">
                {productionTab.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab2(index)}
                    className={`cursor-pointer flex flex-col items-center px-3 sm:px-4 py-2 text-base text-center transition-all duration-300 ease-in-out ${
                      activeTab2 === index
                        ? "border-b border-indigo-500 text-indigo-700 font-semibold"
                        : "border-none bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="relative mt-6 max-w-screen-xl mx-auto overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab2} // triggers animation when tab changes
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {inventoryTab[activeTab2]?.features.map((card, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between gap-4 p-4 rounded-lg font-semibold ${card.bgColor}`}
                  >
                    <div className="text-center md:text-left text-base max-w-xs">
                      {card.desc}
                    </div>
                    <img
                      src={card.img}
                      alt="card visual"
                      className="max-h-24 md:max-h-28 w-auto"
                    />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="py-10">
        {/* heading */}
        <div className="px-4 lg:mx-16 mb-4">
          <div className="flex flex-col sm:flex-row items-center justify-center text-center gap-4 mb-5">
            {/* Gradient Line Left */}
            <div className="w-full sm:w-32 md:w-40 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
            <h1 className="text-xl md:text-2xl font-semibold text-gray-800 px-4">
              Implementation & after-sales support
            </h1>
            {/* Gradient Line Right */}
            <div className="w-full sm:w-32 md:w-40 h-[2px] bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500" />
          </div>
        </div>

        <div className="bg-indigo-50 py-5 mt-12">
          {/* Content */}
          <div className="max-w-[1200px] py-10 mt-5 mx-auto flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-4 my-6">
            {/* Block 1 */}
            <div className="flex flex-col items-center text-center mb-5 sm:mb-0 sm:w-5/12">
              <img
                src="https://letstranzact.com/_nuxt/img/14-days.7f52fbc.svg"
                alt="Go Live in 14 Days"
                className="mb-3"
              />
              <h2 className="text-xl sm:text-2xl font-semibold">
                Go Live in
                <br className="hidden sm:block" /> 14 Days!
              </h2>
            </div>

            {/* Block 2 */}
            <div className="flex flex-col items-center text-center mb-5 sm:mb-0 sm:px-0 sm:w-5/12">
              <img
                src="	https://letstranzact.com/_nuxt/img/free-impl.2ba8ea9.svg"
                alt="Free Implementation"
                className="mb-3"
              />
              <h2 className="text-xl sm:text-2xl font-semibold">
                Free Implementation
                <br />
                <span className="hidden sm:inline">&amp; Training</span>
              </h2>
            </div>

            {/* Block 3 */}
            <div className="flex flex-col items-center text-center mb-5 sm:mb-0 sm:w-5/12">
              <img
                src="	https://letstranzact.com/_nuxt/img/free-impl.2ba8ea9.svg"
                alt="Free Chat Support"
                className="mb-3"
              />
              <h2 className="hidden sm:inline text-xl sm:text-2xl font-semibold">
                Free Chat Support
                <br /> within 10 seconds
              </h2>
              <h2 className="sm:hidden text-xl font-semibold">
                Instant Support
              </h2>
            </div>
          </div>

          {/* Button */}
          <div className="text-center my-5">
            <a
              href="#"
              button-name="Start Production Planning Now"
              className="inline-block bg-indigo-600 text-white font-medium text-sm px-6 py-3 rounded-md shadow-md hover:bg-indigo-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="cta-text">Start Production Planning Now</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
