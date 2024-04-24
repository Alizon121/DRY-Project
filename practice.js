// Make a helper funciton that finds the biggest number of two numbers

function findBigNum(num1, num2) {
let bigNum;
if (num1 > num2) {
 return bigNum = num1;
} else {
  return bigNum = num2;
}
}


// // Find the biggest number of two numbers and multiply it by two
function multiplyBiggerNumByTwo(num1, num2) {
 return findBigNum(num1, num2) * 2
}


// // Divides the bigggest number by three
function divideBiggerNumByThree(num1, num2) {
 return findBigNum(num1, num2)/3
}

// Find the biggest number to put into a string
function eatMostTacos(sum1, sum2) {
    return `I ate ${findBigNum(sum1, sum2)} tacos.`;
}


// // Find the smallest number of the two num arguments
// // When implementing the helper funciton, it will require refactoring.
function adoptSmallerDog(weight1, weight2) {
  if (findBigNum(weight1, weight2) > weight1) {
    return `I adopted a dog that weighs ${(weight1)} pounds.`;
  }  
  else {
    return `I adopted a dog that weighs ${(weight2)} pounds.`;
  }
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
// module.exports = {
//   multiplyBiggerNumByTwo,
//   divideBiggerNumByThree,
//   eatMostTacos,
//   adoptSmallerDog
// };
