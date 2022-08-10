function cachingDecoratorNew(func) {
  const cache = {};
  return (...args) => {
    const hash = args.join(",");
    if (hash in cache) {
      console.log("Из кэша: " + cache[hash]);
      return "Из кэша: " + cache[hash];
    } else if (Object.keys(cache).length > 4) {
      let deleteHash = Object.keys(cache)[0];
      delete cache[deleteHash];
    }
    const result = func(...args);
    cache[hash] = result;
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  };
}

function debounceDecoratorNew(func, delay) {

  let timeoutId = null;
  function wrapper(...args) {
    wrapper.count++;
    if (timeoutId) {
      clearTimeout(timeoutId);      //1
    } else {
      wrapper.countCallBack++;
      func(...args);
    }
    timeoutId = setTimeout(() => {
      wrapper.countCallBack++;
      func(...args);
    }, delay);
  }
  wrapper.countCallBack = 0;
  wrapper.count = 0;
  return wrapper;

// let timerId = null;
// let first = false;
// return function wrapper(...args) {   //2
//   if (timerId) {
//     clearTimeout(timerId);
//   }

//   if (!first) {
//     first = true;
//     return func(...args);
//   }

//   timerId = setTimeout(() => {
//     timerId = null;
//     return func(...args);
//   }, delay);
// };
}

function debounceDecorator2(func,delay) {
  let timeoutId = null;
  function wrapper(...args) {
    wrapper.count++;
    if (timeoutId) {
      clearTimeout(timeoutId);      //1
    } else {
      wrapper.countCallBack++;
      func(...args);
    }
    timeoutId = setTimeout(() => {
      wrapper.countCallBack++;
      func(...args);
    }, delay);
  }
  wrapper.countCallBack = 0;
  wrapper.count = 0;
  return wrapper;

  // let timerId = null;
  // let first = false;
  // function wrapper(...args) {
  //   wrapper.count++;
  //   if (timerId) {
  //     clearTimeout(timerId);     //2
  //   }
  //   if (!first) {
  //     first = true;
  //     wrapper.countCallBack++;
  //     return func(...args);
  //   }
  //   timerId = setTimeout(() => {
  //     timerId = null;
  //     wrapper.countCallBack++;
  //     return func(...args);
  //   }, delay);
  // }
  // wrapper.countCallBack = 0;
  // wrapper.count = 0;

  // return wrapper;
}
