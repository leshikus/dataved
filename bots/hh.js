var skipNames = [];
skipNames = arrToHash(skipNames);

var timeout = 500;

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

function arrToHash(arr) {
  var i, hash = [];
  for (var i = 0; i < arr.length; i++) hash[arr[i]] = 1;
  return hash;
}

var reEmail = /"mailto:([^"]*)/;
var res = [];

var d;
var n;
var page = 1;
var ww = 0;

function nextW(i) {
  console.log('nextW(' + i + ')');
  if (i < 0) {
    if (ww) ww.close();
	var url = self.location.href.replace(/&page=\d+/, '');
	ww = window.open(url + '&page=' + page, 'hh_page');
    page++;
    waitFor(function() {
	  if (ww.document.getElementsByClassName('copyright').length != 1) throw 'Not loaded';
	  d = ww.document.getElementsByClassName('HH-Employer-ResumeFolders-Resume');
	  nextW(d.length - 1);
	});
    return;
  }

  var elem = d[i];
  var type = elem.children[1].children[1].children[1].innerText;
  var name = elem.children[1].children[1].children[2].innerText;
  if (skipNames[type + '::' + name]) {
    nextW(i - 1);
    return;
  }
  
  if (d[i].className.indexOf('output__item_visited') >= 0) {
    nextW(i - 1);
    return;
  }

  var href = elem.children[1].children[1].children[1].children[0].getAttribute('href');
  console.log('Processing d[' + i + ']: ' + name);

  var w = window.open(href, '_blank');
  waitFor(function() {
    var err = w.document.getElementsByClassName('m-attention_bad');
    if ((err.length > 0) && (err[0].innerText.indexOf('500') > 0)) { // limit exceeded
      console.log(JSON.stringify(res));
      return;
    }

	try {
	  w.document.getElementsByClassName('related__wrapper')[0].innerHTML = '';
	} catch(e) {}
	w.document.getElementsByClassName('topbuttons')[2].innerHTML = '';

    var html = w.document.getElementsByClassName('resume__contacts')[0].innerHTML;
    var email = reEmail.exec(html)[1];

    html = w.document.getElementsByClassName('resume')[0].innerText;
    w.close();

    res.push([type, name, email, href.replace(/\?.*/, ''), html]);
    nextW(i - 1);
  });
}

nextW(-1);
