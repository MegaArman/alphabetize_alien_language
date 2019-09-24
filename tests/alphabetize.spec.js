"use strict";
const test = require("tape").test;
const alphabetize = require( "../src/alphabetize.js");

test("alphabetize tests", (t) =>
{
  {
   const actual = alphabetize(["bca", "aaa", "acb"]); 
   const expected = ["b", "a", "c"];
   t.deepEqual(actual, expected, "one simple tie");
  }

  {
    const actual = alphabetize(["abb", "bda", "bad"]); 
    const expected = ["d", "a", "b"];
    t.deepEqual(actual, expected, "insert at head");
  }

  {
    const actual = alphabetize(["bc", "acb", "abc"]); 
    const expected = ["c", "b", "a"];
    t.deepEqual(actual, expected, "short word, valid tie and false tie");
  }

  {
    const actual = alphabetize(["caa", "aab", "aac", "aaa"]); 
    const expected = ["b", "c", "a"];
    t.deepEqual(actual, expected, "insert between");
  }

  {
    const actual = alphabetize(["acb", "abc", "dcb", "cdb"]); 
    const expected = ["a", "d", "c", "b"];
    t.deepEqual(actual, expected, "larger alphabet");
  }

  {
    const actual = alphabetize(["a", "b", "c"]); 
    const expected = ["a", "b", "c"];
    t.deepEqual(actual, expected, "no ties");
  }
   
  {
    const actual = alphabetize(["abc", "bca", "cba"]); 
    const expected = ["a", "b", "c"];
    t.deepEqual(actual, expected);
  }


  //v2:
  {
    const actual = alphabetize(["ab", "at", "aa"]); 
    const expected = ["b", "t", "a"];
    t.deepEqual(actual, expected);
  }
  
  t.end();
});

