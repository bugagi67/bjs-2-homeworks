"use strict";
function parseCount(value) {
  let parsed = Number.parseInt(value);
  if (isNaN(parsed)) {
    throw new Error("Невалидное значение");
  } else {
    return parsed;
  }
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(sideLeft, sideRight, sideBottom) {
    this.sideLeft = sideLeft;
    this.sideRight = sideRight;
    this.sideBottom = sideBottom;

    if (
      sideLeft + sideRight < sideBottom ||
      sideLeft + sideBottom < sideRight ||
      sideRight + sideBottom < sideLeft
    ) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  getPerimeter() {
    let perimeter = this.sideLeft + this.sideRight + this.sideBottom;
    return perimeter;
  }

  getArea() {
    let p = (this.sideLeft + this.sideRight + this.sideBottom) / 2;
    let s = Math.sqrt(
      p * (p - this.sideLeft) * (p - this.sideRight) * (p - this.sideBottom)
    );
    return +s.toFixed(3);
  }
}

function getTriangle (sideLeft, sideRight, sideBottom) {
  try {
    return new Triangle(sideLeft, sideRight, sideBottom)
  } catch (error) {
    return {
      getPerimeter: () => "Ошибка! Треугольник не существует",
      getArea: () => "Ошибка! Треугольник не существует",
    }
  }
}
