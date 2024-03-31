import React from "react";
import Marquee from "react-fast-marquee";
import styles from "./Carousel.module.css";
import img1 from "../../../assets/top_universities/university_of_cambridge.png";
import img2 from "../../../assets/top_universities/Ohio_University_logo.png";
import img3 from "../../../assets/top_universities/ASU_Logo.png";
import img4 from "../../../assets/top_universities/Baylor_University.png";
import img5 from "../../../assets/top_universities/Cornell_University.png";
import img6 from "../../../assets/top_universities/Kent_State_University_logo.png";
import img7 from "../../../assets/top_universities/Penn_State_University.png";
import img8 from "../../../assets/top_universities/UC_Berkeley.png";
import img9 from "../../../assets/top_universities/UCF.png";
import img10 from "../../../assets/top_universities/UGA.png";
import img11 from "../../../assets/top_universities/UNC.png";
import img12 from "../../../assets/top_universities/University_of_South_Carolina_logo.png";
import img13 from "../../../assets/top_universities/West_Virginia_University_WVU_logo.png";
import img14 from "../../../assets/top_universities/WSU.png";
const Carousel = () => {
  return (
    <div className={styles.carousel_wrapper}>
      <Marquee gradient={true} speed={100} pauseOnHover>
        <div className={styles.img_wrapper}>
          <img src={img1} alt="" srcset="" width={250} />
        </div>
        <div className={styles.img_wrapper}>
          <img src={img2} alt="" srcset="" width={250}/>
        </div>
        <div className={styles.img_wrapper}>
          <img src={img3} alt="" srcset="" width={250}/>
        </div>
        <div className={styles.img_wrapper}>
          <img src={img4} alt="" srcset="" width={250}/>
        </div>
        <div className={styles.img_wrapper}>
          <img src={img5} alt="" srcset="" width={250}/>
        </div>
        <div className={styles.img_wrapper}>
          <img src={img6} alt="" srcset="" width={250}/>
        </div>
        <div className={styles.img_wrapper}>
          <img src={img7} alt="" srcset="" width={250}/>
        </div>
        <div className={styles.img_wrapper}>
          <img src={img8} alt="" srcset="" width={250}/>
        </div>
        <div className={styles.img_wrapper}>
          <img src={img9} alt="" srcset="" width={200}/>
        </div>
        <div className={styles.img_wrapper}>
          <img src={img10} alt="" srcset="" width={200} />
        </div>
        <div className={styles.img_wrapper}>
          <img src={img11} alt="" srcset="" width={150} />
        </div>
        <div className={styles.img_wrapper}>
          <img src={img12} alt="" srcset="" width={250} />
        </div>
        <div className={styles.img_wrapper}>
          <img src={img13} alt="" srcset=""  width={250}/>
        </div>
        <div className={styles.img_wrapper}>
          <img src={img14} alt="" srcset=""  width={250}/>
        </div>
      </Marquee>
    </div>
  );
};

export default Carousel;
