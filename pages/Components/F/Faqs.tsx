import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Faqs = () => {
  const [open, setOpen] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Why we are?",
      answer: "Maecenas tempus, tellus eget condime honcus sem quam semper libero sit amet adipiscingem neque sed ipsum. amquam nunc",
    },
    {
      question: "What we do for you?",
      answer:
        "You can contact our customer support team at support@example.com.",
    },{
        question: " 100% data security",
        answer: "We accept Visa, MasterCard, American Express, and PayPal.",
      }
    // Add more FAQ items as needed
  ];

  const toggleAnswer = (index: number) => {
    setOpen((prevOpen) => (prevOpen === index ? null : index));
  };

  return (
    <div className="py-[20px]">
      <div className="faq-section-spority">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="faq-section-box"
          >
            <div
              className="answer-question"
              onClick={() => toggleAnswer(index)}
            >
              <span className="ml-2 text-lg font-semibold">
                {item.question}
              </span>

              {open === index ? (
                <IoIosArrowUp className="w-5 h-5 mx-1" />
              ) : (
                <IoIosArrowDown className="w-5 h-5 mx-1" />
              )}
            </div>
            {open === index && <p className="bg-[#edd4fe] text-gray-600 py-4 px-4 text-[18px] font-semibold rounded-br-md rounded-bl-md relative bottom-2">{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;