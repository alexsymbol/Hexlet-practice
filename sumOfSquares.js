const sumSquareDifference = (n) => {

  const sumOfNumbers = (n) => {
    let i = 1;
    let result = 0;
    while (i <= n){
      result += i;
      i++;
    }
    return Math.pow(result, 2);
  };

  const sumOfSquares = (n) => {
    let i = 1;
    let result = 0;
    while (i <= n){
      result += Math.pow(i, 2);
      i++;
    }
    return result;
  };

  return sumOfNumbers(n) - sumOfSquares(n);

};