import { useState } from "react";
import Search from "./Search";
import Sort from "./Sort";
import AllBooks from "./AllBooks";

export default function BookBoard() {
  const bookLists = [
    {
      id: 1,
      bookName: "JavaScript: The Good Parts",
      writerName: "Douglas Crockford",
      price: 25.99,
      isFavorite: false,
      publishYear: 2008,
    },
    {
      id: 2,
      bookName: "Eloquent JavaScript",
      writerName: "Marijn Haverbeke",
      price: 30.5,
      isFavorite: false,
      publishYear: 2011,
    },
    {
      id: 3,
      bookName: "You Don't Know JS",
      writerName: "Kyle Simpson",
      price: 28.99,
      isFavorite: false,
      publishYear: 2014,
    },
    {
      id: 4,
      bookName: "Clean Code",
      writerName: "Robert C. Martin",
      price: 35.0,
      isFavorite: false,
      publishYear: 2008,
    },
    {
      id: 5,
      bookName: "The Pragmatic Programmer",
      writerName: "Andrew Hunt, David Thomas",
      price: 40.75,
      isFavorite: false,
      publishYear: 1999,
    },
    {
      id: 6,
      bookName: "JavaScript: The Definitive Guide",
      writerName: "David Flanagan",
      price: 45.99,
      isFavorite: false,
      publishYear: 2020,
    },
    {
      id: 7,
      bookName: "Design Patterns",
      writerName: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
      price: 38.5,
      isFavorite: false,
      publishYear: 1994,
    },
    {
      id: 8,
      bookName: "Refactoring: Improving the Design of Existing Code",
      writerName: "Martin Fowler",
      price: 42.0,
      isFavorite: false,
      publishYear: 1999,
    },
    {
      id: 9,
      bookName: "The Clean Coder",
      writerName: "Robert C. Martin",
      price: 29.99,
      isFavorite: false,
      publishYear: 2011,
    },
    {
      id: 10,
      bookName: "Code Complete",
      writerName: "Steve McConnell",
      price: 50.0,
      isFavorite: false,
      publishYear: 1993,
    },
    {
      id: 11,
      bookName: "Cracking the Coding Interview",
      writerName: "Gayle Laakmann McDowell",
      price: 37.99,
      isFavorite: false,
      publishYear: 2008,
    },
    {
      id: 12,
      bookName: "The Mythical Man-Month",
      writerName: "Frederick P. Brooks Jr.",
      price: 31.5,
      isFavorite: false,
      publishYear: 1975,
    },
  ];

  const [books, setBooks] = useState(bookLists);

  const handleSearch = (searchTerm) => {
    const searchBooks = books.filter((book) =>
      book.bookName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setBooks([...searchBooks]);
  };

  const handleFavorite = (bookId)=>{
    const index = books.findIndex(book => book.id === bookId);

    const newBook = [...books];
    newBook[index].isFavorite = !newBook[index].isFavorite;
    setBooks(newBook)
  }

  return (
    <main className="my-10 lg:my-14">
      <section className="mb-8 lg:mb-10 mx-auto max-w-7xl">
        <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
          <Search onSearch={handleSearch}></Search>
          <Sort></Sort>
        </div>
      </section>
      <AllBooks books={books} onFav={handleFavorite}></AllBooks>
    </main>
  );
}
