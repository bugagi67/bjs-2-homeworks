function compareArrays(arr1, arr2) {
  let result;

  return (result =
    arr1.length === arr2.length && arr1
    .every((n, i) => n === arr2[i]));
  // boolean
}

function advancedFilter(arr) {
  let resultArr;

  return (resultArr = arr
    .filter((element) => element > 0)
    .filter((element) => element % 3 === 0)
    .map((i) => i * 10));
  //array
}
