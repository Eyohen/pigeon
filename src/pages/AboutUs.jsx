import React from "react";
import frame3 from "../assets/Frame3.png";
import vision from "../assets/vision.png";
import mission from "../assets/mission.png";
import values from "../assets/aboutpage/values.png"
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const AboutUs = () => {
  return (
    <>
      <div className="bg-gray-100 font-nunito">
        <Navbar />

        <div className="mt-[58px] bg-white py-9">
          <p className="text-center text-6xl font-bold ">Our Story</p>

          <div className="flex px-4 md:px-[200px] gap-x-24 mt-9 items-start">
            <img src={frame3} className="object-contain rounded-b-2xl" />
            <div className="font-medium">
              <p className="text-xl mt-2">
                In today's digital landscape, numerous brands, marketers, and
                early-stage companies are full of innovative ideas and
                groundbreaking solutions. However, one of their most significant
                challenges is effectively reaching their target market.
                Understanding this gap, Pigeonhire was created—a platform
                dedicated to bridging the gap between innovative businesses and
                their potential audiences.
              </p>
              <p className="text-xl mt-9">
                At Pigeonhire, we recognize the power of connection and the
                importance of engaging with audiences where they are most active
                and receptive. Our platform catalyzes authentic engagement and
                is designed to align your business or personal brand with
                vibrant community hubs and interaction spaces.
              </p>
              <p className="text-xl mt-9">
                Whether you're a startup seeking visibility, a marketer aiming
                for impact, or a brand looking to resonate with your audience,
                Pigeonhire is your partner in navigating the journey toward
                meaningful engagement and sustained growth. By focusing on where
                engagement truly happens, we empower businesses to broadcast
                their messages and initiate conversations, build relationships,
                and foster communities around their offerings. Pigeonhire is a
                testament to the belief that the right connections can transform
                potential into success, turning bright ideas into celebrated
                solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-9 bg-white py-9">
          <p className="text-center text-6xl font-bold ">Our Vison</p>
          <div className="flex px-4 md:px-[200px] gap-x-24 mt-9 items-start">
            <div className="font-medium">
              <p className="text-xl mt-2">
                At Pigeonhire is to create a world where every business and
                individual can connect with their target audience in the most
                meaningful and impactful way, fostering genuine relationships
                and collaborative success.
              </p>
            </div>
            <img src={vision} className="object-contain rounded-b-2xl" />
          </div>
        </div>

        <div className="mt-9 bg-white py-9">
          <p className="text-center text-6xl font-bold ">Our Mission</p>

          <div className="flex px-4 md:px-[200px] gap-x-24 mt-9 items-start">
            <img src={mission} className="object-contain rounded-b-2xl" />
            <div className="font-medium">
              <p className="text-xl mt-2">
                We aim to revolutionize how businesses and communities interact,
                fostering an ecosystem where genuine relationships lead to
                shared success. We are committed to offering a platform where
                every interaction is an opportunity for growth, learning, and
                meaningful exchange.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-9 bg-white py-9">
          <p className="text-center text-6xl font-bold ">Our Values</p>

          <div className="flex px-4 md:px-[200px] gap-x-24 mt-9 mb-9 items-start">
            <div className="font-medium">
              <ul className="text-xl mt-2 list-disc">
                <li className="mb-2">
                  Community-Centric: We are passionate about building a platform
                  where communities can thrive, and businesses can find their
                  tribe.
                </li>
                <li className="mb-2">
                  Authenticity: We champion genuine interactions, believing
                  authenticity is the cornerstone of meaningful engagement.
                </li>
                <li className="mb-2">
                  Innovation: Our commitment to innovation keeps us at the
                  forefront of connecting businesses with communities in
                  impactful ways.
                </li>
                <li className="mb-2">
                  {" "}
                  Growth: We are dedicated to developing our users, communities,
                  and platform, ensuring that every connection made on
                  Pigeonhire is a step toward collective success.
                </li>
              </ul>
            </div>
            <img src={values} className="object-contain rounded-b-2xl" />
          </div>
        </div>
        <div className="bg-white p-8 md:px-[200px] mt-10">
          <div className="mt-9 bg-[#201327] text-white p-5">
            <div className="">
              <div className="">
                <p className="text-xl mt-2 font-normal">
                  <span className="text-[#F08E1F]">“</span>When I started
                  Pigeonhire, my vision was to create a world where businesses
                  and communities interact but are genuinely connected, where
                  the power of human engagement drives innovation and growth.
                  Our platform is built on the belief that in the heart of every
                  community lies untapped potential and, in every business, a
                  desire to make a real difference. I invite you to join us on
                  this exciting journey. Whether you're looking to reach a
                  broader audience, find the perfect community for your brand,
                  or forge inspiring partnerships, Pigeonhire is your gateway to
                  the possibilities that await.<br/> Together, let's build
                  connections and a web of relationships that inspire change,
                  drive progress, and celebrate the power of unity
                  <span className="text-[#F08E1F]">”</span>
                </p>
              </div>
              <div className="pt-10">
                <div className="text-2xl">Temi R.</div>
                <p className="text-xl"> Co-Founder, Pigeonhire</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-9 bg-white py-9">
          <p className="text-center text-6xl font-bold ">
            Join{" "}
            <span className="text-[#F08E1F] border-2 border-[#F08E1F] pl-4 pr-20 rounded-l-[100%] rounded-r-[100%]">
              Us
            </span>
          </p>

          <div className=" px-4 md:px-[200px] gap-x-24 mt-9 items-start">
            <div className="font-medium">
              <p className="text-4xl text-center mt-2">
                Embark on a journey with Pigeonhire, where your aspirations meet
                opportunities. Connect with and grow with us; let's create a
                future where every connection is a catalyst for change, and
                every interaction is a step towards a brighter tomorrow.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className="text-white text-lg bg-[#F08E1F] py-4 px-6  rounded-full mt-4">
              Get Started
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
