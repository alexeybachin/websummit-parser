var b = document.querySelector('.ais-InfiniteHits-loadMore');
var mutationObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    var paras = document.getElementsByClassName('LinesEllipsis-canvas');
    while(paras[0]) {
      paras[0].parentNode.removeChild(paras[0]);
    }
    b.click();
  });
});
var l = document.querySelector('.ais-InfiniteHits-list');
mutationObserver.observe(l, {
  childList: true,
  subtree: true
});
b.click();
