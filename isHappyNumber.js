const sumOfSquareDigits = (num) => {
  const numAsStr = String(num);
  let sum = 0;
  for (let i = 0; i < length(numAsStr); i += 1) {
    const digit = Number(numAsStr[i]);
    sum += digit * digit;
  }

  return sum;
};

// BEGIN (write your solution here)

const isHappyNumber = (n) => {
  let count = 0;
  while (count <= 10) {
    sumOfSquareDigits(n);
    if (n === 1) {
      return true;
    }
    n = sumOfSquareDigits(n);
    count += 1;
  }

  return false;
};

export default isHappyNumber;

// END