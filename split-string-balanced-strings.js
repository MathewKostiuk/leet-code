/**
 * @param {string} s
 * @return {number}
 */

const s = "RLRRRLLRLL";
const balancedStringSplit = function (s) {
  if (s.length === 1) {
    return 0;
  }
  let counter = 0;
  let rCount = 0;
  let lCount = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === 'R' ? rCount++ : lCount++;
    if (rCount === lCount) {
      counter++;
      rCount = 0;
      lCount = 0;
    }
  }
  return counter;
};

console.log(balancedStringSplit(s));
