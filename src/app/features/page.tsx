import Link from "next/link";

const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10 sm:w-16 sm:h-16"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
    title: "Fast Refresh",
    desc: "Keep your data live and workflows fluid with real-time updates across inventory, inquiries, and reporting modules.",
    href: "/features/fast-refresh",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10 sm:w-16 sm:h-16"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
        />
      </svg>
    ),
    title: "Analytics",
    desc: "Gain insights that drive smarter decisions. Visualize business performance with customizable dashboards and clean data views.",
    href: "/features/analytics",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10 sm:w-16 sm:h-16"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
    title: "Report",
    desc: "Your data shouldn’t just sit in tables it should guide your next move. Our reporting engine transforms raw numbers into clear insights.",
    href: "/features/reports",
  },
  // {
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       fill="none"
  //       viewBox="0 0 24 24"
  //       strokeWidth={1.5}
  //       stroke="currentColor"
  //       className="w-10 h-10 sm:w-16 sm:h-16"
  //     >
  //       <path
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
  //       />
  //     </svg>
  //   ),
  //   title: "Datacenter security",
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.",
  //   href: "/features/datacenter-security",
  // },
  // {
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       fill="none"
  //       viewBox="0 0 24 24"
  //       strokeWidth={1.5}
  //       stroke="currentColor"
  //       className="w-10 h-10 sm:w-16 sm:h-16"
  //     >
  //       <path
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
  //       />
  //     </svg>
  //   ),
  //   title: "Build on your terms",
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.",
  //   href: "/features/build-on-your-terms",
  // },
  // {
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       fill="none"
  //       viewBox="0 0 24 24"
  //       strokeWidth={1.5}
  //       stroke="currentColor"
  //       className="w-10 h-10 sm:w-16 sm:h-16"
  //     >
  //       <path
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
  //       />
  //     </svg>
  //   ),
  //   title: "Safe to use",
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.",
  //   href: "/features/safe-to-use",
  // },
  // {
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       fill="none"
  //       viewBox="0 0 24 24"
  //       strokeWidth={1.5}
  //       stroke="currentColor"
  //       className="w-10 h-10 sm:w-16 sm:h-16"
  //     >
  //       <path
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
  //       />
  //     </svg>
  //   ),
  //   title: "Flexible",
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.",
  //   href: "/features/flexible",
  // },
];

export default function Features() {
  return (
    <section className="mx-auto text-gray-800 mt-0.5 bg-white">
      <div className="p-6 py-12 rounded-lg bg-indigo-50">
        <h1 className="mb-10 text-4xl font-bold text-center text-indigo-700">
          Features
        </h1>
        <p className="max-w-5xl mx-auto mb-6 text-center">
          Everything you need to build, grow, and manage your application
          effortlessly.
        </p>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-12 pb-10 mx-auto mb-10 border-b border-gray-200 lg:w-3/5 sm:flex-row"
            >
              {index % 2 === 0 && (
                <div className="inline-flex items-center justify-center flex-shrink-0 order-first w-20 h-20 text-[280px] text-indigo-500 bg-indigo-100 rounded-full sm:w-32 sm:order-none sm:h-32 sm:ml-10">
                  {feature.icon}
                </div>
              )}
              <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
                <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">
                  {feature.title}
                </h2>
                <p className="text-base leading-relaxed">{feature.desc}</p>
                <Link
                  href={feature.href}
                  className="inline-flex items-center mt-3 text-indigo-500"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              {!(index % 2 === 0) && (
                <div className="inline-flex items-center justify-center flex-shrink-0 order-first w-20 h-20 text-[280px] text-indigo-500 bg-indigo-100 rounded-full sm:w-32 sm:order-none sm:h-32 sm:ml-10">
                  {feature.icon}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
