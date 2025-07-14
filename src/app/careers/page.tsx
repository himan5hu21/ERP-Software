"use client";
import { useState } from "react";

const jobsData = [
  {
    position: "Software Engineer",
    department: "Engineering",
    location: "Remote",
  },
  {
    position: "Product Manager",
    department: "Product",
    location: "New York, NY",
  },
  {
    position: "Sales Representative",
    department: "Sales",
    location: "Chicago, IL",
  },
  {
    position: "Customer Success Manager",
    department: "Customer Success",
    location: "San Francisco, CA",
  },
  { position: "UX Designer", department: "Design", location: "Remote" },
];

const cultureValues = [
  {
    title: "Collaboration",
    desc: "We foster a collaborative environment where every voice is heard and valued.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDLHWpy3uvBI4oz4edFIp6cceCxefb012EgIZPukLTI6vNquUmk3rYJE9CQz3Ohi6RKYU_LRKIMpGQtThP1cQDfLAFBKSo3Lr5U6s94z3cVh3hpKFqRRvfKTcSzLRLzaf-eD4_srrqtuXSOZHow8EXgAYFSPL3M-9aHetumi76sCJA0yI0_LgxSazzUGPhdM-Tfx9YAc7nuKgZn9e5s3B4Rui55Y9h0Ev_bvSPGVlcwMV9UjxaCoCR-Zctl7NVbez2EsonSRYQQYnw",
  },
  {
    title: "Innovation",
    desc: "We encourage innovative thinking and provide resources to bring your ideas to life.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBsDbvuCAShz-5k_1wBvYmZlDa6bvQcRhMAvXBYx0xGImeb1FwfJCOoKB06SqGGDUOaz3PSrntNYRtmVl5b_q6zGJkl2MtW2QouRZve-Ux28qxyXR0CsVBJbCTqZlDFkoF_hi0mE7p10JsEAmWyFkc3fc_7pjdhldiKG6ySF6dU2J7uLh_8gzvXfimUVy1IHePSjVWmqL4lVaGbiu2llNEXjbqNpmSEGrNIxmsc96DLOjukiZwoVgdBSi_D2gLzwWw1UtIh_pKrHdU",
  },
  {
    title: "Growth",
    desc: "We are committed to your professional growth and offer opportunities for continuous learning.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBjTgEN_HAG5rxhlYXEAL3FzjyYsAahEdrHQWDIvVwrK4I3xyMhmcZPI6rnBXjP_PjULgfM3q-vY2ClhMi2zW7wormKRfLMa8tc-VSFjNJzDwvpwbxNGok5fhg4cVZE0Wbsklxe7whDoa1j83-AYjZ-depILIiIt75ZswASCvqaeARuTN5bHqvOviaffYAFcZqa836E8Jjh2n6jv2rpkxthjUgb3_2a-BlHaw-_f1Gy8Os0H5i7ZSEsbJjSAWkx-WrnMEdsjfUEpYk",
  },
];

const testimonials = [
  {
    name: "Sophia Carter",
    date: "2023-08-15",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBaSXmW-C7O1dBCatidfIZU8xpMfKcoXabRWhcqQ9GIPZ98X7pjXAo7QWwO--P2l53B6ooBilhm1sT-BdLOuLB7Dvvv_TEONGNZBvLzCHH0sNL-i7EbgQx3l8kCcs91gG4HXvma5lsKGVuFAeXIZijm5F86lqkIsKDMpDiiypXALW58riDQ_vwzgW2I32bo8bji9H_D2GhP3xfGlOmiQDOBsTyq_dZQ4hQ4FBZnctDqMSwiaEemoRKfr98w1ixYzIdVhcgJKgKdZZQ",
    rating: 5,
    text: "Working at CloudSolutions has been an incredible experience. The team is supportive, and I’ve had the opportunity to work on challenging and rewarding projects.",
  },
  {
    name: "Ethan Bennett",
    date: "2023-07-20",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA5_UCivIY5ouHBa-1n6VhH6kSEkBV_B2-agvTPOmQ78cbLKkjVGbm4v4IkWyC3IcaZaOa1k5iLGeI88UeNSvsCAxX4L6myvFHetf5wR3ckGigjIN05DlnPE_rdrcqzWo4pWMzUA2eEHfbW_jjyzJxf5rJF2nvQx6y1jpQ4Af0Br2hm-GJBoCIKYLp-3jCJxgeyZVBVwJGy9FW2FOQo7SaL1OKxhfjZau3HAL4ZUhyiR6XsRQA9i_F_csrRpBt3y-Wu03OTTm7ofyw",
    rating: 4,
    text: "I appreciate the company’s focus on innovation and continuous learning. There’s always something new to explore and contribute to.",
  },
  {
    name: "Olivia Hayes",
    date: "2023-06-10",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAzeBZOwEBO_hW3ztHbjGSqdKaWrr9CYtdc7zZdRe0i8JA_6aYdTEnQQ3dJE0EFgQmp5cTu4zPtx9o-VItY-ogquEwaXWtutJkDRy3LzWYxpzKhDeIFy-R8o3hI3uoXgNB24aCAeVbJI3MTxZTFBvdYSyUGiHYTT4pvweN08zAHIT3GbEjDozJ106i83bTStRJ13jblmz3ni0mpPYO6DJfL0_EowZG6LB_X-9HsBWb1q4EJMawJTDodybaLBEftA9w63FNrO9Ml38g",
    rating: 5,
    text: "The culture at CloudSolutions is truly unique. I feel valued and empowered to make a difference. The work-life balance is excellent.",
  },
];

const Star = ({ filled }: { filled: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill={filled ? "#111418" : "#bac4cf"}
    viewBox="0 0 256 256"
  >
    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
  </svg>
);

export default function Careers() {
  const [inputVal, setInputVal] = useState("");

  const filteredJobs = jobsData.filter((job) =>
    (job.position + job.department + job.location)
      .toLowerCase()
      .includes(inputVal.toLowerCase())
  );

  return (
    <div className="relative flex flex-col w-full min-h-screen overflow-x-hidden bg-white group/design-root">
      <div className="flex flex-col h-full grow">
        <div className="flex justify-center flex-1 w-full px-2 py-3 sm:px-4 md:px-10 lg:px-40">
          <div className="flex flex-col w-full max-w-[960px] flex-1">
            {/* Hero section */}
            <div className="px-2 sm:px-4">
              <div
                className="flex w-full min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat sm:gap-8 sm:rounded-lg items-center justify-center px-0 sm:px-4 py-4"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA36hYiVzIrIsw9abs0H53Og0e8Pe0oAPDHdOn0BBMgyPyA--Ss-i0WUM2802GqMx_6r8Ek99ajwSvdztkul2alznn_ft_Nhj1Qe4myRINqBlS5lwJiRMQ6J4zcXwSpq_ponMZAiRHvwbVB6I4QFXvZJewATjabm0oUI1O6L_MsoWFTYbeeZTJsip1rCVJzUeglXtBm9rAMKiW3O4ext-EPTH15ujF2vhVnAq1MNHRu9sZCMS48PCsAkJS24Hsv6XUp-JShV943rT4")',
                }}
              >
                <div className="flex flex-col gap-2 text-center">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl sm:font-black sm:leading-tight sm:tracking-[-0.033em]">
                    Join Our Team
                  </h1>
                  <h2 className="text-sm font-normal leading-normal text-white sm:text-base sm:font-normal sm:leading-normal">
                    Shape the future of business with us. Explore opportunities
                    to innovate and grow in a dynamic environment.
                  </h2>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 sm:h-12 sm:px-5 bg-indigo-700 hover:bg-indigo-600 text-white text-sm font-bold leading-normal tracking-[0.015em] sm:text-base sm:font-bold sm:leading-normal sm:tracking-[0.015em]">
                  <span className="truncate">View Open Positions</span>
                </button>
              </div>
            </div>

            {/* Open positions */}
            <section className="mt-5">
              <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Open Positions
              </h2>
              <div className="px-4 py-3">
                <label className="flex flex-col w-full h-12 min-w-40">
                  <div className="flex items-stretch flex-1 w-full h-full rounded-lg">
                    <div
                      className="text-[#60758a] flex border-none bg-[#f0f2f5] items-center justify-center pl-4 rounded-l-lg border-r-0"
                      data-icon="MagnifyingGlass"
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
                        <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                      </svg>
                    </div>
                    <input
                      placeholder="Search by title or location"
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none h-full placeholder:text-[#60758a] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                      onChange={(e) => setInputVal(e.target.value)}
                      value={inputVal}
                    />
                  </div>
                </label>
              </div>
              <div className="px-4 py-3">
                <div className="overflow-x-auto rounded-lg border border-[#dbe0e6] bg-white">
                  <table className="min-w-[600px] w-full">
                    <thead>
                      <tr className="bg-white">
                        <th className="hidden max-[120px]:block px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">
                          Position
                        </th>
                        <th className="hidden max-[240px]:block px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">
                          Department
                        </th>
                        <th className="hidden max-[360px]:block px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">
                          Location
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredJobs.length === 0 ? (
                        <tr>
                          <td
                            colSpan={3}
                            className="px-4 py-4 text-center text-[#60758a]"
                          >
                            No positions found.
                          </td>
                        </tr>
                      ) : (
                        filteredJobs.map((job, index) => (
                          <tr
                            key={index}
                            className="border-t border-t-[#dbe0e6]"
                          >
                            <td className="h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">
                              {job.position}
                            </td>
                            <td className="h-[72px] px-4 py-2 w-[400px] text-[#60758a] text-sm font-normal leading-normal">
                              {job.department}
                            </td>
                            <td className="h-[72px] px-4 py-2 w-[400px] text-[#60758a] text-sm font-normal leading-normal">
                              {job.location}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Our culture */}
            <section className="mt-5">
              <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Our Culture
              </h2>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-2 p-2 sm:p-4">
                {cultureValues.map(({ title, desc, image }, i) => (
                  <div key={i} className="flex flex-col gap-3 pb-3">
                    <div
                      className="w-full bg-center bg-no-repeat bg-cover rounded-lg aspect-square"
                      style={{ backgroundImage: `url(${image})` }}
                    />
                    <div>
                      <p className="text-[#111418] text-base font-medium">
                        {title}
                      </p>
                      <p className="text-[#60758a] text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Employee testimonials */}
            <section className="mt-5">
              <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Employee Testimonials
              </h2>
              <div className="flex flex-col gap-4 p-3 sm:gap-8 sm:p-4">
                {testimonials.map((t, idx) => (
                  <div key={idx} className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="bg-center bg-no-repeat bg-cover rounded-full size-10"
                        style={{ backgroundImage: `url(${t.image})` }}
                      />
                      <div className="flex-1">
                        <p className="text-[#111418] text-base font-medium">
                          {t.name}
                        </p>
                        <p className="text-[#60758a] text-sm">{t.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} filled={i < t.rating} />
                      ))}
                    </div>
                    <p className="text-[#111418] text-base">{t.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Join us */}
            <div className="mt-5">
              <div className="flex flex-col justify-end gap-4 px-2 py-6 bg-indigo-700 rounded sm:gap-8 sm:px-10 sm:py-20">
                <div className="flex flex-col items-center gap-2 text-center">
                  <h1 className="text-white tracking-light text-[32px] font-bold leading-tight sm:text-4xl sm:font-black sm:leading-tight sm:tracking-[-0.033em] max-w-[720px]">
                    Ready to Join Us?
                  </h1>
                </div>
                <div className="flex justify-center flex-1">
                  <div className="flex justify-center">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 sm:h-12 sm:px-5 bg-white text-indigo-700 hover:bg-indigo-100 text-sm font-bold leading-normal tracking-[0.015em] sm:text-base sm:font-bold sm:leading-normal sm:tracking-[0.015em] grow">
                      <span className="truncate">View Open Positions</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
