import React from "react";
import styles from "./countryhome.module.css";
import Navbar from "../../navbar/Navbar";
import StarsIcon from "@mui/icons-material/Stars";
import Divider from "../divider/Divider";
import StarIcon from "@mui/icons-material/Star";
import Slider from "../../home/slider/Slider";
import FaqSection from "../faq/FaqSection";
import { Link } from "react-router-dom";
const CountrySection = ({ country }) => {
  return (
    <>
      <Navbar color={country.color} />
      <div className={styles.home} style={{ backgroundColor: country.color }}>
        <div className={styles.headin}>
          <p className={styles.headin_title}>{country.destination}</p>
          <p className={styles.headin_subtitle}>{country.description}</p>

          <Link to={"/contactus"}>
            {" "}
            <button className={styles.headin_btn}>Enquire Now</button>
          </Link>
        </div>
        <div className={styles.home_img}>
          <img
            src={`${country.imageUrl}`}
            width={650}
            height={700}
            style={{ opacity: "0.8" }}
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div>
        <div className={styles.subsection}>
          <h1 className={styles.subsection_title}>
            Why Should You Choose {country.id}
            <Divider title={`destination`} />
          </h1>
          <ul className={styles.subsection_items}>
            {country.why.map((item, index) => (
              <div className="d-flex border mx-5 m-4">
                <StarsIcon className="text-warning  m-3" />
                <li className={styles.subsection_item}>
                  <span className={styles.subsection_item_title}>
                    {item.title}:
                  </span>{" "}
                  {item.desc}
                </li>
              </div>
            ))}
          </ul>
        </div>

        <h1 className={styles.subsection_title}>
          <Divider title={`Popular Courses`} />
        </h1>
        <div
          className={styles.section}
          style={{ backgroundColor: `${country.color}` }}
        >
          <div className={styles.subsection}>
            <div>
              <ul className={styles.section_items}>
                {country.courses.map((course, index) => (
                  <li className={styles.section_item}>
                    <StarIcon className="text-warning" /> {course}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.section_img} style={{ marginRight: "150px" }}>
            <img src="/src/assets/selection.png" width={550} alt="" srcset="" />
          </div>
        </div>

        {/***************************   */}

        <h1 className={styles.subsection_title}>
          <Divider title={`Top Universities`} />
        </h1>
        <div
          className={styles.section}
          style={{ backgroundColor: `${country.color}` }}
        >
          <div className={styles.section_img} style={{ marginLeft: "150px" }}>
            <img src={country.imageUrl} width={400} alt="" srcset="" />
          </div>

          <div className={styles.subsection}>
            <div>
              <ul className={styles.section_items}>
                {country.universities.map((course, index) => (
                  <li className={styles.section_item}>
                    <StarIcon className="text-warning" /> {course}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <Divider title={"Testimonials"} />
          <div className="m-5">
            <Slider></Slider>
          </div>
        </div>

        <div>
          <Divider title={"Frequently Asked Questions"} />
          <FaqSection></FaqSection>
        </div>
      </div>
    </>
  );
};

export default CountrySection;
