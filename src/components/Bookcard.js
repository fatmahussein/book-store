import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import BookList from './BookList';
import { getBooksData } from '../redux/books/booksSlice';

function Bookcard() {
  const {
    books, isLoading, isError, isSuccessful,
  } = useSelector((store) => store.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooksData());
  }, [dispatch, isSuccessful]);
  if (isLoading) {
    return <p className="info">Loading....Please wait</p>;
  }
  if (isError) {
    return <p className="info">Sorry, please try again</p>;
  }
  if (books.length === 0) return <p className="info">Sorry, no books available at the moment</p>;

  return <BookList books={books} />;
}

export default Bookcard;
