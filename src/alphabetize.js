"use strict";

const sortRelations = require("./sortRelations.js");
const alphabetize = (words) =>
{
  const relations = {}; // map of lists, {a => [b,c,d]}
  let prevWord = words[0];
  words.splice(1).forEach((word) =>
  {
    for (let i = 0; i < prevWord.length; i++)
    {
      const p = prevWord[i];
      const c = word[i];
      
      if (p !== c)
      {
        if (p in Object.keys(relations))
        {
          relations[p].push(c);  //may have duplicates
        }
        else 
        {
          relations[p] = [c]; 
        }
       
       break; 
      }
    }
    
    prevWord = word;
  });
  console.log("relations", relations);
  const alphabet = sortRelations(relations); 
  return alphabet;
};

module.exports = alphabetize;
