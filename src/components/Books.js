import Bookcard from './Bookcard';
import BookForm from './addBookForm';

function Books() {
  return (

    <>
      <div>
        <Bookcard />
        <div className="borderline" />
        <BookForm />
      </div>
    </>

  );
}

export default Books;
