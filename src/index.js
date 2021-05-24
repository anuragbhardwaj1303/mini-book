import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import { books } from "./books";
import Book from "./Book";

function BookList() {
  return (
    <article>
      <h1
        style={{
          marginTop: "35px",
          textAlign: "center",
          color: "#130f40",
        }}>
        Best Sellers
      </h1>
      <section className='booklist'>
        {books.map((book) => {
          return <Book key={book.id} book={book}></Book>;
        })}
      </section>
    </article>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
