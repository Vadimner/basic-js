const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
// function getCommonCharacterCount(/* s1, s2 */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

function countFreq(s) {
  frequences = {}
  s.split('').forEach(ch => {
    frequences.hasOwnProperty(ch) ? frequences[ch] += 1 : frequences[ch] = 1;
  })
  return frequences
}

function getValue(n1, n2) {
  if (n1 > n2) {
    return n2
  } else {
    return n1
  }
}

function getCommonCharacterCount(s1, s2) {
  let sOneFreq = countFreq(s1)
  let sTwpFreq = countFreq(s2)

  let counter = 0

  for (let k in sOneFreq) {
    sTwpFreq.hasOwnProperty(k) ? counter += getValue(sOneFreq[k], sTwpFreq[k]) : counter += 0
  }

  return counter

}

module.exports = {
  getCommonCharacterCount
};
