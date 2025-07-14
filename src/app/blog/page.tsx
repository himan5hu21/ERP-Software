const posts = [
  {
    title: "The Future of AI in Software Development",
    desc: "Explore how AI is transforming software development, enhancing productivity, and creating new possibilities.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDhbILeblkvqdzYWI57OLR3mJiIn50BN5hmEgeEinvtYssaM-W0xihVjJDmWa6MZhYuc-fjbjNmb6_uxgoyY9BZNENcSAQ-rC6qVS5JKVplpN99MjqTHxAsdtic0egBLf1eStJmSpt8UDPxquCRpCYuzWCUdIKVaSZeam-yE_PO0TyF510qxo00HLMZGnVFgPBWE1NfSRO94iKa3Gl2R8SbZu13bnJtH9JcK4By7xcKF2wXVN5Gs010SokMyquxZerymLrZyFNZuLE",
    date: "July 14, 2025",
  },
  {
    title: "Mastering React Hooks: A Comprehensive Guide",
    desc: "Learn to use React Hooks for managing state and effects, with examples and best practices.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALyDThlgaoSUahy-dJDu2zKWHnoyWs5-biEqkxcTCAUjwiMEO1uDkIZyO5Bcm60fRZ5eIBv5XgNJmRy6n8hm8-RYl8vPRI0vs-oSWc1OywyXBSH2jYkTIgvk8iY-3-cmWi2eYkpzXue_9g2JTv9G1PVIXJoi9x-bL2jy0A1Tbn9WwzzO-H4gkUR09bJOaa-JsDJ8i59HiqQpx_VPKeeYVb15c1aCzvD3nmLJ_IRdqKbxIxO-uYqGzzN4xZvTpElArTq3seEKcGc4k",
    date: "July 12, 2025",
  },
  {
    title: "Building Scalable APIs with Node.js and Express",
    desc: "Discover how to build scalable APIs with routing, middleware, and database integration.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBAMcAPQhTTOEh0Ly47lx9hti1iTEtdHz1yOGwiGAiDVtg2rldCqN86RcjOr18sMmBC399NjUJfuLF3PWRHaZplNFrXxk6au7Gi-WlvqLPBLzhXGqCvbCH9wM1_-l7PWOwH3-WJabuD8h9IuKLZy30aNB1PerXebETwYgitX8LIht2uHyVrMArUxxSaGfTAOnwSCkg4VDIoFIlJPS0GkVdfaj_DzsmHUbYRD9sK95ruCYp_soGBJGRI84LL_62MaVek9J0dPwSZ-5I",
    date: "July 10, 2025",
  },
  {
    title: "The Ultimate Guide to CSS Grid Layouts",
    desc: "Dive into the world of CSS Grid and learn how to create complex and responsive layouts with ease, using practical examples and tips.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAIpIANtxoMjmo2egh4a1vvkXiTmxI94uIoXGK_YHp0j4jPjVwwS8xC1CVci5_aH5-GnMBYsGf5vfx5l4glkURTgQPQqMThEMXWTz9PPE1j0jX0sg1A8dLz3Fq5Xar_dLBQt44yt1ydmcVnLw4E1Oo9ayFW3cRx6hHgSMdD4QTCza9kcipwZ3pMU2Foq5tWAUmk_BJMHc7KThMlg7nPYAoFJ004uCt-cxY5VXxAlH2huHSoI1fnWzO6QD5gketEoah02vjmW8v4Jbw",
    date: "July 5, 2025",
  },
  {
    title: "Securing Your Web Applications: Best Practices",
    desc: "Understand the key security principles and best practices for securing your web applications against common threats and vulnerabilities.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBK7yo8EeyJrHGN72C5VEz7XldG7mDaYiRfnfK6RZfBLIvMaszSJqtNxdCgyARZoKKZYw2f4J0npSz-3on8zGjlw4Mfvt86C69YPODs1GBcIHOXAIK4_unWKzEK9pZjnjmMko8pOcWWMa7BZLcOZXjWPxmnziTE8chztDBSIGzb8wGFR6UR3XI6tIYZcIzrUeJb1UwQN9plZCDopCX8SlBd1z3X41-RbO019618HmogDezrQ3JSWWrRlGme3XsBY7_Ox4yWDTOA3Cs",
    date: "July 1, 2025",
  },
];

const categories = [
  { name: "Technology", count: 12 },
  { name: "Programming", count: 8 },
  { name: "Web Development", count: 15 },
  { name: "Design", count: 5 },
];

const recent = [
  { title: posts[0].title, date: "July 15, 2024" },
  { title: posts[1].title, date: "July 10, 2024" },
  { title: posts[2].title, date: "July 5, 2024" },
];

export default function Blog() {
  return (
    <div className="min-h-screen px-4 py-6 font-sans bg-white">
      <div className="flex flex-col max-w-screen-xl gap-6 mx-auto lg:flex-row">
        {/* Latest Posts */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-[#121416] mb-6">
            Latest Posts
          </h1>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-2 cursor-pointer group"
              >
                <div
                  className="w-full transition-all duration-300 ease-in-out bg-center bg-cover aspect-video rounded-xl group-hover:scale-105"
                  style={{ backgroundImage: `url(${post.image})` }}
                ></div>
                <h2 className="text-base font-medium text-[#121416] group-hover:text-indigo-500 transition-colors duration-300 ease-in-out">
                  {post.title}
                </h2>
                <p className="text-sm text-[#6a7681]">{post.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-10">
            <a href="#" className="flex items-center justify-center size-10">
              <div
                className="text-[#121416]"
                data-icon="CaretLeft"
                data-size="18px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                </svg>
              </div>
            </a>
            {/* Page numbers */}
            {[1, 2, 3, 4, 5].map((page) => (
              <a
                key={page}
                href="#"
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium text-[#121416] ${
                  page === 1 ? "bg-[#f1f2f4] font-bold" : ""
                }`}
              >
                {page}
              </a>
            ))}
            <a href="#" className="flex items-center justify-center size-10">
              <div
                className="text-[#121416]"
                data-icon="CaretRight"
                data-size="18px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* Categories */}
        <aside className="flex-shrink-0 w-full space-y-6 layout-content-container lg:w-80">
          <div>
            <h2 className="text-xl font-bold text-[#121416] mb-2 leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Categories
            </h2>
            <ul className="">
              {categories.map((cat, i) => (
                <li key={i} className="px-4 bg-white min-h-14">
                  <a href="#" className="flex items-center py-2">
                    <p className="text-[#121416] text-base font-normal leading-normal flex-1 truncate">
                      {cat.name}
                    </p>
                    <div className="shrink-0">
                      <p className="text-[#121416] text-base font-normal leading-normal">
                        {cat.count}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Post */}
          <div>
            <h2 className="text-xl font-bold text-[#121416] mb-2 leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Recent Posts
            </h2>
            <div className="space-y-2">
              {recent.map((item, i) => (
                <a
                  href="#"
                  key={i}
                  className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2"
                >
                  <div className="flex flex-col justify-center">
                    <p className="text-[#121416] text-base font-medium leading-normal line-clamp-1">
                      {item.title}
                    </p>
                    <p className="text-[#6a7681] text-sm font-normal leading-normal line-clamp-2">
                      {item.date}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
