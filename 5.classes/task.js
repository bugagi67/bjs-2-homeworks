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

class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = {};
  }

  setSubject(subjectName) {
    if (this.marks.hasOwnProperty(subjectName)) {
      return console.log(`Предмет ${subjectName} уже существует`);
    } else {
      return (this.marks[subjectName] = []);
    }
  }

  addMark(mark, subjectName) {
    if (mark > 0 && mark < 6) {
      if (this.marks.hasOwnProperty(subjectName)) {
        return this.marks[subjectName].push(mark);
      } else {
        return this.marks[subjectName] = [mark];
      }
    } else {
      return console.log("Ошибка, оценка должна быть числом от 1 до 5");
    }
  }

  getAverageBySubject(subjectName) {
    let result;
    let path = this.marks[subjectName];
    if (this.marks.hasOwnProperty(subjectName)) {
      let average = path.reduce((acc, item) => acc + item, 0) / path.length;
      return average;
    } else {
      return console.log("Несуществующий предмет");
    }
  }

  getAverage() {
    let arr = [];
    for (let index in this.marks) {
      for (let element of this.marks[index]) {
        arr.push(element);
      }
    }
    let result = arr.reduce((acc, item) => acc + item, 0) / arr.length;
    return result;
  }

  exclude(reason) {
    this.excluded = reason;
    delete this.marks;
  }
}
