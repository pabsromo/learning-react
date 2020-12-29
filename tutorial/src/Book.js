import React from 'react'

export const Book = ({ img, title, author }) => {

  const complexExample = (author) => {
    console.log(author)
  }

  return (
    <article className='book' onMouseOver={()=>{
      console.log(title);
    }}>
      <img src={img} alt='' />
      <h1 onClick={()=> console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={() => {
        alert('hello world')
      }}>
        reference example
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
}

export default Book
