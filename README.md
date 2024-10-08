# Library Management System

Welcome to the Library Management System! This repository demonstrates a JavaScript implementation of a simple library management system using a functional programming approach. The project emphasizes Test-Driven Development (TDD) practices with Jest for testing.

## Table of Contents

- [Library Management System](#library-management-system)
  - [Table of Contents](#table-of-contents)
  - [Problem Statement](#problem-statement)
  - [Solution](#solution)
  - [Features](#features)
    - [Function Descriptions](#function-descriptions)
  - [Setup Instructions](#setup-instructions)
    - [Prerequisites](#prerequisites)
    - [Clone the Repository](#clone-the-repository)
    - [Running Tests](#running-tests)
  - [Test Coverage](#test-coverage)

## Problem Statement

Create a simple library management system that allows for basic operations such as adding books, creating users, borrowing books, returning books, and viewing available books.

For More Details : click Here : [https://drive.google.com/file/d/16TEj0ahjWSDh4IzGkLT0-UfJWpUgssdE/view?usp=sharing]

## Solution

This project follows TDD principles to implement a library management system. The solution is built with pure functions, ensuring that each feature is developed and tested in isolation, demonstrating effective TDD practices.

## Features

The library system provides the following main functions:

### Function Descriptions

- **`createBook(isbn, title, author, publicationYear, stock)`**:

  - Creates a new book object.
  - Parameters:
    - `isbn` (string): The unique identifier for the book (required).
    - `title` (string): The title of the book.
    - `author` (string): The author of the book.
    - `publicationYear` (number): The year the book was published.
    - `stock` (number): The number of copies available (defaults to 1 if not provided).
  - Throws an error if ISBN is not provided or if stock is 0 or negative.

- **`createUser(id, name)`**:

  - Creates a new user object.
  - Parameters:
    - `id` (number or string): The unique identifier for the user.
    - `name` (string): The name of the user.
  - Returns a user object with an empty `borrowedBooks` array.

- **`createLibrary()`**:

  - Creates a library object with methods to manage books and users.
  - Returns an object with the following methods:
    - `addUser(user)`
    - `addBook(book)`
    - `viewAvailableBooks()`
    - `borrowBook(userId, search)`
    - `returnBook(userId, search)`
    - `getBookStock(search)`

- **`addUser(user)`**:

  - Adds a new user to the library.
  - Throws an error if the user ID already exists.

- **`addBook(book)`**:

  - Adds a new book to the library or increases stock if the book already exists.

- **`viewAvailableBooks()`**:

  - Returns a list of all books with stock greater than 0.

- **`borrowBook(userId, search)`**:

  - Allows a user to borrow a book.
  - Parameters:
    - `userId` (number or string): The ID of the user borrowing the book.
    - `search` (string): The ISBN or title of the book to borrow.
  - Throws errors for invalid user, non-existent book, or unavailable book.

- **`returnBook(userId, search)`**:

  - Handles the return of a borrowed book.
  - Parameters:
    - `userId` (number or string): The ID of the user returning the book.
    - `search` (string): The ISBN of the book being returned.
  - Throws errors for invalid user or if the user didn't borrow the book.

- **`getBookStock(search)`**:
  - Returns the current stock of a specific book.
  - Parameter:
    - `search` (string): The ISBN or title of the book.
  - Throws an error if the book is not found.

## Setup Instructions

### Prerequisites

- **Node.js**: Ensure Node.js is installed on your machine.

### Clone the Repository

1. Open your terminal or command prompt.
2. Run the following command to clone the repository:

   ```bash
   git clone https://github.com/Dhruil/Library-Management-System.git
   ```

3. Navigate into the project directory:

   ```bash
   cd Library-Management-System
   ```

4. Install dependencies:

   ```bash
   npm install
   ```

### Running Tests

Run the following command to execute the tests:

```bash
npm test
```

## Test Coverage

The project uses Jest for testing. The test suite covers various scenarios including:

- Creating books and users
- Adding books and users to the library
- Borrowing and returning books
- Handling edge cases and errors

To view the full test coverage, run:

```bash
npm test -- --coverage
```
![Report Of Test](Report.png)

Project Link: [https://github.com/Dhruil/Library-Management-System](https://github.com/Dhruil/Library-Management-System)
