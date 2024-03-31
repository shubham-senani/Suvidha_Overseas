import React from "react";
import styles from "./footer.module.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

const footer = () => {
  return (
    <>
      <div className={styles.footer_container}>
        <footer className={footer}>
          <div className="row">
            <div className="col-6  col-md-3 mb-3">
              <h5 className={styles.footer_title}>STUDY DESTINATIONS</h5>
              <ul className={styles.footer_items}>
                <li className={styles.footer_item}>
                  <a href="#" className={styles.footer_href}>
                    United States
                  </a>
                </li>
                <li className={styles.footer_item}>
                  <a href="#" className={styles.footer_href}>
                    Canada
                  </a>
                </li>
                <li className={styles.footer_item}>
                  <a href="#" className={styles.footer_href}>
                    United Kingdom
                  </a>
                </li>
                <li className={styles.footer_item}>
                  <a href="#" className={styles.footer_href}>
                    Ireland
                  </a>
                </li>
                <li className={styles.footer_item}>
                  <a href="#" className={styles.footer_href}>
                    Australia
                  </a>
                </li>
                <li className={styles.footer_item}>
                  <a href="#" className={styles.footer_href}>
                    New Zealand
                  </a>
                </li>
                <li className={styles.footer_item}>
                  <a href="#" className={styles.footer_href}>
                    Europe
                  </a>
                </li>{" "}
                <li className={styles.footer_item}>
                  <a href="#" className={styles.footer_href}>
                    Asia
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-3 mb-3">
              <h5 className={styles.footer_title}>SERVICES FOR STUDENTS</h5>
              <ul className={styles.footer_items}>
                <li className={styles.footer_item}>
                  <a href="#" className={styles.footer_href}>
                    Counselling
                  </a>
                </li>
                <li className={styles.footer_item}>
                  <a href="#" className={styles.footer_href}>
                    Test Preparation
                  </a>
                </li>
                <li className={styles.footer_item}>
                  <a href="#" className={styles.footer_href}>
                    Course, Country & University Selection
                  </a>
                </li>
                <li className={styles.footer_item}>
                  <a href="#" className={styles.footer_href}>
                    Applications & Admission
                  </a>
                </li>
                <li className={styles.footer_item}>
                  <a href="#" className={styles.footer_href}>
                    Scholarships
                  </a>
                </li>
                <li className={styles.footer_item}>
                  <a href="#" className={styles.footer_href}>
                    Internship
                  </a>
                </li>
                <li className={styles.footer_item}>
                  <a href="#" className={styles.footer_href}>
                    Education Loan
                  </a>
                </li>
                <li className={styles.footer_item}>
                  <a href="#" className={styles.footer_href}>
                    Visa Processing
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6  col-md-3 mb-3">
              <h5 className={styles.footer_title}>About Suvidha Overseas</h5>
              <ul className={styles.footer_items}>
                <li className={styles.footer_item}>
                  <a href="#" className={styles.footer_href}>
                    Our Story
                  </a>
                </li>
                <li className={styles.footer_item}>
                  <a href="#" className={styles.footer_href}>
                    Careers
                  </a>
                </li>
                <li className={styles.footer_item}>
                  <a href="#" className={styles.footer_href}>
                    Contact Us
                  </a>
                </li>
                <li className={styles.footer_item}>
                  <a href="#" className={styles.footer_href}>
                    Branches
                  </a>
                </li>
              </ul>
              <div>
                <h5 className={styles.footer_title}></h5>
                <h5 className={styles.footer_title}>
                  SERVICES FOR INSTITUTIONS
                </h5>
                <h5 className={styles.footer_title}>SERVICES FOR PARTNERS</h5>
                <h5 className={styles.footer_title}>SERVICES FOR FRANCHISEE</h5>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="mb-5">
                <img
                  src="src\assets\suvidha logo.png"
                  alt=""
                  srcset=""
                  width={247}
                />
              </div>
              <form>
                <h5 className={styles.footer_title}>
                  Subscribe to Stay Updated
                </h5>
                <p className={styles.footer_href}>
                  Monthly digest of what's new and exciting from us.
                </p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
              <div className={styles.social_logos}>
                <a href="#" className={styles.social_logo}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                </a>
                <a href="#" className={styles.social_logo}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-linkedin rounded"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </a>
                <a href="#" className={styles.social_logo}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-twitter-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                  </svg>
                </a>
                <a href="#" className={styles.social_logo}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-instagram rounded"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg>
                </a>
                <a href="#" className={styles.social_logo}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-whatsapp"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg>
                </a>
                <a href="#" className={styles.social_logo}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-youtube"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between px-2 py-2 my-4 border-top">
            <p className={styles.bottom_text}>
              &copy; 2024 Suvidha Overseas All rights reserved.
            </p>
            <p className={styles.bottom_text}>Term & Conditions</p>
            <p className={styles.bottom_text}>Privacy Policy</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default footer;
