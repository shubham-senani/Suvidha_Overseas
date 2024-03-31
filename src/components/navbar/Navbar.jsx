import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import DuoRoundedIcon from "@mui/icons-material/DuoRounded";

const Navbar = ({color}) => {
  return (
    <nav className={styles.nav} style={{backgroundColor: `${color}`}}>
      <Link to="/" className={styles.nav__logo}>
        <img src={"/src/assets/suvidha logo.png"} alt="" srcset="" width={247} />
      </Link>
      <ul className={styles.nav__menu}>
        <li className={styles.dropdown}>
          <button className={styles.dropbtn}>
            Study Destinations<ExpandMoreRoundedIcon></ExpandMoreRoundedIcon>
          </button>
          <div className={styles.dropdown_content} style={{backgroundColor: `${color}`}}>
            <Link to={'/destination/usa'}>USA</Link>
            <Link to={'/destination/canada'}>Canada</Link>
            <Link to={'/destination/uk'}>UK</Link>
            <Link to={'/destination/germany'}>Germany</Link>
            <Link to={'/destination/france'}>France</Link>
            <Link to={'/destination/france'}>Nethearlands</Link>
            <Link to={'/destination/australia'}>Australia</Link>
            <Link to={'/destination/usa'}>Ireland</Link>
            <Link to={'/destination/new-zealand'}>New Zealand</Link>
          </div>
        </li>

        <li className={styles.dropdown}>
          <button className={styles.dropbtn}>
            Services<ExpandMoreRoundedIcon></ExpandMoreRoundedIcon>
          </button>
          <div className={styles.dropdown_content} style={{backgroundColor: `${color}`}}>
            <a href="#">Counselling</a>
            <a href="#">Applications & Admission</a>
            <a href="#">Test Preparation</a>
            <a href="#">Scholarships</a>
            <a href="#">Internship</a>
            <a href="#">Australia</a>
            <a href="#">Education Loan</a>
            <a href="#">Visa Processing</a>
            <a href="#">Allied Services</a>
          </div>
        </li>
        <li>
          <Link to="/services" className={styles.nav__item}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" className={styles.nav__item}>
            Scholarships
          </Link>
        </li>
        <li>
          <Link to="/contactus" className={styles.nav__item}>
            Contact Us
          </Link>
        </li>
        <li className={styles.nav__item}>
          <button className={styles.nav_button}>
            <DuoRoundedIcon className="text-primary me-2"></DuoRoundedIcon>
            Book Online Counselling
          </button>
        </li>
      </ul>
    </nav>
  );
};
// --cta

export default Navbar;
