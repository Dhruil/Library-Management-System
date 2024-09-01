function createBook(isbn, title, author, publicationYear, stock) {
    if (isbn == null) {
        throw new Error("ISBN is required");
      }
      if (stock == null) {
        stock = 1;
      }
  return {
    isbn,
    title,
    author,
    publicationYear,
    stock,
  };
}
module.exports = createBook; 