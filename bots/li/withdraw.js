var timeout = 800;
var out = [];

function waitFor(f) {
  setTimeout(function() {
    try {
      f();
    } catch (e) { 
      console.log('waitFor(): ' + e);
      waitFor(f);
    }
  }, timeout);
}

var res = document.getElementsByClassName('detail-link');
var n = res.length;

function nextW(i) {
  if (i < 0) return;

  w = window.open(res[i].getAttribute('href'), '_blank');
  waitFor(function() {
    w.document.getElementsByClassName('btn-quaternary')[3].click();
	waitFor(function() {
	  var as = w.document.getElementsByClassName('alert success')[0];
	  if (as.innerText.indexOf(' has been withdrawn. No message will be sent to ') == -1) throw 'No message';
      w.close();
      nextW(i - 1);
	});
  });
}

nextW(n - 1);