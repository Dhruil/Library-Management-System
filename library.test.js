const { createBook, createUser, createLibrary } = require("./library");
describe("library management system", () => {
  beforeEach(() => {
    library = createLibrary();
  });
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

  test("should throw and error  when stock not provided", () => {
    expect(() =>
      createBook(
        "9781612680194",
        "Rich Dad Poor Dad",
        "Robert Kiyosaki",
        1997
      ).toThrow()
    );
  });
  test("should throw an error when stock is 0 or negative", () => {
    expect(() =>
      createBook(
        "9781612680194",
        "Rich Dad Poor Dad",
        "Robert Kiyosaki",
        1997,
        0
      )
    ).toThrow();
    expect(() =>
      createBook(
        "9781612680194",
        "Rich Dad Poor Dad",
        "Robert Kiyosaki",
        1997,
        -1
      )
    ).toThrow();
  });
  test("should Not Create Book With Null Book", () => {
    expect(() => createBook(null, null, null, null, null)).toThrow();
  });
  test("should create a user correctly", () => {
    const user = createUser(1, "Dhruil");
    expect(user.id).toBe(1);
    expect(user.name).toBe("Dhruil");
    expect(user.borrowedBooks).toEqual([]);
  });
  test("should add a book to the library", () => {
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
  test("should increase stock when adding an existing book", () => {
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
    expect(library.getBookStock("9781612680194")).toBe(8);
  });
  test("should throw an error when adding a user with an existing ID", () => {
    const user1 = createUser(1, "Dhruil");
    const user2 = createUser(1, "Parmar");
    library.addUser(user1);
    expect(() => library.addUser(user2)).toThrow();
  });
  describe("Book Borrowing and Returning", () => {
    beforeEach(() => {
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

  describe("Book Availablity", () => {
    test("should return an empty array when no books are in the library", () => {
      expect(library.viewAvailableBooks()).toEqual([]);
    });
    test("should return all books when all books have stock", () => {
      const book1 = createBook(
        "9781612680194",
        "Rich Dad Poor Dad",
        "Robert Kiyosaki",
        1997,
        1
      );
      const book2 = createBook(
        "9780747532699",
        "Harry Potter and the Philosopher's Stone",
        "J.K. Rowling",
        1997,
        2
      );
      library.addBook(book1);
      library.addBook(book2);

      const availableBooks = library.viewAvailableBooks();
      expect(availableBooks).toHaveLength(2);
      expect(availableBooks[0]).toEqual(book1);
      expect(availableBooks[1]).toEqual(book2);
    });
    test("should update available books when a book is borrowed", () => {
      const book = createBook(
        "9781612680194",
        "Rich Dad Poor Dad",
        "Robert Kiyosaki",
        1997,
        1
      );
      const user = { id: 1, name: "Test User", borrowedBooks: [] };
      library.addBook(book);
      library.addUser(user);

      expect(library.viewAvailableBooks()).toHaveLength(1);

      library.borrowBook(1, "9781612680194");

      expect(library.viewAvailableBooks()).toHaveLength(0);
    });
  });
});
