var judgeSquareSum = function (c) {
  if (Math.trunc(Math.sqrt(c)) === Math.sqrt(c)) {
    return true;
  }

  for (let i = 0; i < Math.sqrt(c); i++) {
    const b = Math.trunc(Math.sqrt(c - i * i));
    if (b * b + i * i === c) {
      return true;
    }
  }
};

console.log(judgeSquareSum(4));
