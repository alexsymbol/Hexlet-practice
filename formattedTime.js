const formattedTime = (t) => {

  let h = 0;
  let z = '0';
  let dz = '0' + '0';
  let c = ':';

  if (t < 10){
    return dz + c + z + t;
  }

  else if(t > 10 && t < 60){
    return dz + c + t;
  }

  else{
    
    for (t; t >= 60; t -= 60){
      h += 1;
    }

     if (h < 10 && t >= 10){
      return z + h + c + t;
    }

    else if (h < 10 && t < 10){
      return z + h + c + z + t;
    }

    else if(h >= 10 && t >= 10){
      return h + c + t;
    }

    else if(h >= 10 && t < 10){
      return h + c + z + t;
    }

  }

};
