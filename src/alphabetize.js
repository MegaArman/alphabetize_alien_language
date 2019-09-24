"use strict";

//sort based on relations

//notVisited
//visited is lsit of keys
const sortRelations = (relations, p, visited = []) =>
{
  if (visited.includes(p)) 
  {
    return;
  }
  else if (!(Object.keys(relations).includes(p)))
  {
    visited.push(p);
    return;
  }
  else
  {
    visited.push(p);
    relations[p].forEach((child) =>
    {   
      sortRelations(relations, child, visited);
    }); 
  }

  return visited;
};

const alphabetize = (words) =>
{
  const relations = {}; // map of lists, {a => [b,c,d]}
  let prevWord = words[0];

  //words.forEach((word) =>
  //{
  //  word.forEach((letter) =>
  //  {
  //    if (!relations.has(letter))
  //    {
  //      relations.set(letter, []);
  //    }
  //  });
  //});

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
  const alphabet = sortRelations(relations, Object.keys(relations)[0]); 
  return alphabet;
};

module.exports = alphabetize;
