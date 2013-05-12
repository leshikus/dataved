// load main.php
// went to the energy field

var TIMEOUT = 500;

function waitFor(f) {
  setTimeout(function() {
    try {
      f();
    } catch (e) { 
      console.log('waitFor(): ' + e);
      waitFor(f);
    }
  }, TIMEOUT);
}

function next() {
  if (document.getElementById('apsleft').innerHTML < 260) return;
  
  waitFor(function() {
    var e = document.getElementById('inputShipCloak') || document.getElementById('inputShipUncloak');
	if (!e) throw 'Loading';
	e.click();
	next();
  });
}

