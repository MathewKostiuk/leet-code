/**
 * @param {number[][]} points
 * @return {number}
 */
const minTimeToVisitAllPoints = function (points) {
  let time = 0;
  for (let i = 0; i < points.length - 1; i++) {
    time += Math.min(Math.abs(points[i + 1][0] - points[i][0]), Math.abs(points[i + 1][1] - points[i][1])) + Math.abs(Math.abs(points[i + 1][0] - points[i][0]) - Math.abs(points[i + 1][1] - points[i][1]));
  }
  return time;
};

const points = [[1, 1], [3, 4], [-1, 0]];

console.log(minTimeToVisitAllPoints(points));
