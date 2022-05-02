const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function additional(str, times, separator) {
  let readyStr = ''
  for (let i = 0; i < times; i++) {
    readyStr += str + (i < times-1 ? separator : '')
  }
  return readyStr
}

function repeater(str, options) {
  let resultString = ''

  console.log(options)

  let repeatTimes = options.repeatTimes ? options.repeatTimes : 1
  let separator = options.separator ? options.separator : '+'
  let addition = options.hasOwnProperty('addition') ? options.addition : ''
  let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1
  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|'
  
  console.log(str)
  console.log(addition)

  for (let i = 0; i < repeatTimes; i++) {
    // resultString += str + addition + (additionRepeatTimes > 1 ? additionSeparator : '') + (i < repeatTimes-1 ? separator : '')
    resultString += str + additional(addition, additionRepeatTimes, additionSeparator) + (i < repeatTimes-1 ? separator : '')
  }
  return resultString
}

module.exports = {
  repeater
};
