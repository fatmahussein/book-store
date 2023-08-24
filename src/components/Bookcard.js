import React from 'react';
import './book.css';

function Bookcard() {
  const books = [
    {
      category: 'Action',
      name: 'The Hunger Games',
      author: 'Suzanne Collins',
      percentageComplete: 64,
      id: 1,
    },
    {
      category: 'Science Fiction',
      name: 'Dune',
      author: 'Frank Herbert',
      percentageComplete: 8,
      id: 2,
    },
    {
      category: 'Economy',
      name: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      percentageComplete: 0,
      id: 3,
    },
  ];
  return (
    <>
      <ul className="card">

        {books.map((book) => (
          <li key={book.id} className="cardlist">
            <p>{book.category}</p>
            <h1>{book.name}</h1>
            <p>{book.author}</p>

          </li>
        ))}

      </ul>

    </>
  );
}

export default Bookcard;
