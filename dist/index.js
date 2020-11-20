/*!
 * name: @jswork/next-tlog
 * description: Show log to document title.
 * homepage: https://github.com/afeiship/next-tlog
 * version: 1.0.0
 * date: 2020-11-20 21:01:52
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.tlog = function () {
    var text = nx.slice(arguments).join(' ');
    document.title = text;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.tlog;
  }
})();
