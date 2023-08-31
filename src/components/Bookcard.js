import { useSelector } from 'react-redux';
import BookList from './BookList';

function Bookcard() {
  const books = useSelector((state) => state.books.books);
  return <BookList books={books} />;
}

export default Bookcard;
