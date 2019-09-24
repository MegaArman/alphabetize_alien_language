"use strict";

const findOrdering = (r) =>
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
          helper(c);
        }
        delete r[p];
        stack.push(p);
      });
    }
    else //last letter
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
  console.log("stack", stack);
  console.log("visited", visited);
};


//const r = {"b": ["t"], "t": ["a", "d"], "a": ["c"]}; // b t a
const r = {"t": ["a"], "b": ["t"]};

const v = findOrdering(r);
console.log("v", v);

   
