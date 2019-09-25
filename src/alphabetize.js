"use strict";

const sortRelations = require("./sortRelations.js");
const alphabetize = (words) =>
{
  // relations, map  of lists, {a => [b,c,d]}... (essentially a graph)
  const relations = new Map();   
  let prevWord = words[0];
  words.slice(1).forEach((word) =>
  {
    for (let i = 0; i < prevWord.length; i++)
    {
      const p = prevWord[i];
      const c = word[i];
      
      if (p !== c)
      {
        relations.has(p) ? relations.get(p).push(c) : relations.set(p, [c]);  
        break; 
      }
    }
    
    prevWord = word;
  });
  const alphabet = sortRelations(relations); 
  return alphabet;
};

module.exports = alphabetize;
