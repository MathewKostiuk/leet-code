/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    if (grid[i][grid[i].length - 1] >= 0) {
      continue;
    }

    for (let j = grid[i].length - 1; j >= 0; j--) {
      if (grid[i][j] < 0) {
        count++;
      } else {
        break;
      }
    }
  }
  return count;
};
const grid = [[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]];
// const grid = [[3, 2], [1, 0]];
// const grid = [[7, -3]];

console.log(countNegatives(grid));
