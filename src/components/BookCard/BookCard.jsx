import React from "react";
import { Button } from "../ui/Button";
import Card from "../ui/Card";

import style from "./BookCard.module.css";

const BookCard = (props) => {
  const { title, authors, description, image } = props.book;

  return (
    <Card>
      <div className={style.title}>
        <p>
          <strong>{title}</strong>
          <br />
          by {authors.join(", ")}
        </p>
      </div>
      {image && (
        <div className={style.img}>
          <img src={image} alt={title} />
        </div>
      )}
      <div className={style.description}>
        Description: <br />
        {description}
      </div>
      <div className={style.controls}>
        <Button text="Add to MyBooks" />
      </div>
    </Card>
  );
};

export default BookCard;
