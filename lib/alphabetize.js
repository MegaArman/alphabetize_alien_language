"use strict";

const alphabetize = (words) =>
{
  const alphabet = words.reduce(
    (accumulator, current) =>
    {
      console.log(current);
    },
     []
  );


  words.forEach((word) => 
  {
    if (!alphabet.includes(word[0]))
    {
      alphabet.push(word[0]);
    } 
  }); 
    
  words.forEach((word) =>
  {
    [...word].slice(1).forEach((c) =>
    {
      if (!alphabet.includes(c))
      {
        alphabet.push(c);
      }
    });  
  });
 
 let prevWord = "";
 words.forEach((word) =>
 {
  if (prevWord[0] === word[0])
  {
    for (let i = 1; i < prevWord.length; i++)
    {
      let p = prevWord[i];
      let c = word[i];

      if (p !== c)
      {
        let pIndex = alphabet.indexOf(p);
        let cIndex = alphabet.indexOf(c);

        if (pIndex > cIndex)
        {
          alphabet.splice(pIndex, 1); //delete p
          alphabet.splice(cIndex, 0, p); //insert p before c
        }
        break;
      }
    }
  }
  
  prevWord = word;
 });

  return alphabet;
};

module.exports = alphabetize;
