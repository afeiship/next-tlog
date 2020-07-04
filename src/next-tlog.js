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
