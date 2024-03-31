import React from "react";
import styles from "./Home.module.css";
import Carousel from "./carousel/Carousel";
import Divider from "../common/divider/Divider";
import Section from "../common/section/Section";
import Slider from "./slider/Slider";
import Navbar from "../navbar/Navbar";
import FaqSection from "../common/faq/FaqSection";
import { Link, Navigate, redirect } from "react-router-dom";

const data = [
  {
    id: "1",
    title: "For Students",
    caption:
      "With a keen ear for your choices and preferences, our counselling experience is so seamless that you will land in your dream university!",
    imageUrl: "src/assets/sammy-man-with-a-magnifying-glass-and-a-question.png",
    offerings: [
      "Virtual Coaching and Counselling",
      "Applications, Admissions & Visas",
      "High Value Scholarships and Study Loans",
    ],
  },
  {
    id: "2",
    title: "For Universities",
    caption:
      "Maximize your reach across geographies and exceed your student recruitment goals without compromising on quality.",
    imageUrl: "src/assets/sammy-team-marketing.png",
    offerings: [
      "Recruit students from diverse nationalities",
      "Access to KC’s extensive recruitment network",
      "Enhance brand visibility",
    ],
  },
  {
    id: "3",
    title: "For Partners",
    caption:
      "Work with our team and state-of-the-art technology and experience how they can be a game changer for your business",
    imageUrl: "src/assets/sammy-man-and-woman-high-fiving-each-other.png",
    offerings: [
      "Innovative technology customized for your business",
      "Webinars by University Delegates and KC Experts",
      "Unparalleled end-to-end support",
    ],
  },
  {
    id: "4",
    title: "For Franchisees",
    caption:
      "Kickstart your business by joining the fastest growing and most trusted EdTech brand in the overseas education industry",
    imageUrl: "src/assets/sammy-fingerprint-verification.png",
    offerings: [
      "Business solutions tailor made for your market",
      "Support for Operations, Events and Marketing",
      "Access to KCs rich Knowledge Repository",
    ],
  },
];

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={styles.home}>
        <div className={styles.headin}>
          <p className={styles.headin_title}>
            Turn your dreams of studying abroad into reality with Suvidha
            Overseas.
          </p>
          <p className={styles.headin_subtitle}>
            Suvidha Foundation Bridging Borders, Empowering Dreams. Providing
            comprehensive support and resources to students worldwide, making
            international education accessible to all.
          </p>

          <Link to={'/contactus'} >
            <button className={styles.headin_btn}>Enquire Now</button>
          </Link>
        </div>
        <div className={styles.home_img}>
          <img
            src={"src/assets/wepik-export-202403051316330xpl.png"}
            width={400}
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div className={styles.home_popup}>
        <div className={styles.home_subpopup}>
          <p className={styles.popup_title}>
            Our global outreach connects students, universities, and recruitment
            partners.
          </p>

          <div className={styles.items}>
            <div className={styles.item}>
              <p className={styles.item_content}>500+</p>
              <p className={styles.item_title}>Global Academic Affiliations</p>
              <p className={styles.item_desc}>
                Our students are not just advancing their education; they're
                pursuing their dreams and ambitions at esteemed universities
                across the globe.
              </p>
            </div>
            <div className={styles.item}>
              <p className={styles.item_content}>10K+</p>
              <p className={styles.item_title}>Students across the Globe</p>
              <p className={styles.item_desc}>
                Our students are not just advancing their education; they're
                pursuing their dreams and ambitions at esteemed universities
                across the globe.
              </p>
            </div>
            <div className={styles.item}>
              <p className={styles.item_content}>25+</p>
              <p className={styles.item_title}>Offices across the Globe</p>
              <p className={styles.item_desc}>
                We're experiencing rapid growth and expansion across South and
                Southeast Asia! Come join the fastest-growing EdTech brand in
                the region.
              </p>
            </div>
          </div>
        </div>
      </div>
      {data.map((element) => (
        <Section key={element.id} section={element} />
      ))}
      <div className="mt-4 mb-2">
        <Divider title="Testimonials" />
        <p style={{ textAlign: "center", fontWeight: "500" }}>
          A highlight of what our students and partners think about us
        </p>
        <Slider />
      </div>
      <div>
        <Divider title="Choose Your Destination" />
        <p style={{ textAlign: "center", fontWeight: "500" }}>
          Our Top Partner Universities
        </p>
        <div>
          <Carousel />
        </div>
        <div className="mt-5">
          <Divider title={"Frequently Asked Questions"} />
          <p style={{ textAlign: "center", fontWeight: "500" }}>
            Quick Answers to Your Queries
          </p>
          <FaqSection></FaqSection>
        </div>
      </div>
    </>
  );
};

export default Home;
