// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  min = arr[0];
  max = arr[0];
  sum = 0;

  for ( let i = 0; i < arr.length; i++ ) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }

  avg = sum / arr.length;
  avg = avg.toFixed(2);
  avg = +avg;

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i ++ ) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let res = [];

  for (let i = 0; i < arrOfArr.length; i++ ) {
    res.push(func(arrOfArr[i]));
  }

  let max = res[0];

  for ( let j = 0; j < res.length; j++ ) {
    if (res[j] > max) {
      max = res[j];
    };
  }
  return max;
}

// Задание 3
function worker2(arr) {
  min = arr[0];
  max = arr[0];
  difference = 0;

  for ( let i = 0; i < arr.length; i++ ) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    } 
  }

  return max - min;
}
