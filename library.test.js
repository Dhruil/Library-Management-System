const createBook = require('./library')
test("should create a book correctly", () => {
    const book = createBook(
      "1234567890",
      "Test Book",
      "Test Author",
      2023,
      5
    );
    expect(book.isbn).toBe("1234567890");
    expect(book.title).toBe("Test Book");
    expect(book.author).toBe("Test Author");
    expect(book.publicationYear).toBe(2023);
    expect(book.stock).toBe(5);
  });