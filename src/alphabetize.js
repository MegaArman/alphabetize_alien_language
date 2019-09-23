"use strict";

const alphabetize = (words) =>
{
  const alphabet = [];

  //step 1 - find letters of the alphabet
  words.forEach((word) =>
  { 
    [...word].forEach((letter) =>
    {
      if (!alphabet.includes(letter)) 
      {
        alphabet.push(letter);  
      }
    });
  });
 
  //step 2 - rearrange the alphabet to get the correct ordering 
  let prevWord = "";
  words.forEach((word) =>
  {
    for (let i = 0; i < prevWord.length; i++)
    {
      const p = prevWord[i];
      const c = word[i];

      if (p !== c)
      {
        const pIndex = alphabet.indexOf(p);
        const cIndex = alphabet.indexOf(c);

        if (pIndex > cIndex)
        {
          alphabet.splice(pIndex, 1); //delete p
          alphabet.splice(cIndex, 0, p); //insert p before c
        }
        break;
      }
    }
    
    prevWord = word;
  });

  return alphabet;
};

module.exports = alphabetize;
