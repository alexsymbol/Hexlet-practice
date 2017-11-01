const invertCase = (str) => {
  
  let result = '';
  
  for (let i = 0; i <= str.length -1; i++ ){
    if (str[i] === toLowerCase(str[i])){
      result += toUpperCase(str[i]);
    }
    else if (str[i] === toUpperCase(str[i])){
      result += toLowerCase(str[i]);
    }
    else {
      result += str[i];
    }
  }
  
  return result;
  
};