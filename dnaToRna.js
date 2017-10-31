const dnaToRna = (dna) =>{

  let result = '';
  let i = 0;

  while (i <= dna.length - 1){

    let char = dna[i];

    if (dna === ''){
      return '';
    }
    else if (char === 'G'){
      result += 'C';
    }
    else if (char === 'C'){
      result += 'G';
    }
    else if (char === 'T'){
      result += 'A';
    }
    else if (char === 'A'){
      result += 'U';
    }
    else if (char !== 'A' || char !== 'C' || char !== 'G' || char !== 'T'){
      return null;
    }
    i++;
  }

  return result;
};
