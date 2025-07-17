import { useRef, useState } from "react";

const FaqsCard = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="mt-5 space-y-3 overflow-hidden border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="flex items-center justify-between pb-5 text-lg font-medium text-gray-700 cursor-pointer">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-2 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-2 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-gray-500">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

const Faqs = () => {
  const faqsList = [
    {
      q: "What types of businesses can use this ERP?",
      a: "Our ERP is built for small to mid-size enterprises across industries like manufacturing, distribution, retail, and service operations.",
    },
    {
      q: "Does it support role-based access?",
      a: "Yes. You can define user roles, assign permissions, and manage access with fine-grained control-ensuring data security and accountability.",
    },
    {
      q: "Can I customize the workflows?",
      a: "Absolutely. From inquiry to quotation to order fulfillment, each module is flexible to match your business processes.",
    },
    {
      q: "Is real-time reporting available?",
      a: "Yes. Get actionable insights with live dashboards and customizable reports, helping you stay ahead on metrics that matter.",
    },
    {
      q: "Can I access the system remotely?",
      a: "The ERP is web-based and fully responsive, so your team can work from anywhere with secure access.",
    },
    {
      q: "Is the system scalable?",
      a: "It’s designed to grow with you—add more users, modules, or data without compromising speed or performance.",
    },
  ];

  return (
    <section className="max-w-screen-xl px-4 mx-auto mt-12 leading-relaxed md:px-8">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl font-semibold text-gray-800">
          Frequently Asked Questions
        </h1>
        <p className="max-w-lg mx-auto text-lg text-gray-600">
          Answered all frequently asked questions, Still confused? feel free to
          contact us.
        </p>
      </div>
      <div className="max-w-2xl mx-auto mt-14">
        {faqsList.map((item, idx) => (
          <FaqsCard key={idx} idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
};

export default Faqs;
