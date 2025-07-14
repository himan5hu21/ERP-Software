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
      question: "How can I reset my password?",
      answer:
        "Go to the login page, click 'Forgot Password', and follow the instructions sent to your email.",
    },
    {
      question: "Where can I track my order?",
      answer:
        "You can track your order in your profile under 'Orders'. You will also receive email updates.",
    },
    {
      question: "How long does it take for support to respond?",
      answer:
        "Our support team typically responds within 24 hours during business days.",
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
    <section className="px-4 py-16 md:px-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-700">Support</h1>
        <p className="mt-4 text-gray-600 text-lg">
          Need help? Browse our FAQs or reach out to our support team.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">FAQs</h2>
        <ul className="space-y-4">
          {supportList.map((item, idx) => (
            <li key={idx} className="border-l-4 border-indigo-500 pl-4">
              <p className="font-semibold text-indigo-700">{item.question}</p>
              <p className="text-gray-600 mt-1">{item.answer}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Support Categories */}
      <div className="max-w-4xl mx-auto grid gap-4 sm:grid-cols-2 mb-12 text-center">
        {quickSupport.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow hover:shadow-md border border-gray-100"
          >
            <h3 className="text-lg font-semibold text-indigo-600">{item}</h3>
          </div>
        ))}
      </div>

      {/* Contact Info + Support Form */}
      <ContactUs />
    </section>
  );
}
