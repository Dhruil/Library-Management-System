function createBook(isbn, title, author, publicationYear, stock) {
    if (isbn == null) {
        throw new Error("ISBN is required");
      }
      if (stock == null) {
        stock = 1;
      }else if (stock <= 0) {
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
    };
  }
  function createLibrary() {
    let books = [];
    let users = [];
    function addUser(user) {
      if (users.find((u) => u.id === user.id)) {
        throw new Error("User ID already exists");
      }
      users.push(user);
    }
    function addBook(book) {
      books.push(book);
    }
    function viewAvailableBooks() {
      return books.filter((book) => book.stock > 0);
    }
    function getBookStock(search) {}
    return {
      addUser,
      addBook,
      viewAvailableBooks,
      getBookStock,
    };
  }
  module.exports = { createBook, createUser, createLibrary };