// Function Closure

// why / where need closures in our code?

// to encapsulate data / behavior from outside access

// module : counter
// count
// increment
// getCount

// global-scope

const counter = (function () {
  let count = 0; // private
  function increment() {
    count++;
  }
  function getCount() {
    return count;
  }
  return {
    inc: increment,
    get: getCount,
  };
})();

// self executable functions
// IIFE (Immediately Invoked Function Expression)
// Module Pattern
