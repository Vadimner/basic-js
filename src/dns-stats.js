const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
// function getDNSStats(/* domains */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

function reverseDomain(domain) {
  let segments = domain.split('.')
    // console.log(segments)

  segments.reverse()

    let reversed = []

    while (segments.length > 0) {
      reversed.push('.' + segments.join('.'))
      segments.pop()
    }

    return reversed
}

function getDNSStats(domains) {
  let domainFreq = {} 
  domains.forEach(domain => {
    let reversed = reverseDomain(domain)
    reversed.forEach(d => {
      domainFreq.hasOwnProperty(d) ? domainFreq[d] += 1 : domainFreq[d] = 1
    })
  })
  return domainFreq
}

module.exports = {
  getDNSStats
};
