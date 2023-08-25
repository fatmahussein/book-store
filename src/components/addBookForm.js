import './book.css';

function BookForm() {
  return (
    <form>
      <label htmlFor="label">
        ADD NEW BOOK
        <div className="formelements">
          <input id="bookTitle" placeholder="Book title" />
          <input id="category" placeholder="Author" />
          <button type="button">ADD BOOK</button>
        </div>

      </label>
    </form>
  );
}

export default BookForm;
