var message = ',\n\nСудя по Вашему резюме, У Вас — отличные навыки менеджера! Буду рад добавить вас в свою сеть своих друзей на Linkedin — вдруг нам удастся найти какие-то возможности для сотрудничества?\n\nТак как Вы открыто держите своё резюме на Хедхантере, возможно, Вы ищете новую работу с людьми. Я хочу рассказать о том, какая замечательная намечается в этом направлении возможность!\n\nМне в своё время определиться, что с людьми интереснее, чем с компьютерами, помог тренинг Саши Орлова в Интеле. 16 и 17 февраля Саша и его товарищи проводят по всей стране серию обучающих семинаров, бесплатных при условии предварительной регистрации. Если на тренингах Саши вы ещё не были, искренне советую сходить. Не пожалеете и приобретёте заряд жизненной бодрости!\n\nВ Иваново тренинг организует Денис Умнов, и пройдёт он с 11 до 17 часов по адресу Камерный концертный зал «Классика», ул. Палехская, д. 10. Ссылку на регистрацию можно найти здесь, http://www.dataved.ru/2013/01/stratoplan-grand-conference.html#Иваново - Вам потребуется решить простую задачку. Если у Вас есть друзья или коллеги, которым это предложение может быть полезно, поделитесь с ними пожалуйста. А если остались вопросы, задавайте в комментариях на сайте, или по адресу ivanovo@stratoplan.ru - Денису напрямую.\n\nСпасибо за ваш профессионализм и интерес. С наилучшими пожеланиями, Алексей\n\n\n\n> Maria wrote,\n> Алексей, смотрите, какой ценный и чудесный человек!\n\nhttp://hh.ru';

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
  var subject = 'Предложение по резюме с Хедхантера';
  
  var greeting = (isEnglish(f_name)) ? 'Dear ' : 'Добрый вечер, ';
  greeting += f_name + message + href.replace(/\?.*/, '') + '\n' + resume.substr(0, 450) + '...';
    
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