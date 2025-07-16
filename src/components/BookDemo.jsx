import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modal = {
  hidden: { opacity: 0, scale: 0.95, y: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -20,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const BookDemo = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const closeWithAnimation = () => {
    setShowModal(false);
    setTimeout(onClose, 200); // Wait for exit animation
  };

  const onSubmit = (data) => {
    console.log("Demo Form Data:", data);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      reset();
      closeWithAnimation();
      toast.success("Form submitted successfully!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        theme: "colored",
      });
    }, 2000);
  };

  useEffect(() => {
    // Prevent scrolling
    document.body.classList.add("overflow-hidden");

    // Clean up on unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="pop-up fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs"
        variants={backdrop}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={closeWithAnimation}
      >
        <motion.div
          className="bg-white w-full max-w-lg rounded-xl shadow-lg p-6 relative"
          variants={modal}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={closeWithAnimation}
            className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-2xl font-bold"
          >
            <IoMdClose />
          </button>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Request a Free Demo
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="mt-1 block w-full px-4 py-2 bg-white border border-gray-200 rounded-md focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                {...register("companyName", {
                  required: "Company Name is required",
                })}
                className="mt-1 block w-full px-4 py-2 bg-white border border-gray-200 rounded-md focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Company name"
              />
              {errors.companyName && (
                <p className="text-red-500 text-sm">
                  {errors.companyName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className="mt-1 block w-full px-4 py-2 bg-white border border-gray-200 rounded-md focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <div className="relative mt-2">
                <div className="absolute inset-y-0 flex items-center h-6 pr-2 my-auto border-r left-3">
                  <select className="h-full text-sm bg-transparent rounded-lg outline-none">
                    <option>IN</option>
                    <option>US</option>
                    <option>CN</option>
                    <option>AU</option>
                  </select>
                </div>
                <input
                  type="tel"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[6-9]\d{9}$/,
                      message: "Enter a valid 10-digit phone number",
                    },
                  })}
                  className="mt-1 block pl-[4.5rem] w-full px-4 py-2 bg-white border border-gray-200 rounded-md focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Phone number"
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                {...register("message")}
                className="mt-1 block w-full px-4 py-2 bg-white border border-gray-200 rounded-md focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Tell us what you’re looking for..."
              ></textarea>
            </div>

            <div className="text-right">
              <button
                type="submit"
                className={`w-full flex items-center justify-center px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-700 rounded-md  focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 ${
                  loading
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-indigo-600"
                }`}
              >
                {loading ? (
                  <>
                    <svg
                      className="w-5 h-5 mr-2 text-white animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        disabled={loading} // Disable button when loading
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                    <span>Loading...</span>
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BookDemo;
