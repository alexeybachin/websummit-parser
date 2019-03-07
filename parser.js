var startups = [],
    blocks = document.querySelectorAll( '.ais-InfiniteHits-item .algolia-hit-box' );
function parseModal() {
  var p = document.querySelector( '.ReactModalPortal' );
  var data = {};
  data.startupName = p.querySelector( '.modal-content-left h3' ).innerText;
  data.startupLinkedIn = p.querySelector( '.m-linkedin a' ).href;
  data.startupSite = p.querySelector( '.m-website a' ).href;
  startups.push( data );
  p.querySelector( '.close-modal' ).click();
  return true;
}
for ( var i = 0; i < blocks.length; i++ ) {
  blocks[i].click();
  parseModal();
}
console.log( JSON.stringify( startups ) );
