// exercise

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function filterNumbers(inputArray, predicate) {
//   const outputArray = [];
//   for (let i = 0; i < inputArray.length; i++) {
//     if (predicate(inputArray[i])) {
//       outputArray.push(inputArray[i]);
//     }
//   }
//   return outputArray;
// }

// const oddNumbers = filterNumbers(numbers, function (n) {
//   return n % 2 === 1;
// });

// const evenNumbers = filterNumbers(numbers, function (n) {
//   return n % 2 === 0;
// });

const oddNumbers = numbers.filter(function (n) {
  return n % 2 === 1;
});

const evenNumbers = numbers.filter(function (n) {
  return n % 2 === 0;
});
