"use strict";

const sortRelations = (r) =>
{
  const visited = new Set();
  const stack = [];

  const helper = (p) =>
  {
    if (r.has(p))  //if this vertex has children / succeeding letters 
    {
      r.get(p).forEach((c) =>
      {
        if (!visited.has(c))
        {
          visited.add(c); 
          helper(c); //will visit all descendants
        }
      });
    }
    //have visited all descendents or has no descendents (last letter):
    stack.push(p);   
  };
  
  r.forEach((_, p) =>
  {
    if (!visited.has(p))
    {
      visited.add(p);
      helper(p);
    }
  });

  return stack.reverse();   
};

module.exports = sortRelations;   
