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
    this.subject = [];
  }

  addSubject(subject) {
    this.subject.push(subject);
  }

  addMark(mark, subjectName) {
    let index = this.subject.findIndex(
      (element) => element.name === subjectName
    );
    if (index === -1) {
      return null;
    } else if (mark > 0 && mark <= 5) {
      this.subject[index].marks.push(mark);
    } else {
      console.log(`Ошибка, оценка должна быть числом от 1 до 5`);
    }
  }

  getAverageBySubject(subjectName) {
    let sum;
    let index = this.subject.findIndex(
      (element) => element.name === subjectName
    );
    if (index === -1) {
      return console.log(`Несуществующий предмет`);
    } else {
      sum = this.subject[index].marks.reduce((acc, item) => acc + item, 0);
    }
    let average = sum / this.subject[index].marks.length;

    return console.log(`Средний балл по предмету ${subjectName} ${average}`);
  }

  getAverage() {
    let arrMarks = [];
    let result = [];
    for (let i = 0; i < this.subject.length; i++) {
      for (let j = 0; j < this.subject[i].marks.length; j++) {
        arrMarks.push(this.subject[i].marks[j]);
      }
    }
    result = arrMarks.reduce((acc, item) => acc + item, 0);
    return result / arrMarks.length;
  }
}

class Algebra {
  constructor(name) {
    this.name = name;
    this.marks = [];
  }
}

class Geometry {
  constructor(name) {
    this.name = name;
    this.marks = [];
  }
}

class Physics {
  constructor(name) {
    this.name = name;
    this.marks = [];
  }
}
