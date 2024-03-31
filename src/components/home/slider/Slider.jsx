import React from "react";
import Card from "../card/Card";
import styles from "./slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";

const review = [
  {
    id: 1,
    name: "Paige Turner",
    description:
      "Amazing experience with Suvidha Overseas Study Abroad Consultancy! Their team of knowledgeable advisors guided me through every step of the application process with patience and expertise. Thanks to their personalized approach, I was able to secure admission to my dream university abroad. I highly recommend Suvidha Overseas Study Abroad Consultancy to anyone seeking assistance with studying abroad.",
    image:
      "/src/assets/reviewer/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg",
  },
  {
    id: 2,
    name: "Sarah Moanees",
    description:
      "I had an incredible journey with Suvidha Overseas Study Abroad Consultancy! Their dedicated staff went above and beyond to assist me in achieving my goal of studying abroad. From helping me choose the right program to navigating the application process, their support was invaluable. Thanks to their guidance, I'm now pursuing my dreams at a prestigious university overseas. I can't thank Suvidha Overseas Study Abroad Consultancy enough for their professionalism and expertise!",
    image:
      "/src/assets/reviewer/portrait-beautiful-woman-isolated-yellow-studio-background.jpg",
  },
  {
    id: 3,
    name: "Emma Grate",
    description:
      "After struggling to navigate the complexities of studying abroad, I found solace in the expertise of Suvidha Overseas Study Abroad Consultancy. Their personalized approach and attention to detail made the entire process seamless and stress-free. From selecting the perfect university to handling visa applications, their team was there every step of the way. Thanks to their invaluable assistance, I'm now embarking on an exciting journey abroad. I highly recommend Suvidha Overseas Study Abroad Consultancy to anyone considering studying overseas.",
    image:
      "/src/assets/reviewer/close-up-stylish-attractive-girl-with-hairbun-smiling-looking-hopeful.jpg",
  },
  {
    id: 4,
    name: "Laura Norda",
    description:
      "Choosing Suvidha Overseas Study Abroad Consultancy was the best decision I made for my study abroad journey. Their team provided exceptional guidance and support throughout the entire process. From refining my application essays to preparing for visa interviews, they were instrumental in helping me secure admission to my top-choice university. Thanks to Suvidha Overseas Study Abroad Consultancy, I'm now pursuing my academic aspirations abroad with confidence. I wholeheartedly recommend their services to anyone seeking expert assistance in studying overseas.",
    image:
      "/src/assets/reviewer/young-student-woman-wearing-denim-jacket-eyeglasses-holding-colorful-folders-showing-thumb-up-pink.jpg",
  },
  {
    id: 5,
    name: "Mark Ateer",
    description:
      "After researching several study abroad consultancies, I decided to work with Suvidha Overseas Study Abroad Consultancy, and I couldn't be happier with my choice. Their team went above and beyond to ensure my study abroad experience was smooth and successful. From offering personalized advice on university selection to providing assistance with scholarship applications, they provided invaluable support at every turn. Thanks to Suvidha Overseas Study Abroad Consultancy, I'm now studying at my dream university overseas. I highly recommend their services to anyone considering studying abroad.",
    image:
      "/src/assets/reviewer/man-person-hair-white-profile-male-451655-pxhere.com.jpg",
  },
  {
    id: 6,
    name: "Mike Rowe-Soft",
    description:
      "I had an exceptional experience with Suvidha Overseas Study Abroad Consultancy. Their team's professionalism and commitment exceeded my expectations. They provided comprehensive guidance on university selection, application procedures, and even offered valuable insights into cultural adaptation. Thanks to Suvidha Overseas Study Abroad Consultancy, I'm now enrolled in my dream program abroad. I highly recommend their services to anyone considering studying overseas.",
    image: "/src/assets/reviewer/guy-lesson.jpg",
  },
];

const Slider = () => {
  return (
    <Swiper
      className=" z-depth-1"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      //   onSlideChange={() => console.log("slide change")}
      //   onSwiper={(swiper) => console.log(swiper)}
    >
      {review.map((data) => {
        return (
          <SwiperSlide key={data.id}>
            <Card data={data} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
