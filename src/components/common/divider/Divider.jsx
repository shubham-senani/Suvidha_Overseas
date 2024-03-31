import React from "react";
import styles from './divider.module.css'

const Divider = ({ title }) => {
  return (
    <div>
      <div className={styles.divider}>
        <span className={styles.divider_title}>{title}</span>
      </div>
    </div>
  );
};

export default Divider;
