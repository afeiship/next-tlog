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
