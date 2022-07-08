'use strict';

function solveEquation(a, b, c) {
  let arr;
  'use strict';

  arr = [];

  let d;

  d = b ** 2 - 4 * a * c;

  if (d === 0) {
    let d1 = - b / (2 * a);
    arr.push(d1);

  } else if (d > 0) {
    let d2 = (- b + Math.sqrt(d)) / (2 * a);
    let d3 = (- b - Math.sqrt(d)) / (2 * a);

    arr.push(d2, d3);

  } else {
    arr = [];
    
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
