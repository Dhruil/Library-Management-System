const createBook = require('./index')
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