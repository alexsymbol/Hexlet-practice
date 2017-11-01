const isHappyTicket = (num) =>{

const numString = num => String(num);
  
  const subSrt1 = (num) => substr(numString(num), 0, 3);
  const subSrt2 = (num) => substr(numString(num), 3 );
  
  const sum = (str) => {
    
    let i = 0;
    let result = 0;
    while(i <= length(str) - 1){ 
        result += Number(str[i]);
        i++;
    }
    return result;
  };
  
  if(sum(subSrt1(num)) === sum(subSrt2(num))){
    return true;
  }
  
  return false;
};