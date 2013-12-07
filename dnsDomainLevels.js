
/**
 * Module exports.
 */

module.exports = dnsDomainLevels;

/**
 * Returns the number (integer) of DNS domain levels (number of dots) in the
 * hostname.
 *
 * Examples:
 *
 * ``` js
 * dnsDomainLevels("www")
 *   // returns 0.
 * dnsDomainLevels("www.netscape.com")
 *   // returns 2.
 * ```
 *
 * @param {String} host is the hostname from the URL.
 * @return {Number} number of domain levels
 */

function dnsDomainLevels (host) {
  return function (fn) {
    var match = String(host).match(/\./g);
    var levels = 0;
    if (match) {
      levels = match.length;
    }
    fn(null, host);
  };
}
