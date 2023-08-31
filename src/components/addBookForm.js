import './book.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      dispatch(addBook({
        title,
        author,
        category: 'Fiction',
        item_id: Date.now().toString(),
      }));
      setTitle('');
      setAuthor('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="label">
        ADD NEW BOOK
        <div className="formelements">
          <input id="bookTitle" placeholder="Book title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <input id="category" placeholder="Author" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
          <button type="submit">ADD BOOK</button>
        </div>

      </label>
    </form>
  );
}

export default BookForm;
