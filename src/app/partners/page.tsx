const levels = [
  {
    title: "Gold",
    desc: "Our highest tier, offering unparalleled benefits and support for our most committed partners.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 256 256" fill="currentColor">
        <path d="M232,64H208V56a16,16,0,0,0-16-16H64A16,16,0,0,0,48,56v8H24A16,16,0,0,0,8,80V96a40,40,0,0,0,40,40h3.65A80.13,80.13,0,0,0,120,191.61V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.58c31.94-3.23,58.44-25.64,68.08-55.58H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM48,120A24,24,0,0,1,24,96V80H48v32q0,4,.39,8Zm144-8.9c0,35.52-28.49,64.64-63.51,64.9H128a64,64,0,0,1-64-64V56H192ZM232,96a24,24,0,0,1-24,24h-.5a81.81,81.81,0,0,0,.5-8.9V80h24Z" />
      </svg>
    ),
  },
  {
    title: "Silver",
    desc: "A mid-tier level providing significant advantages and resources for growing partners.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 256 256" fill="currentColor">
        <path d="M216,96A88,88,0,1,0,72,163.83V240a8,8,0,0,0,11.58,7.16L128,225l44.43,22.21A8.07,8.07,0,0,0,176,248a8,8,0,0,0,8-8V163.83A87.85,87.85,0,0,0,216,96ZM56,96a72,72,0,1,1,72,72A72.08,72.08,0,0,1,56,96ZM168,227.06l-36.43-18.21a8,8,0,0,0-7.16,0L88,227.06V174.37a87.89,87.89,0,0,0,80,0ZM128,152A56,56,0,1,0,72,96,56.06,56.06,0,0,0,128,152Zm0-96A40,40,0,1,1,88,96,40,40,0,0,1,128,56Z" />
      </svg>
    ),
  },
  {
    title: "Bronze",
    desc: "Our entry-level tier, offering foundational benefits and support to get you started.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 256 256" fill="currentColor">
        <path d="M235.33,116.72,139.28,20.66a16,16,0,0,0-22.56,0l-96,96.06a16,16,0,0,0,0,22.56l96.05,96.06h0a16,16,0,0,0,22.56,0l96.05-96.06a16,16,0,0,0,0-22.56ZM128,224h0L32,128,128,32,224,128Z" />
      </svg>
    ),
  },
];

const benefits = [
  {
    title: "Dedicated Support",
    desc: "Receive personalized assistance from our dedicated partner success team.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 256 256" fill="currentColor">
        <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z" />
      </svg>
    ),
  },
  {
    title: "Marketing Resources",
    desc: "Access a library of marketing materials and campaigns to promote your services.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 256 256" fill="currentColor">
        <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z" />
      </svg>
    ),
  },
  {
    title: "Co-Selling Opportunities",
    desc: "Collaborate with us on sales opportunities and close deals faster.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 256 256" fill="currentColor">
        <path d="M119.76,217.94A8,8,0,0,1,112,224a8.13,8.13,0,0,1-2-.24l-32-8a8,8,0,0,1-2.5-1.11l-24-16a8,8,0,1,1,8.88-13.31l22.84,15.23,30.66,7.67A8,8,0,0,1,119.76,217.94Zm132.69-96.46a15.89,15.89,0,0,1-8,9.25l-23.68,11.84-55.08,55.09a8,8,0,0,1-7.6,2.1l-64-16a8.06,8.06,0,0,1-2.71-1.25L35.86,142.87,11.58,130.73a16,16,0,0,1-7.16-21.46L29.27,59.58h0a16,16,0,0,1,21.46-7.16l22.06,11,53-15.14a8,8,0,0,1,4.4,0l53,15.14,22.06-11a16,16,0,0,1,21.46,7.16l24.85,49.69A15.9,15.9,0,0,1,252.45,121.48Zm-46.18,12.94L179.06,80H147.24L104,122c12.66,8.09,32.51,10.32,50.32-7.63a8,8,0,0,1,10.68-.61l34.41,27.57Zm-187.54-18,17.69,8.85L61.27,75.58,43.58,66.73ZM188,152.66l-27.71-22.19c-19.54,16-44.35,18.11-64.91,5a16,16,0,0,1-2.72-24.82.6.6,0,0,1,.08-.08L137.6,67.06,128,64.32,77.58,78.73,50.21,133.46l49.2,35.15,58.14,14.53Zm49.24-36.24L212.42,66.73l-17.69,8.85,24.85,49.69Z" />
      </svg>
    ),
  },
  {
    title: "Security & Compliance",
    desc: "Benefit from our robust security measures and compliance certifications.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 256 256" fill="currentColor">
        <path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z" />
      </svg>
    ),
  },
  {
    title: "Fast Onboarding",
    desc: "Get up and running quickly with our streamlined onboarding process.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 256 256" fill="currentColor">
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128" />
      </svg>
    ),
  },
  {
    title: "Revenue Sharing",
    desc: "Earn a percentage of revenue from referred customers.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 256 256" fill="currentColor">
        <path d="M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-40,0a32,32,0,0,1,0-64h8v64Zm40,80H136V136h16a32,32,0,0,1,0,64Z" />
      </svg>
    ),
  },
];

export default function Partners() {
  return (
    <div
      className="relative flex flex-col min-h-screen overflow-x-hidden bg-white group/design-root"
      // style={{ fontFamily: 'Newsreader, "Noto Sans", sans-serif' }}
    >
      <div className="flex flex-col h-full layout-container grow">
        <main className="flex justify-center flex-1 px-2 py-5 sm:px-4 md:px-10 lg:px-40">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Hero section */}
            <div className="">
              <div className="sm:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat sm:gap-8 sm:rounded-xl items-center justify-center p-4"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJ0BfZUob30fmQXNE8wwZMKqOwHTIYaXOanUiOSwDbUsDdu8Zr-ovWXCS7Kou30vh2oTX6I-VK9k8BZY3DuG3lm4oLUICQ8QY8JH5odYRldpIcfqpOUus6JmnU6FHhWFtH1yIrMzWv82WM0Kzs331fv3-w4k6NCA5hYYwe--6myrEN7oL_qT4tPmdTdpZKeZZnt-x9QmJCVGT3bQSbWtcwWjGkgKNnFUJHuv49A8m6nx1KbB3gl6ONAP7KMxwKmxenIZKAXQYy6QQ")',
                  }}
                >
                  <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl sm:font-black sm:leading-tight sm:tracking-[-0.033em]">
                      Innovate Partner Program
                    </h1>
                    <h2 className="text-sm font-normal leading-normal text-white sm:text-base sm:font-normal sm:leading-normal">
                      Join our partner program and unlock exclusive benefits,
                      resources, and support to help you grow your business and
                      reach new heights.
                    </h2>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] items-center justify-center rounded-full h-10 px-4 sm:h-12 sm:px-5 bg-[#442dd7] text-white text-sm font-bold sm:text-base">
                    <span className="truncate">Join Now</span>
                  </button>
                </div>
              </div>
            </div>

            <section className="text-left">
              {/* Partner Program Levels */}
              <h2 className="text-[#121217] text-[22px] font-bold px-4 pt-6">
                Partner Program Levels
              </h2>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                {levels.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-3 p-4 rounded-lg border border-[#dddce5] bg-white"
                  >
                    <div className="text-[#121217]">{item.icon}</div>
                    <div>
                      <h3 className="text-[#121217] text-base font-bold leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-[#696586] text-sm leading-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Benefits */}
              <h2 className="text-[#121217] text-[22px] font-bold px-4 pt-6">
                Benefits
              </h2>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                {benefits.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-3 p-4 rounded-lg border border-[#dddce5] bg-white"
                  >
                    <div className="text-[#121217]">{item.icon}</div>
                    <div>
                      <h3 className="text-[#121217] text-base font-bold leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-[#696586] text-sm leading-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center px-4 py-3">
                <button className="flex min-w-[84px] max-w-[480px] items-center justify-center rounded-full h-12 px-5 bg-[#442dd7] text-white text-base font-bold">
                  <span className="truncate">Join Now</span>
                </button>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
