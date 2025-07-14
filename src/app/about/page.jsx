export default function AboutPage() {
  const teamMembers = [
    { name: "John Kumar", gender: "men", role: "Frontend Developer" },
    { name: "Priya Sharma", gender: "women", role: "Backend Developer" },
    { name: "Carlos Mendes", gender: "men", role: "UI/UX Designer" },
  ];

  const ourValues = [
    {
      title: "Quality & Performance",
      desc: "We strive for excellence in every line of code, ensuring that our products are fast, scalable, and reliable.",
      emoji: "🚀",
    },
    {
      title: "Transparent Communication",
      desc: "We believe in honest and open dialogue — with our clients, our teammates, and our partners.",
      emoji: "💬",
    },
    {
      title: "Lifelong Learning",
      desc: "Technology never stops evolving, and neither do we. Continuous learning fuels our innovation.",
      emoji: "📚",
    },
    {
      title: "User-Centric Approach",
      desc: "Our users are at the center of every decision we make, from design to deployment.",
      emoji: "🙌",
    },
  ];

  return (
    <>
      <section className="px-4 py-16 md:px-8 bg-gray-50">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-indigo-700">About Us</h1>
          <p className="mt-4 text-gray-600 text-lg">
            We are a passionate team committed to building modern, scalable, and
            user-friendly web applications.
          </p>
        </div>

        {/* Mission */}
        <div className="max-w-5xl mx-auto mt-12 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <img
              src="https://picsum.photos/600/400"
              alt="Team working"
              className="rounded-xl shadow-md"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Our Mission
            </h2>
            <p className="mt-4 text-gray-600">
              Our mission is to deliver high-quality software that solves
              real-world problems. We prioritize user experience, performance,
              and clean code in every project we take on.
            </p>
            <p className="mt-4 text-gray-600">
              Whether you're a small startup or a large enterprise, we aim to
              bring value through innovative tech solutions.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-20 px-4 md:px-0">
          <h3 className="text-3xl font-bold text-center text-indigo-700">
            Our Core Values
          </h3>
          <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            At the heart of everything we do, our values guide our approach,
            define our culture, and shape the solutions we deliver. Here's what
            drives us forward.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ourValues.map((item, index) => (
              <div
                key={index}
                className="bg-white border rounded-xl p-6 shadow hover:shadow-md hover:border-indigo-500 transition duration-300"
              >
                <div className="text-4xl text-center mb-4">{item.emoji}</div>
                <h4 className="text-xl font-semibold text-indigo-700">
                  {item.title}
                </h4>
                <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-6xl mx-auto mt-20 text-center">
          <h2 className="text-3xl font-semibold text-indigo-700">
            Meet Our Team
          </h2>
          <p className="mt-2 text-gray-600">
            Dedicated professionals behind our success
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow text-center"
              >
                <img
                  src={`https://randomuser.me/api/portraits/${
                    index % 2 === 0 ? "men" : "women"
                  }/${index + 30}.jpg`}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h4 className="text-lg font-semibold">{member.name}</h4>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-5xl mx-auto mt-20 text-center">
          <h2 className="text-3xl font-semibold text-indigo-700">
            What Our Clients Say
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                quote:
                  "The team delivered our project on time and exceeded our expectations. Highly recommend working with them!",
                author: "Amit Shah",
              },
              {
                quote:
                  "Very professional and attentive to details. We loved how smooth and responsive the app turned out.",
                author: "Sara Johnson",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white shadow rounded-xl p-6">
                <p className="text-gray-600">“{testimonial.quote}”</p>
                <p className="mt-4 font-semibold text-indigo-600">
                  – {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="max-w-3xl mx-auto mt-20 text-center bg-indigo-600 text-white rounded-2xl p-10 shadow-lg">
          <h2 className="text-2xl font-bold">
            Let’s Build Something Great Together
          </h2>
          <p className="mt-3">
            Reach out to us and let's discuss your project.
          </p>
          <a
            href="/contact"
            className="inline-block mt-6 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow hover:bg-gray-100"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
