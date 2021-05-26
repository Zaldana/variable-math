const varA = 6;
const varB = 10;
const varC = 4;
const sqB = varB * varB;
const negB = -varB;
const disRad = Math.sqrt(sqB - 4 * varA * varC);
const denA = 2 * varA;
const numBadd = negB + disRad;
const numBsub = negB - disRad;
const x1 = numBadd / denA;
const x2 = numBsub / denA;

console.log("the roots are", x1, "and", x2, "when a=", varA, "b=", varB, "and c=", varC);
