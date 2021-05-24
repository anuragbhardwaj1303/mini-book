import React from "react";
import ReactDom from "react-dom";
import "./index.css";
const img =
  "https://images-eu.ssl-images-amazon.com/images/I/71JZ0neAP1L._AC_UL200_SR200,200_.jpg";
const title = "The Blue Umbrella";
const author = "Ruskin Bond";

function BookList() {
  return (
    <section className='booklist'>
      <Book
        img='https://images-eu.ssl-images-amazon.com/images/I/71JZ0neAP1L._AC_UL200_SR200,200_.jpg'
        title='The Blue Umbrella'
        author='Ruskin Bond'
      />
      <Book
        img='https://images-eu.ssl-images-amazon.com/images/I/711hfHGE%2BcL._AC_UL200_SR200,200_.jpg'
        title='Great Stories for Children'
        author='Ruskin Bond'
      />
      <Book
        img='https://images-eu.ssl-images-amazon.com/images/I/71AdHA%2BqqwL._AC_UL200_SR200,200_.jpg'
        title='Think and Grow Rich'
        author='Napolean Hill'
      />
      <Book
        img='https://images-eu.ssl-images-amazon.com/images/I/71JZ0neAP1L._AC_UL200_SR200,200_.jpg'
        title='As a Man Thinketh'
        author='James Allen'
      />
      <Book
        img='https://images-eu.ssl-images-amazon.com/images/I/713jIoMO3UL._AC_UL200_SR200,200_.jpg'
        title='Sapiens A Brief History of Humankind'
        author='Yuval Noah Harari'
      />
      <Book
        img='https://images-eu.ssl-images-amazon.com/images/I/819HSIKiWdS._AC_UL200_SR200,200_.jpg'
        title='Pride & Prejudice'
        author='Jane Austen'
      />
    </section>
  );
}
const Book = (props) => {
  return (
    <article className='book'>
      <img src={props.img} alt='' className='bookimg'></img>

      <h3 className='title'>{props.title}</h3>

      <p>{props.author}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
