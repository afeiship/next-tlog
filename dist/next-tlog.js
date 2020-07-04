/*!
 * name: @feizheng/next-tlog
 * description: Show log to document title.
 * homepage: https://github.com/afeiship/next-tlog
 * version: 1.0.0
 * date: 2020-07-04T15:53:49.910Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.tlog = function () {
    var text = nx.slice(arguments).join(' ');
    document.title = text;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.tlog;
  }
})();

//# sourceMappingURL=next-tlog.js.map
