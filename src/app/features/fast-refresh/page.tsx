import Link from "next/link";

export default function FastRefresh() {
  return (
    <section className="bg-white text-gray-800 mx-auto">
      <div className="bg-indigo-50 rounded-lg px-6 py-10">
        <h1 className="text-4xl font-bold text-indigo-700 text-center mb-10">
          Fast Refresh
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
                  Fast Refresh
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* fast refresh content */}

      <div
        className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden"
        style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
      >
        <div className="layout-container flex h-full grow flex-col">
          <div className=" px-2 sm:px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <p className="text-[#0d151c] tracking-light text-[32px] font-bold leading-tight min-w-72">
                  Fast Refresh
                </p>
              </div>
              <p className="text-[#0d151c] text-base font-normal leading-normal pb-3 pt-1 px-4">
                Fast Refresh is a feature that allows you to get instant
                feedback on your edits to React components. It works by
                preserving the component state and only updating the parts of
                the UI that have changed. This results in a faster development
                experience and improved productivity.
              </p>
              <h2 className="text-[#0d151c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Benefits of Fast Refresh
              </h2>
              <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2">
                <div
                  className="text-[#0d151c] flex items-center justify-center rounded-lg bg-[#e7edf4] shrink-0 size-12"
                  data-icon="Clock"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#0d151c] text-base font-medium leading-normal line-clamp-1">
                    Instant Feedback
                  </p>
                  <p className="text-[#49749c] text-sm font-normal leading-normal line-clamp-2">
                    UI updates in real-time as you save your changes
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2">
                <div
                  className="text-[#0d151c] flex items-center justify-center rounded-lg bg-[#e7edf4] shrink-0 size-12"
                  data-icon="Bookmark"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,16V161.57l-51.77-32.35a8,8,0,0,0-8.48,0L72,161.56V48ZM132.23,177.22a8,8,0,0,0-8.48,0L72,209.57V180.43l56-35,56,35v29.14Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#0d151c] text-base font-medium leading-normal line-clamp-1">
                    Preserved Component State
                  </p>
                  <p className="text-[#49749c] text-sm font-normal leading-normal line-clamp-2">
                    Maintains inputs and scroll position during updates
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2">
                <div
                  className="text-[#0d151c] flex items-center justify-center rounded-lg bg-[#e7edf4] shrink-0 size-12"
                  data-icon="RocketLaunch"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M103.77,185.94C103.38,187.49,93.63,224,40,224a8,8,0,0,1-8-8c0-53.63,36.51-63.38,38.06-63.77a8,8,0,0,1,3.88,15.53c-.9.25-22.42,6.54-25.56,39.86C81.7,204.48,88,183,88.26,182a8,8,0,0,1,15.51,4Zm93-67.4L192,123.31v58.33A15.91,15.91,0,0,1,187.32,193L153,227.3A15.91,15.91,0,0,1,141.7,232a16.11,16.11,0,0,1-5.1-.83,15.94,15.94,0,0,1-10.78-12.92l-5.37-38.49L76.24,135.55l-38.47-5.37A16,16,0,0,1,28.7,103L63,68.68A15.91,15.91,0,0,1,74.36,64h58.33l4.77-4.77c26.68-26.67,58.83-27.82,71.41-27.07a16,16,0,0,1,15,15C224.6,59.71,223.45,91.86,196.78,118.54ZM40,114.34l37.15,5.18L116.69,80H74.36ZM91.32,128,128,164.68l57.45-57.45a76.46,76.46,0,0,0,22.42-59.16,76.65,76.65,0,0,0-59.11,22.47ZM176,139.31l-39.53,39.53L141.67,216,176,181.64Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#0d151c] text-base font-medium leading-normal line-clamp-1">
                    Improved Developer Productivity
                  </p>
                  <p className="text-[#49749c] text-sm font-normal leading-normal line-clamp-2">
                    Faster development cycles and reduced waiting time
                  </p>
                </div>
              </div>
              <h2 className="text-[#0d151c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                How Fast Refresh Works
              </h2>
              <p className="text-[#0d151c] text-base font-normal leading-normal pb-3 pt-1 px-4">
                Fast Refresh uses a combination of techniques to achieve its
                speed and efficiency. It leverages React&apos;s component tree
                structure to identify the minimal set of updates required. It
                also uses a caching mechanism to avoid unnecessary re-renders.
                Here&apos;s a simplified overview:
              </p>
              <div className="flex w-full grow bg-slate-50 @container p-4">
                <div className="w-full gap-1 overflow-hidden bg-slate-50 @md:gap-2 aspect-[3/2] rounded-xl flex">
                  <div
                    className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none flex-1"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDY4FiuSghgBBM9xlnvBmTX1db4Sdse8iNkN75XKgFoxZtZEQh55SJxMB5tyJO7NYCvpu4tNRLv9AGUdTWMNsY9IByDew1X2oS8ImVj2atYetUcv74599t1Puxmqf0rvz6EB39s6ADa-NgA6eJTmoLh5sYDATLWwrbdivh13IpRwoj3aktPhF4Lp7r02Hg2UU0bQhdaiaqagZovpmLwAJhsP8pbKu9XwXc7JQZw62W9Op8X0xMzdv2CYOzr2jeSz5o7n88fAwfomt3w")',
                    }}
                  ></div>
                </div>
              </div>
              <p className="text-[#0d151c] text-base font-normal leading-normal pb-3 pt-1 px-4">
                When you save a file, Fast Refresh analyzes the changes and
                determines which components need to be updated. It then sends a
                signal to the browser to re-render those components. The browser
                applies the updates without reloading the entire page,
                preserving the state of other components.
              </p>
              <h2 className="text-[#0d151c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Getting Started with Fast Refresh
              </h2>
              <p className="text-[#0d151c] text-base font-normal leading-normal pb-3 pt-1 px-4">
                Fast Refresh is enabled by default in new Acme Co projects. If
                you&apos;re using an older version, you can enable it by
                following the instructions in our documentation. Ensure you have
                the latest version of React and Acme Co installed to take full
                advantage of Fast Refresh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
