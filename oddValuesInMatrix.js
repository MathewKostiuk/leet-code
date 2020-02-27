/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (n, m, indices) {


  const makeMatrix = (n, m) => {
    const matrix = [];
    for (let i = 0; i < n; i++) {
      matrix[i] = new Array(m);
    }
    return matrix;
  }

  const matrix = makeMatrix(n, m);

  const increment = (matrix, indices) => {
    indices.forEach((indice) => {
      const rowChange = matrix[indice[0]].map(digit => digit + 1);
      matrix[indice[0]] = rowChange;
      matrix.map((row) => {
        row[indice[1]] = row[indice[1]] + 1;
        return row;
      });
    });
    return matrix;
  }

  const countOdd = (matrix) => {
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] % 2 !== 0) {
          count++;
        }
      }
    }
    return count;
  }
  const afterIncrement = increment(matrix, indices);
  return countOdd(afterIncrement)

};

console.log(oddCells(2, 3, [[0, 1], [1, 1]]));
