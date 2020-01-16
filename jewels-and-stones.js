/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters.Letters are case sensitive, so "a" is considered a different type of stone from "A".

const J = "aA";
const S = "aAAbbbb";


var numJewelsInStones = function (J, S) {
  let jewels = J.split('').reduce((acc, curr) => {
    acc[curr] = 0;
    return acc;
  }, {});

  return S.split('').filter(stone => {
    if (jewels.hasOwnProperty(stone)) {
      return stone;
    }
  }).length;
};



console.log(numJewelsInStones(J , S));
