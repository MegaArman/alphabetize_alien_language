"use strict";

const alphabetize = (words) =>
{
  const alphabet = [];
  
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


//case 1 - the ordering of the list tells us
//case 2 - there are ties at indices
//in the exmaple below c never appears first, hence is after a
//const test1 =
//[
//  "bca",
//  "aaa",
//  "acb"
//];
//
//const test2 = 
//[
//  "abb",
//  "bda",
//  "bad"
//];
//
//const test3 = 
//[
//  "bc",
//  "acb",
//  "abc"
//];
//
//const test4 = 
//[
//  "caa",
//  "aab",
//  "aaa"
//];
//
//
//
//const test5 = 
//[
//  "acb",
//  "abc",
//  "dcb",
//  "cbd"
//];
//
//const test6 = 
//[
//  "acb",
//  "abc",
//  "dcb",
//  "ddd"
//];
//
//console.log(alphabetize(test1));
//console.log(alphabetize(test2));
//console.log(alphabetize(test3));
//console.log(alphabetize(test4));
//console.log(alphabetize(test5));
//console.log(alphabetize(test6));

//exports
module.exports = alphabetize;
