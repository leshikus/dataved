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


function getTradeGood(w, num) {
  var q = w.document.getElementById('shiprow' + num).children[2].firstChild.innerHTML;
  
  if (!q) {
    console.log('Good[' + num + '] = empty');
	return 0;
  }

  q = parseInt(q);
  console.log('Good[' + num + '] = ' + q);
  return q;
}

function trade() {
  console.log('trade:');
  var pw = window.open('planet_trade.php', 'w_planet');
  waitFor(function() {
	var e = getTradeGood(pw, 2);
    var f = getTradeGood(pw, 16);
	
   console.log('Selling energy ' + e);
	  
	if (e) pw.document.getElementById('sell_2').value = e;
	  
	var fs = (f >= 2) ? (f - 2) : 0;
	console.log('Selling fuel ' + fs);
	  
	if (fs) pw.document.getElementById('sell_16').value = fs;
	  
	if ((fs > 0) || (e > 0)) {
	  pw.document.forms['planet_trade'].submit();
	}

	if (f == 0) {
	  toFuel();
	} else {
	  toEnergy();
	}
  });
}

function moveToTd(e) {
  console.log(e);
  e.firstChild.click();
}

function moveTo(w, id) {
  moveToTd(w.document.getElementById(id));
}

function toEnergy() {
  console.log('toEnergy:');

  var w = window.open('main.php', 'w_main');
  waitFor(function() {
	moveTo(w, 'tdNavField0');
	cloak(w);
  });
}

function collect(w) {
  waitFor(function() {
    var r = w.document.getElementById('fieldres').innerHTML;

	console.log('Found ' + r + ' resources');
    w.document.getElementById('aCmdCollect2').click();
	waitFor(toPlanet);
  });
}

function cloak(w) {
  waitFor(function() {
    w.document.getElementById('inputShipCloak').click();
	collect(w);
  });
}

function toPlanet() {
  console.log('toPlanet:');
  var w = window.open('main.php', 'w_main');
  waitFor(function() {
	moveToTd(w.document.getElementsByClassName('navPlanet')[0]);
	var t = 3600;
	if (w.document.getElementById('apsleft').innerHTML < 400) t = 3600000 * (Math.random() + 0.5);
	console.log('scheduling execution in ' + t);
	setTimeout(trade, t);
  });
}

function toFuel() {
  console.log('toFuel:');
  var w = window.open('main.php', 'w_main');
  waitFor(function() {
	moveTo(w, 'tdNavField16');
	collect(w, toPlanet);
  });
}

// test functions 

function testCollect() {
  var w = window.open('main.php', 'w_main');
  collect(w);
}

//testCollect();
trade();
