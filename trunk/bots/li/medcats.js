// res = 

var message = ',\n\nСудя по обновлению Вашего резюме, Вам не очень радостно на текущей работе. Буду рад добавить вас в свою сеть своих друзей на Linkedin — вдруг нам удастся найти какие-то возможности для сотрудничества?\n\nЕсть ли у Вас знакомые профессиональные хирурги? Зарегистрируйтесь по ссылке http://goo.gl/RgIQP — и получите богатых американцев в коммерческое отделение своей больницы. С гордостью добавлю, что предварительный осмотр и консультации реализованы на сайте с помощью нашей системы видеоконференцсвязи Телесовещания (Apache Openmeetings).\n\nА ещё я хочу предложить вам завести замечательного кота, посмотрите, какого: http://www.dataved.ru/2013/02/cats-rats-wars.html\n\nА может кота хочет кто-то из ваших друзей? Подарите ему котёнка или хотя бы ссылку. Спасибо за ваш профессионализм и интерес. С наилучшими пожеланиями, Георгий\n\n\n\n> Maria wrote,\n> Георгий, смотрите, какой ценный и чудесный человек!\n\nhttp://hh.ru';

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

function isEnglish(name) {
  return name.replace(/[a-zA-Z\s]*/g, '') == '';
}

var reName = /^([^ ]*) (.*)$/;

function nextW(res) {
  if (res.length == 0) return;
  var elem = res[0];

  var name = elem[1];
  console.log('Processing ' + name);

  var type = elem[0];
  var email = elem[2];
  var href = elem[3];
  var resume = elem[4];
  var r = reName.exec(name);
  var f_name = r[2];
  var s_name = r[1];

  if (out[email]) {
    console.log('Skipped ' + email);
	res.shift();
    nextW(res);
    return;
  }
  var subject = 'Любите котов?';
  
  var greeting = (isEnglish(f_name)) ? 'Dear ' : 'Добрый вечер, ';
  greeting += f_name + message + href.replace(/\?.*/, '') + '\n' + resume.substr(0, 700) + '...';
    
  w = window.open('http://www.linkedin.com/invite?firstName=' +
    encodeURIComponent(f_name.replace(/ .*/, '')) + '&lastName=' + encodeURIComponent(s_name) +
    '&emailAddress=' + encodeURIComponent(email) + '&preview.y=13&subject=' +
    encodeURIComponent(subject) + '&greeting=' + encodeURIComponent(greeting), '_blank');
  waitFor(function() {
    w.document.getElementsByClassName('btn-primary')[0].click();
	var tries = 1;
    waitFor(function() {
      if (w.document.body.innerHTML.indexOf('Invitation to ') <= 0) {
	    if (tries++ % 7 == 0) {
		  w.document.getElementsByClassName('btn-primary')[0].click();
		  console.log('Click');
		}
	    throw 'No message';
	  }
      w.close();
	  res.shift();
      out[email] = 1;
      nextW(res);
    });
  });
}

nextW(res);