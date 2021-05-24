import React from "react";

const Book = (props) => {
  const { img, title, author } = props.book;

  return (
    <article className='book'>
      <img src={img} alt='' className='bookimg'></img>

      <h3 className='title'>{title}</h3>

      <p>{author}</p>
    </article>
  );
};

export default Book;
