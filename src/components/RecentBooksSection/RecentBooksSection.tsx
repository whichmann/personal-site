import {
  BookAuthor,
  BookWrapper,
  BookInfo,
  BookTitle,
  BooksGrid,
  RecentBooksSection,
  SectionHeader,
} from './RecentBooksSection.components';
import {
  RECENT_BOOKS_SECTION_ARIA_LABEL,
  RECENT_BOOKS,
  RECENT_BOOKS_SECTION_LABEL,
} from './RecentBooksSection.consts';

function RecentBooks() {
  return (
    <RecentBooksSection aria-label={RECENT_BOOKS_SECTION_ARIA_LABEL}>
      <SectionHeader>{RECENT_BOOKS_SECTION_LABEL}</SectionHeader>
      <BooksGrid>
        {RECENT_BOOKS.map((book) => (
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
