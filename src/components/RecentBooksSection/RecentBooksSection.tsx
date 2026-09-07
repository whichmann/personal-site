import {
  BookAuthor,
  BookWrapper,
  BookInfo,
  BookTitle,
  BooksGrid,
  RecentBooksSection,
  SectionHeader,
} from './RecentBooksSection.components';

function RecentBooks() {
  const books = [
    { title: 'Ilion', author: 'Dan Simmons', cover: 'dan.webp' },
    { title: 'Dune', author: 'Frank Herbert', cover: 'herbert.jpg' },
    {
      title: 'The Woman in the Dune',
      author: 'Kobo Abe',
      cover: 'kobo.jpg',
    },
    {
      title: 'One, None and a Hundred Thousand',
      author: 'Luigi Pirandello',
      cover: 'luigi.jpg',
    },
    { title: "Wilhelm's Room", author: 'Tove Ditlevsen', cover: 'tove.webp' },
    { title: 'Limes Inferior', author: 'Janusz Zajdel', cover: 'zajdel.webp' },
  ];

  return (
    <RecentBooksSection aria-label="Recent books">
      <SectionHeader>RECENT BOOKS THAT I LIKED</SectionHeader>
      <BooksGrid>
        {books.map((book) => (
          <BookWrapper key={book.cover}>
            <img
              src={`${process.env.PUBLIC_URL}/${book.cover}`}
              alt={`${book.title} cover`}
            />
            <BookInfo>
              <BookTitle>{book.title}</BookTitle>
              <BookAuthor>{book.author}</BookAuthor>
            </BookInfo>
          </BookWrapper>
        ))}
      </BooksGrid>
    </RecentBooksSection>
  );
}

export default RecentBooks;
