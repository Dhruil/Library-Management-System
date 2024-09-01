const createBook = require("./library");
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
  const book = createBook(
    "9781612680194",
    "Rich Dad Poor Dad",
    "Robert Kiyosaki",
    1997
  );
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
