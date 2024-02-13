var validWordAbbreviation = function (word, abbr) {
  `
  two pointer 
  abbr ="i12iz4n"
   i =>  if(inNaN(parseInt(abbr[abbrPointer]))) => true
   wordPointer => 1
   increase both pointer 
 
 '12' => 
  numByDigit = 0 + 1 => 1 
  numByDigit = 1 * 10 + 2 => 12 
 
  wordPointer + numByDigit => 1 + 12=> 13 
 
  `;
  // use two pointer

  let wordPointer = 0;
  let abbrPointer = 0;

  while (wordPointer < word.length && abbrPointer < abbr.length) {
    // case not a number
    if (isNaN(parseInt(abbr[abbrPointer]))) {
      if (abbr[abbrPointer] !== word[wordPointer]) {
        return false;
      }
      wordPointer++;
      abbrPointer++;
    }
    // case number
    else {
      if (parseInt(abbr[abbrPointer]) === 0) return false;
      let numByDigit = 0;
      while (!isNaN(parseInt(abbr[abbrPointer]))) {
        numByDigit = numByDigit * 10 + parseInt(abbr[abbrPointer]);
        abbrPointer++;
      }
      wordPointer += numByDigit;
    }
  }

  return wordPointer === word.length && abbrPointer === abbr.length;
};
