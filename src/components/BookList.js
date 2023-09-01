import React from 'react';
import PropTypes from 'prop-types';
import './book.css';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';
import ProgressBar from './progressBar';

function BookList({ books }) {
  const dispatch = useDispatch();

  return (
    <div>
      <ul className="card">
        {books.map((book) => (
          <li key={book.id} className="cardlist">
            <div className="columns">
              <div className="col1">
                <p>{book.category}</p>
                <h1>{book.title}</h1>
                <p id="author" className="i">
                  {book.author}
                </p>
                <div className="comment">
                  <button type="submit" className="i" id="btn">comments</button>
                  <div className="border" />
                  <button type="submit" className="i" id="btn" onClick={() => dispatch(deleteBook(book.id))}>Remove</button>
                  <div className="border" />
                  <button type="submit" className="i" id="btn">Edit</button>
                </div>
              </div>

              <div className="col2">
                <ProgressBar />
                <div className="percentage">
                  <p className="Percent">
                    {Math.floor(Math.random() * (99 - 0)) + 0}
                    %
                  </p>
                  <p>Completed</p>
                </div>
              </div>

              <div className="border" />

              <div className="col3">
                <p>CURRENT CHAPTER</p>
                <p>{book.currentChapter}</p>
                <button type="button">UPDATE PROGRESS</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      item_id: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default BookList;
