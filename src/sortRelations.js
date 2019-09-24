"use strict";

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
//const r = {"b": ["t"], "t": ["a", "c"], "a": ["c"]}; // b t a
const r = { a: [ 'b' ], d: [ 'a' ] };
const v = sortRelations(r, Object.keys(r)[0]);
console.log("v", v);

   
