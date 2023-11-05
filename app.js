const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:
function slice(start, end) {
  let modifiedFood = [];
  for (let rish = start; rish < end - 1; rish++) {
    modifiedFood.push(foods[rish]);
  }
  return modifiedFood;
}

// Progression 2:

function spliced() {
  foods.splice(2, 0, 'noodles', 'icecream');
  return foods;
}

// Progression 3:

function isEven(number) {
  return number % 2 == 0 ? true : false;
}

function isPrime(number) {
  for (let i = 2, abh = Math.sqrt(number); i <= abh; i++)
    if (number % i === 0) return false;
  return number > 1;
}

function checkNumber(numberArray, operation) {
  modifiedNumberArray = numberArray.filter(operation);
  return modifiedNumberArray;
}

// Progression 4:
function reject(num) {
  let nonPrimeNumberArray = [];
  num.forEach((number) => {
    isPrime(number) ? null : nonPrimeNumberArray.push(number);
  });

  return nonPrimeNumberArray;
}

function nonPrime(num) {
  man = reject(num);
  return man;
}

// Progression 5:

const isEvenUsingLambda = (rish) => rish % 2 == 0;

// Progression 6:

function square(num) {
  return num ** 2;
}

function findSquareOfNumbers(myArray) {
  let squaree = myArray.map(square);
  return squaree;
}

// Progression 7:

function multiply(myArray) {
  return myArray.reduce((mull, ply) => {
    return mull * ply;
  });
}

function sumOfSquares(myArray) {
  return myArray.map(square).reduce((sum, number) => {
    return sum + number;
  });
}
