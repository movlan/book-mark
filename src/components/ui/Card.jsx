import React from "react";

import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        {props.title && <div className={styles.title}>{props.title}</div>}
        {props.children}
      </div>
    </div>
  );
};

export default Card;
