import React, { useEffect, useState } from "react";

import Card from "../../components/ui/Card";
import BookCard from "../../components/BookCard/BookCard";
import { searchBooks } from "../../lib/api";

import styles from "./AddBook.module.css";

const AddBook = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(null);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (searchTerm.length >= 3) {
      setIsLoading(true);
      setBooks([]);
      const getBooks = async () => {
        const fetchedBooks = await searchBooks(searchTerm);
        setBooks(fetchedBooks);
        setIsLoading(false);
      };
      getBooks();
    }
  }, [searchTerm]);

  // handle input change
  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setSearchTerm(value);
    console.log(value);
  };

  return (
    <div className="container">
      <Card title="Add a Book">
        <div className={styles.search}>
          <label className={styles.label} htmlFor="search">
            Search for a book:
          </label>
          <input
            className={styles.input}
            id="search"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
      </Card>
      <div className={styles.books}>
        {isLoading && <p style={{ textAlign: "center" }}>Loading...</p>}
        {books && books.map((book) => <BookCard key={book.id} book={book} />)}
      </div>
    </div>
  );
};

export default AddBook;
