import React from "react";
import Card from "../ui/Card";

import style from "./BookCard.module.css";

const BookCard = ({ title, author, description }) => {
  return (
    <Card>
      <div className={style.title}>
        <p>
          <strong>{title}</strong>
          <br />
          by {author}
        </p>
      </div>
      <div className={style.description}>
        Description: <br />
        {description}
      </div>
    </Card>
  );
};

export default BookCard;
