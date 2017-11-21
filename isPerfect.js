const isPerfect = (n) => {
  let result = 0;
  for (let i = 1; i < n; i += 1) {
    if (n % i === 0) {
      result += i;
    }
  }
  if (result === 0 || result !== n) {
    return false;
  }

  return true;
};