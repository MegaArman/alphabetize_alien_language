"use strict";

const sortRelations = (r) =>
{
  const visited = [];
  const stack = [];

  const helper = (p) =>
  {
    if (r.has(p))  //if this vertex has children / succeeding letters 
    {
      r.get(p).forEach((c) =>
      {
        if (!visited.includes(c))
        {
          visited.push(c); 
          helper(c); //will visit all descendants
        }
      });
      stack.push(p); //have visited all descendants
    }
    else //is last letter, no descendants
    {
      stack.push(p);
    } 
  };
  
  r.forEach((_, p) =>
  {
    if (!visited.includes(p))
    {
      visited.push(p);
      helper(p);
    }
  });

  return stack.reverse();   
};

module.exports = sortRelations;   
