import './book.css';

function Bookcard() {
  const books = [
    {
      category: 'Action',
      name: 'The Hunger Games',
      author: 'Suzanne Collins',
      percentageComplete: 64,
      currentChapter: 'Chapter 17',
      id: 1,
    },
    {
      category: 'Science Fiction',
      name: 'Dune',
      author: 'Frank Herbert',
      percentageComplete: 8,
      currentChapter: 'Chapter 3: "A Lesson Learned"',
      id: 2,
    },
    {
      category: 'Economy',
      name: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      currentChapter: 'Introduction',
      percentageComplete: 0,
      id: 3,
    },
  ];
  return (

    <ul className="card">

      {books.map((book) => (

        <>
          <li key={book.id} className="cardlist">
            <div className="columns">

              <div className="col1">
                <p>{book.category}</p>
                <h1>{book.name}</h1>
                <p id="author" className="i">{book.author}</p>
                <div className="comment">
                  <p className="i">comments</p>
                  <div className="border" />
                  <p className="i">Remove</p>
                  <div className="border" />
                  <p className="i">Edit</p>
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
        </>

      ))}

    </ul>

  );
}

export default Bookcard;
