"use strict";

const sortRelations = (relations) =>
{
  const visited = new Set();
  const stack = [];

  const visitDescendants = (p) =>
  {
    if (relations.has(p))  //if this vertex has children / succeeding letters 
    {
      relations.get(p).forEach((c) =>
      {
        if (!visited.has(c))
        {
          visited.add(c); 
          visitDescendants(c); //will visit all descendants
        }
      });
    }
    //have visited all descendents or has no descendents (last letter):
    stack.push(p);   
  };
  
  relations.forEach((_, p) =>
  {
    if (!visited.has(p))
    {
      visited.add(p);
      visitDescendants(p);
    }
  });

  return stack.reverse();   
};

module.exports = sortRelations;   
