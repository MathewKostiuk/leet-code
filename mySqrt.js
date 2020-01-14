var mySqrt = function (x) {
  if (x === 0) {
    return 0;
  } else if (x === 1) {
    return 1;
  }
  return sqrt(x, Math.trunc(x / 2), 0, x);
};

const sqrt = (x, guess, min, max) => {
  const guessSquared = guess * guess;
  const nextGuessSquared = (guess + 1) * (guess + 1);

  if (guessSquared <= x && nextGuessSquared > x) {
    console.log(guess, nextGuessSquared);
    return guess;
  }

  return guessSquared > x ? sqrt(x, Math.trunc((guess - min) / 2), min, guess) : sqrt(x, Math.trunc((max + guess) / 2), guess, max);
}

console.log(mySqrt(9));
