const isPowerOfThree = (num) => {
  
  if (num % 3 === 0){
    return isPowerOfThree (num / 3);
  }
  else if (num === 1){
    return true;
  }
  else {
    return false;
  }
  
};
