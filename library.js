function createBook(isbn, title, author, publicationYear, stock) {
  return {
    isbn,
    title,
    author,
    publicationYear,
    stock,
  };
}
module.exports = createBook;