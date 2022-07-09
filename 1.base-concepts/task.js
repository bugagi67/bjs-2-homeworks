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

    arr.push(+d2.toFixed(2), +d3.toFixed(2));

  } else {
    arr = [];

  }

  return arr;
}

function calculateTotalMortgage( percent, contribution, amount, date ) {
  let totalAmount;

  'use strict';

  let s;
  let p;

  if ( isNaN(amount) || amount == 0 || amount == '' || amount < 0 ) {
    return (`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`)
  } else { s = amount - contribution }; 

  if ( isNaN(contribution) || contribution < 0 ) {
    return (`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`)
  };

  let current = new Date();

  let n = ( date.getFullYear() * 12 + date.getMonth() ) -
   ( current.getFullYear() * 12 + current.getMonth() ); 

  if ( isNaN(percent) || percent == '' || percent < 0 ) {
    return (`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`)
  } else { p =( percent / 100 ) / 12 };

  let payment = s * ( p + ( p / ((( 1 + p ) ** n ) - 1 )));

  totalAmount = payment * n;  

  return +totalAmount.toFixed(2);
}

const nextYearDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));

console.log(nextYearDate)
