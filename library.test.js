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
  test("should throw an error when creating a book without ISBN", () => {
    expect(() =>
      createBook(null, "Test Book", "Test Author", 2023, 5)
    ).toThrow();
  });

  test("should set default stock to 1 when not provided", () => {
    const book = createBook("1234567890", "Test Book", "Test Author", 2023);
    expect(book.stock).toBe(1);
  });