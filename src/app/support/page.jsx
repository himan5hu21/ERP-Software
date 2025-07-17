"use client";

import { useForm } from "react-hook-form";
import ContactUs from "../contact/page";

export default function SupportPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const supportList = [
    {
      question: "What types of businesses can use this ERP?",
      answer:
        "Our ERP is built for small to mid-size enterprises across industries like manufacturing, distribution, retail, and service operations.",
    },
    {
      question: "Does it support role-based access?",
      answer:
        "Yes. You can define user roles, assign permissions, and manage access with fine-grained control—ensuring data security and accountability.",
    },
    {
      question: "Can I customize the workflows?",
      answer:
        "Absolutely. From inquiry to quotation to order fulfillment, each module is flexible to match your business processes.",
    },
    {
      question: "Is real-time reporting available?",
      answer:
        "Yes. Get actionable insights with live dashboards and customizable reports, helping you stay ahead on metrics that matter.",
    },
    {
      question: "Can I access the system remotely?",
      answer:
        "The ERP is web-based and fully responsive, so your team can work from anywhere with secure access.",
    },
    {
      question: "Is the system scalable?",
      answer:
        "It’s designed to grow with you—add more users, modules, or data without compromising speed or performance.",
    },
  ];

  const onSubmit = (data) => {
    console.log(data);
    alert("Thanks for contacting support!");
    reset();
  };

  const quickSupport = [
    "Account Issues",
    "Billing & Payments",
    "Technical Support",
    "General Inquiry",
  ];

  const helpList = [
    { title: "How to reset your password", href: "#" },
    { title: "Managing your account settings", href: "#" },
    { title: "Troubleshooting common issues", href: "#" },
  ];

  return (
    <section className="min-h-screen px-4 py-16 md:px-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold text-indigo-700">Support</h1>
        <p className="mt-4 text-lg text-gray-600">
          Need help? Browse our FAQs or reach out to our support team.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="mb-6 text-2xl font-semibold text-gray-800">FAQs</h2>
        <ul className="space-y-4">
          {supportList.map((item, idx) => (
            <li key={idx} className="pl-4 border-l-4 border-indigo-500">
              <p className="font-semibold text-indigo-700">{item.question}</p>
              <p className="mt-1 text-gray-600">{item.answer}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Support Categories */}
      {/* <div className="grid max-w-4xl gap-4 mx-auto mb-12 text-center sm:grid-cols-2">
        {quickSupport.map((item, idx) => (
          <div
            key={idx}
            className="p-6 bg-white border border-gray-100 shadow rounded-xl hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-indigo-600">{item}</h3>
          </div>
        ))}
      </div> */}

      {/* Contact Info + Support Form */}
      <ContactUs />
    </section>
  );
}
