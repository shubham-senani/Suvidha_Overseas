import React from "react";
import styles from "./section.module.css";
import LabelImportantTwoToneIcon from "@mui/icons-material/LabelImportantTwoTone";
import ChevronRightTwoToneIcon from "@mui/icons-material/ChevronRightTwoTone";

const Section = ({ section }) => {
  return (
    <div className={styles.section}>
      {section.id % 2 == 0 ? (
        <div className={styles.section_img} style={{ marginLeft: "150px" }}>
          <img src={section.imageUrl} alt="" srcset="" />
        </div>
      ) : (
        ""
      )}
      <div className={styles.subsection}>
        <div className={styles.section_heading}>{section.title}</div>
        <div className={styles.section_caption}>{section.caption}</div>
        <div>
          <div className={styles.section_subheading}>Offerings</div>
          <ul className={styles.section_items}>
            <li className={styles.section_item}>
              {" "}
              <LabelImportantTwoToneIcon className="text-warning" />{" "}
              {section.offerings[0]}
            </li>
            <li className={styles.section_item}>
              {" "}
              <LabelImportantTwoToneIcon className="text-warning" />{" "}
              {section.offerings[1]}
            </li>
            <li className={styles.section_item}>
              {" "}
              <LabelImportantTwoToneIcon className="text-warning" />{" "}
              {section.offerings[2]}
            </li>
          </ul>
          <span className={styles.section_btn}>
            Explore More
            <ChevronRightTwoToneIcon />{" "}
          </span>
        </div>
      </div>
      {section.id % 2 == 1 ? (
        <div className={styles.section_img} style={{ marginRight: "150px" }}>
          <img src={section.imageUrl} alt="" srcset="" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Section;
