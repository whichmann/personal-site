import {
  BookButton,
  BooksGrid,
  RecentBooksSection,
  SectionHeader,
} from './RecentBooksSection.components';

function RecentBooks() {
  const books = [
    'The Design of Everyday Things',
    'Atomic Habits',
    'The Pragmatic Programmer',
    'Thinking, Fast and Slow',
    'The Creative Act',
    'The Left Hand of Darkness',
  ];

  return (
    <RecentBooksSection aria-label="Recent books">
      <SectionHeader>RECENT BOOKS</SectionHeader>
      <BooksGrid>
        {books.map((book) => (
          <BookButton key={book} type="button">
            {book}
          </BookButton>
        ))}
      </BooksGrid>
    </RecentBooksSection>
  );
}

export default RecentBooks;
