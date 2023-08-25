import BookList from './BookList';

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
  return <BookList books={books} />;
}

export default Bookcard;
