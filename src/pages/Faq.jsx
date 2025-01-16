import React, { useState } from "react";
import { TbCircleMinus, TbCirclePlus } from "react-icons/tb";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const Faq = () => {
  // Use an array of objects for FAQ items
  const [faqItems, setFaqItems] = useState([
    {
      id: 1,
      question: "How can Pigeonhire help my business grow?",
      answer: "Pigeonhire connects your business with targeted communities and professionals across the globe, enabling you to expand your reach, engage with key audiences, and foster strategic partnerships. Whether you're looking to increase brand awareness, drive sales, or build relationships, our platform provides the tools and access necessary to achieve your goals.",
      isOpen: false
    },
    {
      id: 2,
      question: "What makes Pigeonhire different from other community engagement platforms?",
      answer: "Unlike other platforms, Pigeonhire offers a unique combination of local and global community access, precise targeting capabilities, and flexible pricing options. Our focus on creating meaningful connections and providing detailed analytics sets us apart, ensuring that your engagement efforts are effective and measurable.",
      isOpen: false
    },
    {
      id: 3,
      question: "Can I target specific geographic locations or industries in Pigeonhire?",
      answer: "Yes, Pigeonhire allows you to target specific geographic locations and industries, enabling you to tailor your engagement strategies to reach the most relevant audiences. Whether you're focusing on a particular city or sector, our platform provides the tools to connect with communities that matter most to your business.",
      isOpen: false
    },
    {
      id: 4,
      question: "How Can I List My Community on Pigeonhire?",
      answer: "Listing your community on PigeonHire is simple! Sign up for an account, provide key details about your community, such as its focus, audience, and engagement goals, and submit your listing for approval. Once approved, your community will be discoverable by users looking for connections aligned with their interests or business needs.",
      isOpen: false
    },
    {
      id: 5,
      question: "How quickly can I expect to see results from using Pigeonhire?",
      answer: "The timeframe for seeing results can vary based on your engagement strategy and goals. However, many users observe increased interaction and visibility within weeks of using our platform. Continuous engagement and strategic use of our targeting and analytics tools can accelerate and enhance your outcomes.",
      isOpen: false
    },
    {
      id: 6,
      question: "Is Pigeonhire suitable for small businesses or startups?",
      answer: "Absolutely! Pigeonhire is designed to support businesses of all sizes, including small businesses and startups. Our platform offers scalable solutions and flexible pricing options to accommodate varying needs and resources, ensuring businesses can leverage our community engagement tools at any stage.",
      isOpen: false
    },
    {
      id: 7,
      question: "How does Pigeonhire protect my business's data and privacy?",
      answer: "We take data security and privacy seriously, implementing robust protocols and encryption measures to protect your information. Pigeonhire adheres to strict privacy policies and industry standards to ensure that your business's data is secure and your interactions on the platform are confidential.",
      isOpen: false
    },
    {
      id: 8,
      question: "How does the Subscription Work?",
      answer: "Our subscription plan provides unlimited access to all platform features, communities, and connections. This option is ideal for businesses and individuals seeking continuous engagement, broad reach, and long-term opportunities to connect with communities and key individuals, ensuring you effectively engage with the most relevant audiences to achieve your goals.",
      isOpen: false
    },
    {
      id: 9,
      question: "Can I receive personalized support to optimize my use of Pigeonhire?",
      answer: "Yes, we offer personalized support tailored to your needs. For an additional fee, our dedicated team can help you develop effective engagement strategies, maximize the use of our platform's features, and analyze data to refine your approach and achieve better results. To learn more, email us at hello@pigeonhire.com.",
      isOpen: false
    },
    {
      id: 10,
      question: "Is it Free to List My Community on Pigeonhire?",
      answer: "Yes, listing your community on PigeonHire is completely free! Simply sign up, provide the necessary details about your community, and submit your listing for approval. Once approved, your community will be accessible to users seeking relevant connections.",
      isOpen: false
    }
  ]);

  const toggleFAQ = (id) => {
    setFaqItems(faqItems.map(item => 
      item.id === id ? { ...item, isOpen: !item.isOpen } : item
    ));
  };

  return (
    <div className="bg-white px-4 sm:px-6 lg:px-8 xl:px-[300px] py-12 font-nunito max-w-[1920px] mx-auto">
      <Navbar/>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-8 sm:mb-12 mt-12">
        Frequently asked questions
      </h2>

      <div className="space-y-4">
        {faqItems.map((item) => (
          <div key={item.id} className="border rounded-lg hover:shadow-md transition-shadow">
            <button
              onClick={() => toggleFAQ(item.id)}
              className="w-full text-left p-6 focus:outline-none"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg sm:text-xl font-medium pr-8">
                  {item.question}
                </h3>
                <div className="flex-shrink-0 mt-1">
                  {item.isOpen ? (
                    <TbCircleMinus className="w-6 h-6 text-[#F08E1F]" />
                  ) : (
                    <TbCirclePlus className="w-6 h-6 text-[#F08E1F]" />
                  )}
                </div>
              </div>
              {item.isOpen && (
                <p className="mt-4 text-gray-600 text-base sm:text-lg">
                  {item.answer}
                </p>
              )}
            </button>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

// FAQ items data
const faqData = [
  {
    id: 1,
    question: "How can Pigeonhire help my business grow?",
    answer: "Pigeonhire connects your business with targeted communities and professionals across the globe, enabling you to expand your reach, engage with key audiences, and foster strategic partnerships. Whether you're looking to increase brand awareness, drive sales, or build relationships, our platform provides the tools and access necessary to achieve your goals."
  },
  {
    id: 2,
    question: "What makes Pigeonhire different from other community engagement platforms?",
    answer: "Unlike other platforms, Pigeonhire offers a unique combination of local and global community access, precise targeting capabilities, and flexible pricing options. Our focus on creating meaningful connections and providing detailed analytics sets us apart, ensuring that your engagement efforts are effective and measurable."
  },
  // ... Add all other FAQ items here
];

export default Faq;