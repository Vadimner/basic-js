const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
// function deleteDigit(/* n */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

function deleteDigit(n) {
  let numArr = (''+n).split('');
  let biggest = 0;

  for (let i = 0; i < numArr.length; i++) {
    let tempArr = [...numArr]
    tempArr.splice(i, 1)
    let num = parseInt(tempArr.join(''))

    if (biggest < num) {
      biggest = num
    }
  }
  return biggest
}

module.exports = {
  deleteDigit
};
