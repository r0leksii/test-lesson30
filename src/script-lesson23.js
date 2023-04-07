// 1
const someArray = [
  "hello",
  -5,
  "world",
  10,
  23,
  -7,
  "apple",
  15,
  -2,
  "orange",
  8,
  "cat",
  -12,
  "dog",
  17,
  -11,
  "banana",
  4,
  "elephant",
  -3,
  20,
  "zebra",
  -9,
  13,
  "giraffe",
  -8,
  "lion",
  7,
  14,
  -1,
  "tiger",
  12,
  -10,
  "monkey",
  3,
  "snake",
  -6,
  19,
  1,
  "fish",
  -4,
  "bird",
  18,
  "horse",
  2,
  "cow",
  -15,
  16,
  -13,
  "sheep",
  -16,
];

// const calcElements = document.getElementById("nums");

function sumNumber(someNumbers) {
  let sum = someNumbers[0];

  for (let i = 1; i < someNumbers.length; i++) {
    if (typeof someNumbers[i] === "number") {
      sum += someNumbers[i];
    };
  };

  return sum;
};


function diffNumber(someNumbers) {
  let diff = someNumbers[0];

  for (let i = 1; i < someNumbers.length; i++) {
    if (typeof someNumbers[i] === "number") {
      diff -= someNumbers[i];
    };
  };
  return diff;
};


function prodNumber(someNumbers) {
  let prod = someNumbers[0];

  for (let i = 1; i < someNumbers.length; i++) {
    if (typeof someNumbers[i] === "number") {
      prod *= someNumbers[i];
    };
  };

  return prod;
};


function quotNumber(someNumbers) {
  let quot = someNumbers[0];

  for (let i = 1; i < someNumbers.length; i++) {
    if (typeof someNumbers[i] === "number") {
      quot /= someNumbers[i];
    };
  };

  return quot;
};


function minmaxNumbers(someNumbers) {
  let minElement = Infinity;
  let maxElement = -Infinity;

  for (let i = 0; i < someNumbers.length; i++) {
    if (typeof someNumbers[i] === "number") {

      if (someNumbers[i] < minElement) {
        minElement = someNumbers[i];
      };
    
      if (someNumbers[i] > maxElement) {
        maxElement = someNumbers[i];
      };
    };
  };

  return {
    min: minElement,
    max: maxElement,
  };
};

