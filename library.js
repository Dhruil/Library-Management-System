function createBook(isbn, title, author, publicationYear, stock) {
  if (isbn == null) {
    throw new Error("ISBN is required");
  }
  if (stock == null) {
    stock = 1;
  } else if (stock <= 0) {
    throw new Error("Stock must be greater than 0");
  }
  return {
    isbn,
    title,
    author,
    publicationYear,
    stock,
  };
}
function createUser(id, name) {
  return {
    id,
    name,
    borrowedBooks: [],
  };
}
module.exports = {createBook,createUser};
