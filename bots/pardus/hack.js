// load hack.php
// went to some building

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

var w = window.open('/hack.php');

function next() {
  waitFor(function() {
    if (w.document.getElementsByClassName('messagestyle')[0].firstChild.firstChild.firstChild.children[2].innerHTML < 260) return;

    var e = w.document.getElementById('doHackButton');
	if (!e) throw 'Loading';
	e.click();
	next();
  });
}

next();