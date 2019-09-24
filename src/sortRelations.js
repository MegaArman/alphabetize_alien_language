"use strict";

const sortRelations = (r) =>
{
  const visited = [];
  const keys = Object.keys(r);
  const stack = [];

  const helper = (p) =>
  {
    if (keys.includes(p))  //if this vertex has children / succeeding letters 
    {
      r[p].forEach((c) =>
      {
        if (!visited.includes(c))
        {
          visited.push(c); 
          helper(c); //will visit all descendant
        }
      });
      stack.push(p); //visited all descendants
    }
    else //last letter, no descendants
    {
      stack.push(p);
    } 
  };
  
  Object.keys(r).forEach((p) =>
  {
    if (!visited.includes(p))
    {
      visited.push(p);
      helper(p);
    }
  });

  return stack.reverse();   
};


//const r = {"b": ["t"], "t": ["d", "a"], "a": ["c"]}; // b t a
//const r = {"t": ["a"], "b": ["t"]};
//const r = {"b": ["t"], "t": ["a"]};
//console.log(Object.keys(r));
//const v = sortRelations(r);
//console.log("v", v);

module.exports = sortRelations;

   
