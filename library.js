function createBook(isbn, title, author, publicationYear, stock) {
  if (
    isbn == null ||
    title == null ||
    author == null ||
    publicationYear == null ||
    stock == null
  ) {
    throw new Error("Some Book Details Are Missing");
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
function createLibrary() {
  let books = [];
  let users = [];
  function addUser(user) {
    if (users.find((u) => u.id === user.id)) {
      throw new Error("User ID already exists");
    }
    users.push(user);
    console.log(users);
  }
  function addBook(book) {
    const existingBook = books.find(
      (b) =>
        b.isbn === book.isbn &&
        b.title === book.title &&
        b.author === book.author &&
        b.publicationYear === book.publicationYear
    );
    if (existingBook) {
      existingBook.stock += book.stock;
    } else {
      books.push(book);
    }
  }
  function viewAvailableBooks() {
    return books.filter((book) => book.stock > 0);
  }
  function borrowBook(userId, search) {
    const user = users.find((u) => u.id === userId);
    if (!user) {
      throw new Error("User not found");
    }
    const book = books.find(
      (book) => book.isbn === search || book.title === search
    );
    if (book == undefined) {
      throw new Error("Book not found");
    }
    if (book.stock === 0) {
      throw new Error("Book is not available");
    }
    book.stock--;
    user.borrowedBooks.push(book.isbn);
  }
  function getBookStock(search) {
    const book = books.find(
      (book) => book.isbn === search || book.title === search
    );
    if (!book) {
      throw new Error("Book not found");
    }
    return book.stock;
  }
  function returnBook(userId, search) {
    const user = users.find((u) => u.id === userId);
    if (!user) {
      throw new Error("User not found");
    }

    const book = books.find((book) => book.isbn === search);
    const checkBook = user.borrowedBooks.indexOf(search);

    if (checkBook === -1) {
      throw new Error("User did not borrow this book");
    }
    book.stock++;
    user.borrowedBooks.splice(checkBook, 1);
  }
  return {
    addUser,
    addBook,
    viewAvailableBooks,
    borrowBook,
    returnBook,
    getBookStock,
  };
}
module.exports = { createBook, createUser, createLibrary };
