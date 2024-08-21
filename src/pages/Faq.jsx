import React, { useState } from "react";
import { TbCircleMinus, TbCirclePlus } from "react-icons/tb";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const Faq = () => {
  const [toggle, setToggle] = useState(true);
  const [toggle2, setToggle2] = useState(true);
  const [toggle3, setToggle3] = useState(true);
  const [toggle4, setToggle4] = useState(true);
  const [toggle5, setToggle5] = useState(true);
  const [toggle6, setToggle6] = useState(true);
  const [toggle7, setToggle7] = useState(true);
  const [toggle8, setToggle8] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleToggle2 = () => {
    setToggle2(!toggle2);
  };

  const handleToggle3 = () => {
    setToggle3(!toggle3);
  };

  const handleToggle4 = () => {
    setToggle4(!toggle4);
  };

  const handleToggle5 = () => {
    setToggle5(!toggle5);
  };

  const handleToggle6 = () => {
    setToggle6(!toggle6);
  };
  const handleToggle7 = () => {
    setToggle7(!toggle7);
  };

  const handleToggle8 = () => {
    setToggle8(!toggle8);
  };


  return (
    <>
    <div className="bg-white px-4 mx-auto lg:px-[300px] py-9 mt-16 font-nunito">
    <Navbar />
      <p className="text-6xl font-bold text-center md:tracking-wide">
        Frequently asked questions
      </p>

     
<div className="">
        <button onClick={handleToggle} className="w-full">
          {toggle ? (
            <div className="flex justify-between  space-x-[94px] px-2 border-b-2 py-6">
              <p className="text-xl font-medium ">
                How can Pigeonhire help my business grow?
              </p>
              <TbCirclePlus color="#F08E1F" size={24} />
            </div>
          ) : (
            <div className="border-b-2 py-6">
              <div className="flex justify-between space-x-[94px] px-2">
                <p className="text-xl font-medium text-left">
                  How can Pigeonhire help my business grow?
                </p>
                <TbCircleMinus color="#F08E1F" size={24} />
              </div>

              <p className="text-gray-400 text-left">
                Pigeonhire connects your business with targeted communities and
                professionals across the globe, enabling you to expand yur
                reach, engage with key audiences, and foster strategic
                partnerships. Whether you're looking to increase brand
                awareness, drive sales, or build relationships, our platform
                provides the tools and access necessary to achieve your goals.
              </p>
            </div>
          )}
        </button>
      </div>

      <div className="">
        <button onClick={handleToggle2} className="w-full">
          {toggle2 ? (
            <div className="flex justify-between  space-x-[94px] px-2 border-b-2 py-6">
              <p className="text-xl font-medium text-left">
              What makes Pigeonhire different from other community engagement platforms?
              </p>
              <TbCirclePlus color="#F08E1F" size={24} />
            </div>
          ) : (
            <div className="border-b-2 py-6">
              <div className="flex justify-between space-x-[94px] px-2">
                <p className="text-xl font-medium text-left">
                What makes Pigeonhire different from other community engagement platforms?
                </p>
                <TbCircleMinus color="#F08E1F" size={24} />
              </div>

              <p className="text-gray-400 text-left">
              Unlike other platforms, Pigeonhire offers a unique combination of local and global community access, precise targeting capabilities, and flexible pricing options. Our focus on creating meaningful connections and providing detailed analytics sets us apart, ensuring that your engagement efforts are effective and measurable.

              </p>
            </div>
          )}
        </button>
      </div>

      <div className="">
        <button onClick={handleToggle3} className="w-full">
          {toggle3 ? (
            <div className="flex justify-between  space-x-[94px] px-2 border-b-2 py-6">
              <p className="text-xl font-medium text-left">
              Can I target specific geographic locations or industries in Pigeonhire?
              </p>
              <TbCirclePlus color="#F08E1F" size={24} />
            </div>
          ) : (
            <div className="border-b-2 py-6">
              <div className="flex justify-between space-x-[94px] px-2">
                <p className="text-xl font-medium text-left">
                Can I target specific geographic locations or industries in Pigeonhire?
                </p>
                <TbCircleMinus color="#F08E1F" size={24} />
              </div>

              <p className="text-gray-400 text-left">
              Yes, Pigeonhire allows you to target specific geographic locations and industries, enabling you to tailor your engagement strategies to reach the most relevant audiences. Whether you're focusing on a particular city or sector, our platform provides the tools to connect with communities that matter most to your business.

              </p>
            </div>
          )}
        </button>
      </div>

      <div className="">
        <button onClick={handleToggle4} className="w-full">
          {toggle4 ? (
            <div className="flex justify-between  space-x-[94px] px-2 border-b-2 py-6">
              <p className="text-xl font-medium ">
                How do the subscription and pay-as-you-go options work?

              </p>
              <TbCirclePlus color="#F08E1F" size={24} />
            </div>
          ) : (
            <div className="border-b-2 py-6">
              <div className="flex justify-between space-x-[94px] px-2">
                <p className="text-xl font-medium text-left">
                  How do the subscription and pay-as-you-go options work?

                </p>
                <TbCircleMinus color="#F08E1F" size={24} />
              </div>

              <p className="text-gray-400 text-left">
              Our subscription option grants unlimited access to all platform features and communities, perfect for businesses seeking ongoing engagement and broad reach. On the other hand, our pay-as-you-go option is tailored for targeted interaction, allowing you to connect with community owners directly. This approach offers the flexibility and precision needed for specific campaigns or projects, ensuring you effectively engage with the most relevant audiences.

              </p>
            </div>
          )}
        </button>
      </div>

      <div className="">
        <button onClick={handleToggle5} className="w-full">
          {toggle5 ? (
            <div className="flex justify-between  space-x-[94px] px-2 border-b-2 py-6">
              <p className="text-xl font-medium text-left">
             How quickly can I expect to see results from using Pigeonhire?

              </p>
              <TbCirclePlus color="#F08E1F" size={24} />
            </div>
          ) : (
            <div className="border-b-2 py-6">
              <div className="flex justify-between space-x-[94px] px-2">
                <p className="text-xl font-medium text-left">
               How quickly can I expect to see results from using Pigeonhire?

                </p>
                <TbCircleMinus color="#F08E1F" size={24} />
              </div>

              <p className="text-gray-400 text-left">
              The timeframe for seeing results can vary based on your engagement strategy and goals. However, many users observe increased interaction and visibility within weeks of using our platform. Continuous engagement and strategic use of our targeting and analytics tools can accelerate and enhance your outcomes.
              </p>
            </div>
          )}
        </button>
      </div>

      <div className="">
        <button onClick={handleToggle6} className="w-full">
          {toggle6 ? (
            <div className="flex justify-between  space-x-[94px] px-2 border-b-2 py-6">
              <p className="text-xl font-medium text-left">
            Is Pigeonhire suitable for small businesses or startups?

              </p>
              <TbCirclePlus color="#F08E1F" size={24} />
            </div>
          ) : (
            <div className="border-b-2 py-6">
              <div className="flex justify-between space-x-[94px] px-2">
                <p className="text-xl font-medium text-left">
              Is Pigeonhire suitable for small businesses or startups?

                </p>
                <TbCircleMinus color="#F08E1F" size={24} />
              </div>

              <p className="text-gray-400 text-left">
              Absolutely! Pigeonhire is designed to support businesses of all sizes, including small businesses and startups. Our platform offers scalable solutions and flexible pricing options to accommodate varying needs and resources, ensuring businesses can leverage our community engagement tools at any stage.


              </p>
            </div>
          )}
        </button>
      </div>

      <div className="">
        <button onClick={handleToggle7} className="w-full">
          {toggle7 ? (
            <div className="flex justify-between  space-x-[94px] px-2 border-b-2 py-6">
              <p className="text-xl font-medium ">
               How does Pigeonhire protect my business's data and privacy?
              </p>
              <TbCirclePlus color="#F08E1F" size={24} />
            </div>
          ) : (
            <div className="border-b-2 py-6">
              <div className="flex justify-between space-x-[94px] px-2">
                <p className="text-xl font-medium text-left">
                 How does Pigeonhire protect my business's data and privacy?
                </p>
                <TbCircleMinus color="#F08E1F" size={24} />
              </div>

              <p className="text-gray-400 text-left">
              We take data security and privacy seriously, implementing robust protocols and encryption measures to protect your information. Pigeonhire adheres to strict privacy policies and industry standards to ensure that your business's data is secure and your interactions on the platform are confidential.
              </p>
            </div>
          )}
        </button>
      </div>

      <div className="">
        <button onClick={handleToggle8} className="w-full">
          {toggle8 ? (
            <div className="flex justify-between  space-x-[94px] px-2 border-b-2 py-6">
              <p className="text-xl font-medium text-left">
            Can I receive personalized support to optimize my use of Pigeonhire?

              </p>
              <TbCirclePlus color="#F08E1F" size={24} />
            </div>
          ) : (
            <div className="border-b-2 py-6">
              <div className="flex justify-between space-x-[94px] px-2">
                <p className="text-xl font-medium text-left">
              Can I receive personalized support to optimize my use of Pigeonhire?

                </p>
                <TbCircleMinus color="#F08E1F" size={24} />
              </div>

              <p className="text-gray-400 text-left">
              Yes, we offer personalized support to all our users. Our dedicated team can assist you in developing effective engagement strategies, utilizing our platform's features to their fullest potential, and interpreting analytics to refine your approach and achieve better results.
              </p>
            </div>
          )}
        </button>
      </div>

   

      


    </div>
    <Footer/></>
  );
};

export default Faq;
