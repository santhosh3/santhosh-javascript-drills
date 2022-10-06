function counterFactory() {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 4;
  let increment = () => {
    return ++count
  }
  let decrement = () => {
    return --count
  }
  return {
    increment,
    decrement
  }
}
console.log(counterFactory().increment());
console.log(counterFactory().decrement());

function cb () { console.log("Callback invoked") };
function limitFunctionCallCount(cb, n) {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  // Returning null is acceptable if cb can't be returned
  let counter = n;
  function invoke () {
    if(counter > 0) {
      cb()
      counter--
    }else{
      console.log(`callback already invoked ${n} times`)
    }`   `
  }
  return {invoke};
}
let calling = limitFunctionCallCount(cb, 3);
calling.invoke();
calling.invoke();
calling.invoke();
calling.invoke();

function cacheFunction(cb) {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.￼﻿
  let cache = {}
  return (i) => {
    if(Object.prototype.hasOwnProperty.call(cache,i)){
      return cache[i]
    }
    cache[i] = cb[i]
    return cache[i]
  }
}
