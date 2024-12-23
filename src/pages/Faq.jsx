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
  const [toggle9, setToggle9] = useState(true);
  const [toggle10, setToggle10] = useState(true);

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


  const handleToggle9 = () => {
    setToggle9(!toggle9);
  };

  const handleToggle10 = () => {
    setToggle10(!toggle10);
  };


  return (
    <div className="bg-white px-4 mx-auto lg:px-[300px] py-9 mt-16 font-nunito">
      <Navbar />
      <p className="text-6xl font-bold text-center md:tracking-wide">
        Frequently asked questions
      </p>

      <div className="mt-6">
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
              Pigeonhire connects your business with targeted communities and professionals across the globe, enabling you to expand your reach, engage with key audiences, and foster strategic partnerships. Whether you're looking to increase brand awareness, drive sales, or build relationships, our platform provides the tools and access necessary to achieve your goals.
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
                How Can I List My Community on Pigeonhire?

              </p>
              <TbCirclePlus color="#F08E1F" size={24} />
            </div>
          ) : (
            <div className="border-b-2 py-6">
              <div className="flex justify-between space-x-[94px] px-2">
                <p className="text-xl font-medium text-left">
                How Can I List My Community on Pigeonhire?

                </p>
                <TbCircleMinus color="#F08E1F" size={24} />
              </div>

              <p className="text-gray-400 text-left">
              Listing your community on PigeonHire is simple! Sign up for an account, provide key details about your community, such as its focus, audience, and engagement goals, and submit your listing for approval. Once approved, your community will be discoverable by users looking for connections aligned with their interests or business needs.

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
        <button onClick={handleToggle9} className="w-full">
          {toggle9 ? (
            <div className="flex justify-between  space-x-[94px] px-2 border-b-2 py-6">
              <p className="text-xl font-medium ">
               How does the Subscription Work?
              </p>
              <TbCirclePlus color="#F08E1F" size={24} />
            </div>
          ) : (
            <div className="border-b-2 py-6">
              <div className="flex justify-between space-x-[94px] px-2">
                <p className="text-xl font-medium text-left">
                How does the Subscription Work?
                </p>
                <TbCircleMinus color="#F08E1F" size={24} />
              </div>

              <p className="text-gray-400 text-left">
              Our subscription plan provides unlimited access to all platform features, communities, and connections. This option is ideal for businesses and individuals seeking continuous engagement, broad reach, and long-term opportunities to connect with communities and key individuals, ensuring you effectively engage with the most relevant audiences to achieve your goals.
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
              Yes, we offer personalized support tailored to your needs. For an additional fee, our dedicated team can help you develop effective engagement strategies, maximize the use of our platform's features, and analyze data to refine your approach and achieve better results. To learn more, email us at hello@pigeonhire.com.
              </p>
            </div>
          )}
        </button>
      </div>


      <div className="">
        <button onClick={handleToggle10} className="w-full">
          {toggle10 ? (
            <div className="flex justify-between  space-x-[94px] px-2 border-b-2 py-6">
              <p className="text-xl font-medium text-left">
                Is it Free to List My Community on Pigeonhire?

              </p>
              <TbCirclePlus color="#F08E1F" size={24} />
            </div>
          ) : (
            <div className="border-b-2 py-6">
              <div className="flex justify-between space-x-[94px] px-2">
                <p className="text-xl font-medium text-left">
                Is it Free to List My Community on Pigeonhire?

                </p>
                <TbCircleMinus color="#F08E1F" size={24} />
              </div>

              <p className="text-gray-400 text-left">
              Yes, listing your community on PigeonHire is completely free! Simply sign up, provide the necessary details about your community, and submit your listing for approval. Once approved, your community will be accessible to users seeking relevant connections.
              </p>
            </div>
          )}
        </button>
      </div>

   


      

      {/* <TbCircleMinus /> */}
    </div>
  );
};

export default Faq;
