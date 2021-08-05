import React from "react";
import BookCard from "../../components/BookCard/BookCard";

import style from "./MyBooks.module.css";

const DUMMY_BOOKS = [
  {
    author: "Dan Brown",
    title: "The Da Vinci Code",
    description:
      "While in Paris, Harvard symbologist Robert Langdon is awakened by a phone call in the dead of the night. The elderly curator of the Louvre has been murdered inside the museum, his body covered in baffling symbols. As Langdon and gifted French cryptologist Sophie Neveu sort through the bizarre riddles, they are stunned to discover a trail of clues hidden in the works of Leonardo da Vinci—clues visible for all to see and yet ingeniously disguised by the painter.",
  },
  {
    author: "J.R.R. Tolkien",
    title: "The Hobbit: Or There and Back Again",
    description:
      "Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep one day to whisk him away on an adventure. They have launched a plot to raid the treasure hoard guarded by Smaug the Magnificent, a large and very dangerous dragon. Bilbo reluctantly joins their quest, unaware that on his journey to the Lonely Mountain he will encounter both a magic ring and a frightening creature known as Gollum.",
  },
  {
    author: "Maggie Shipstead",
    title: "Great Circle: A novel",
    description:
      "After being rescued as infants from a sinking ocean liner in 1914, Marian and Jamie Graves are raised by their dissolute uncle in Missoula, Montana. There--after encountering a pair of barnstorming pilots passing through town in beat-up biplanes--Marian commences her lifelong love affair with flight. At fourteen she drops out of school and finds an unexpected and dangerous patron in a wealthy bootlegger who provides a plane and subsidizes her lessons, an arrangement that will haunt her for the rest of her life, even as it allows her to fulfill her destiny: circumnavigating the globe by flying over the North and South Poles.",
  },
];

const MyBooks = () => {
  return (
    <div className={style["all-books"]}>
      {DUMMY_BOOKS.map((book) => (
        <BookCard
          title={book.title}
          author={book.author}
          description={book.description}
        />
      ))}
    </div>
  );
};

export default MyBooks;
