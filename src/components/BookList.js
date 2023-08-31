import React from 'react';
import PropTypes from 'prop-types';
import './book.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function BookList({ books }) {
  const dispatch = useDispatch();
  const handleDelete = (itemId) => {
    dispatch(removeBook(itemId));
  };
  return (
    <div>
      <ul className="card">
        {books.map((book) => (
          <li key={book.item_id} className="cardlist">
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
                  <button type="submit" className="i" id="btn" onClick={() => handleDelete(book.item_id)}>Remove</button>
                  <div className="border" />
                  <button type="submit" className="i" id="btn">Edit</button>
                </div>
              </div>

              <div className="col2">
                <div className="progress" />
                <div className="percentage">
                  <p className="Percent">
                    {book.percentageComplete}
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
