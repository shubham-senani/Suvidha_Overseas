import React from "react";
import styles from "./card.module.css";
import ExpandableParagraph from "./ExpandableParagraph";

const Card = ({ data }) => {
  const words = data.description.split(" ");
  const selectedWords = words.slice(0, 45);
  const selectedText = selectedWords.join(" ");
  return (
    <div className={styles.slide_container}>
      <div className={styles.slide_content}>
        <div className={styles.card_wrapper}>
          <div className={styles.card}>
            <div className={styles.image_content}>
              <span className={styles.overlay}></span>
              <div className={styles.card_image}>
                <img
                  src={data.image}
                  className={styles.card_img}
                  alt=""
                  srcset=""
                />
              </div>
            </div>
            <div className={styles.card_content}>
              <h2 className={styles.name}>{data.name}</h2>
              <p className={styles.description}>
                <ExpandableParagraph
                  initialContent={selectedText}
                  expandedContent={data.description}
                />
              </p>
              {/* <button className={styles.btn}> View More</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
