var TIMEOUT = 500;
var ERR_RELOAD = 'Произошла ошибка. Мы скоро это починим.';
var RESUME_RENEWED = /(Резюме обновлено)\s.*\s(\d+\.\d+\.\d+)/;
var ERR_LOAD = '— подтвердили программисты.';
var SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwQ0KbAXlSCinvUjFr__kAv7cEwmkuix1wjEjsByq1yoNpsYEY/exec';

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

function pushRes(res, type, name, email, href, text) {
  res.push([type, name, email, href.replace(/\?.*/, ''), text]);
  // nextW(i - 1);
  www = window.open(SCRIPT_URL + '?name=' +
                    encodeURIComponent(type + ':' + name + ':' + email) +
                    '&content=' + encodeURIComponent(text));
  waitFor(function() {
    console.log(www.document);
    www.close();
    // nextW(i - 1);
  });
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
var page = 0;
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
	  if (d.length == 0) {
        console.log(JSON.stringify(res));
        return;	    
	  }
	  nextW(d.length - 1);
	});
    return;
  }

  var elem = d[i];
  var typeElem = elem.children[1].children[1].children[3];
  var type = typeElem.innerText;
  var name = elem.children[1].children[1].children[4].innerText;
  
  if (d[i].className.indexOf('output__item_visited') >= 0) {
    nextW(i - 1);
    return;
  }

  var href = typeElem.children[0].getAttribute('href');
  console.log('Processing d[' + i + ']: ' + name);

  var w = window.open(href, '_blank');
  waitFor(function() {
    var err = w.document.getElementsByClassName('m-attention_bad');
    if (err.length > 0) {
      var errText = err[0].innerText;
	
	  if ((errText.indexOf('500') > 0)) { // limit exceeded
        console.log(JSON.stringify(res));
        return;
	  } else if (errText == ERR_RELOAD) {
	    w.close();
	    nextW(i); // reload
		return;
	  }
  }
	
	var err = w.document.getElementsByClassName('hang_mdash');
    if (err.length > 0) {
      var errText = err[0].innerText;
	
	    if ((errText.indexOf(ERR_LOAD) > 0)) { // skip
	      w.close();
	      nextW(i - 1); // reload
		    return;
	    }
    }

	  try {
	    w.document.getElementsByClassName('related__wrapper')[0].innerHTML = '';
  	} catch(e) {}
  	w.document.getElementsByClassName('topbuttons')[2].innerHTML = '';

    var html = w.document.getElementsByClassName('resume__contacts')[0].innerHTML;
    var email = reEmail.exec(html)[1];
	  email = email.replace(/\+[a-zA-Z0-9._%+-]+@gmail\.com$/g, '@gmail.com');
	  email = email.replace(/[^a-zA-Z0-9._%@-]/g, '');

    var text = w.document.getElementsByClassName('resume')[0].innerText;
    w.close();

	  text = text.replace(/^\s*|\s*$/g, '').replace(/^\s*|\s*$/gm, '');
	  text = text.replace(RESUME_RENEWED, '$1 $2');
    pushRes(type, name, email, href.replace(/\?.*/, ''), text, i);
  });
}

nextW(-1);