const x1 = 4;
const x2 = 6;
const y1 = 8;
const y2 = 10;
const xDiff = x2 - x1;
const yDiff = y2 - y1;
const xSqrd = xDiff * xDiff;
const ySqrd = yDiff * yDiff;

console.log("The distance between point (6,10) and (4,8) is", Math.sqrt(xSqrd + ySqrd));