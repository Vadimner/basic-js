const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encoded = ''
  let counter = 0
  // let current = ''
  let previous = ''
  str.split('').forEach((char) => {

    if (previous === '' ){
      previous = char
    }
    
    if (previous === char) {
      counter += 1
    } else {
      counter > 1 ? encoded += counter + previous : encoded += previous
      previous = char
      counter = 1
    }

  })
  counter > 1 ? encoded += counter + previous : encoded += previous
  return encoded
}

module.exports = {
  encodeLine
};
