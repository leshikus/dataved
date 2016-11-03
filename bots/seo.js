var res = [[]];
var out = [];

var message = ',\n\nС наступающим Новым годом! Замечательно найти человека, который тоже интересуется маркетингом в сети. Буду рад добавить вас в свою сеть своих друзей на Linkedin.\n\nА нет ли у вас друзей со схожими увлечениями? Поделитесь с ними информацией, пожалуйста. Вдруг им будет интересно? Веселее обсуждать в хорошей компании.\n\nЕсли у Вас есть время, хочу спросить ваше мнение по поводу инструмента, который подписывает пользователей на рассылку RSS вашего сайта по электронной почте, http://www.dataved.ru/2011/10/dataved-search-engine-optimization.html#extract_mail\n\nМожет ли этот инструмент быть вам полезным в вашей работе? Какими инструментами продвижения пользуетесь вы? Что и насколько эффективно работает? Пишите!\n\nСпасибо за ваш профессионализм и интерес. Успехов, Игорь\n\n\n\n> Maria wrote,\n> Игорь, смотрите, какой ценный и чудесный человек!\n\nhttp://hh.ru';

var timeout = 800;

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
  var elem = res.pop();
  if (!elem) return;

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
    nextW(res);
    return;
  }
  out[email] = 1;

  var subject = 'Приглашение к сотрудничеству';
  
  var greeting = (isEnglish(f_name)) ? 'Dear ' : 'Добрый вечер, ';
  greeting += f_name + message + href.replace(/\?.*/, '') + '\n' + resume.substr(0, 800) + '...';
    
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
      nextW(res);
    });
  });
}

nextW(res);
