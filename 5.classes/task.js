"use strict";

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.type = null;
    this.state = 100;
  }

  fix() {
    let sum = this.state * 1.5;
    this.state = sum;
  }

  set state(value) {
    if (value < 0) {
      return (this._state = 0);
    } else if (value > 100) {
      return (this._state = 100);
    }
    return (this._state = value);
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    return this.books.find((book) => book[type] === value)
      ? this.books.find((book) => book[type] === value)
      : null;
  }

  giveBookByName(bookName) {
    let deleteBook = this.books.findIndex((book) => book.name === bookName);
    if (deleteBook === -1) {
      return null;
    } else {
      return this.books.splice([deleteBook], 1)[0];
    }
  }
}