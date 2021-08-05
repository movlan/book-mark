const GOOGLE_BOOKS_API_URL = "https://www.googleapis.com/books/v1/volumes?q=";

export const searchBooks = async (searchTerm) => {
  let pause = false;
  setTimeout(() => {
    pause = false;
  }, 3000);
  // fetch books form google books api
  let response;
  if (!pause) {
    response = await fetch(GOOGLE_BOOKS_API_URL + searchTerm);
  }
  pause = true;
  const data = await response.json();

  // manipulate data to get only fields we want
  // author, bookTitle, description
  if (data.items) {
    const bookData = data.items.map((book) => {
      return {
        id: book.id,
        authors: book.volumeInfo.authors || ["No Author"],
        title: book.volumeInfo.title || "No Tittle",
        subtitle: book.volumeInfo.subtitle || "",
        description: book.volumeInfo.description || "No Description",
        image: book.volumeInfo.imageLinks?.thumbnail,
      };
    });
    return bookData;
  }
  return [];
};
