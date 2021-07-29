import React from "react";
import { Button } from "../../components/ui/Button";
import Card from "../../components/ui/Card";

import styles from "./AddBook.module.css";

const AddBook = () => {
  return (
    <div className="container">
      <Card title="Add a Book">
        <form className={styles.form}>
          <label className={styles.label} htmlFor="title">
            Title
          </label>
          <input className={styles.input} id="title" />
          <label className={styles.label} htmlFor="author">
            Author
          </label>
          <input className={styles.input} id="author" />
          <label className={styles.label} htmlFor="description">
            Description
          </label>
          <textarea className={styles.textInput} id="description" />
          <Button text="Add" />
        </form>
      </Card>
    </div>
  );
};

export default AddBook;
