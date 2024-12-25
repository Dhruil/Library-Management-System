const {createBook,createUser,createLibrary} = require("./index");
test("should create a book correctly", () => {
    const book = createBook(
      "9781612680194",
      "Rich Dad Poor Dad",
      "Robert Kiyosaki",
      1997,
      5
    );
    expect(book.isbn).toBe("9781612680194");
    expect(book.title).toBe("Rich Dad Poor Dad");
    expect(book.author).toBe("Robert Kiyosaki");
    expect(book.publicationYear).toBe(1997);
    expect(book.stock).toBe(5);
  });
  test("should throw an error when creating a book without ISBN", () => {
    expect(() =>
      createBook(null, "Rich Dad Poor Dad", "Robert Kiyosaki", 1997, 5)
    ).toThrow();
  });
  test("should set default stock to 1 when not provided", () => {
    const book = createBook("9781612680194", "Rich Dad Poor Dad", "Robert Kiyosaki", 1997);
    expect(book.stock).toBe(1);
  });
  test("should throw an error when stock is 0 or negative", () => {
    expect(() =>
      createBook("1234567890", "Test Book", "Test Author", 2023, 0)
    ).toThrow();
    expect(() =>
      createBook("1234567890", "Test Book", "Test Author", 2023, -1)
    ).toThrow();
  });

  test("should create a user correctly", () => {
    const user = createUser(1, "Dhruil");
    expect(user.id).toBe(1);
    expect(user.name).toBe("Dhruil");
    expect(user.borrowedBooks).toEqual([]);
  });

  test("should add a book to the library", () => {
    const library = createLibrary();
    const book = createBook(
      "9781612680194",
      "Rich Dad Poor Dad",
      "Robert Kiyosaki",
      1997,
      5
    );
    library.addBook(book);
    const availableBooks = library.viewAvailableBooks();
    expect(availableBooks.length).toBe(1);
    expect(availableBooks[0]).toEqual(book);
  });
  test("should throw an error when adding a user with an existing ID", () => {
    const library = createLibrary();
    const user1 = createUser(1, "Dhruil");
    const user2 = createUser(1, "Parmar");
    library.addUser(user1);
    expect(() => library.addUser(user2)).toThrow();
  });
  test("should increase stock when adding an existing book", () => {   
    const library = createLibrary();
    const book1 = createBook(
      "9781612680194",
      "Rich Dad Poor Dad",
      "Robert Kiyosaki",
      1997,
      5
    );
    const book2 = createBook(
      "9781612680194",
      "Rich Dad Poor Dad",
      "Robert Kiyosaki",
      1997,
      3
    );
    library.addBook(book1);
    library.addBook(book2);
    expect(library.getBookStock("9781612680194")).toBe(8)});

describe("Book Borrowing and Returning", () => {
  beforeEach(() => {
    const library = createLibrary();
    const book = createBook(
      "9781612680194",
      "Rich Dad Poor Dad",
      "Robert Kiyosaki",
      1997,
      2
    );
    const user = createUser(1, "Dhruil");
    library.addBook(book);
    library.addUser(user);
  });
  test("should allow a user to borrow a book", () => {
    library.borrowBook(1, "9781612680194");
    expect(library.getBookStock("9781612680194")).toBe(1);
  });
  test("should throw an error when borrowing a non-existent book", () => {
    expect(() => library.borrowBook(1, "9876543210")).toThrow();
  });
  test("should throw an error when borrowing a book with no stock", () => {
    library.borrowBook(1, "9781612680194");
    library.borrowBook(1, "9781612680194");
    expect(() => library.borrowBook(1, "9781612680194")).toThrow();
  });
  test("should allow a user to return a book", () => {
    library.borrowBook(1, "9781612680194");
    library.returnBook(1, "9781612680194");
    expect(library.getBookStock("9781612680194")).toBe(2);
  });
  test("should throw an error when returning a book not borrowed", () => {
    expect(() => library.returnBook(1, "9781612680194")).toThrow();
  });
});