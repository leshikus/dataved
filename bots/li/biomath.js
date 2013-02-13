res = [];

var message = ',\n\nЗамечательно найти человека, который тоже интересуется математикой и биологией. Буду рад добавить вас в свою сеть своих друзей на Linkedin.\n\nА нет ли у вас друзей со схожими увлечениями? Поделитесь с ними информацией, пожалуйста. Вдруг им будет интересно? Веселее обсуждать в хорошей компании.\n\nЕсли у Вас есть время, хочу пригласить вас к обсуждению статей по математическим моделям в биологии: http://www.dataved.ru/search/label/biomath\n\nЧто нам улучшить в тех моделях, которые есть у нас на сайте? Можете ли вы поделиться какими-то другими интересными моделями? А может найдёте время, чтобы написать, перевести или адаптировать интересную статью для нашего сайта? Правила для наших авторов находятся здесь, http://www.dataved.ru/2010/01/blog-post_27.html\n\nСейчас у нас на очереди — создание наглядной эволюционной модели. Современные технологии позволяют сделать мир эволюции очень большим, а правила динамически менять. Но придумать красивую и наглядную идею сложно. Что захватывающе красивое и может быть даже полезное должны создавать искусственные создания? Если у вас есть какие-либо мысли по теме, буду рад увидеть их в комментариях к этой статье, http://www.dataved.ru/2012/12/genetic-algorithms-build-trolleys.html\n\nСпасибо за ваш профессионализм и интерес. Успехов, Алексей\n\n\n\n> Maria wrote,\n> Алексей, смотрите, какой ценный и чудесный человек!\n\nhttp://hh.ru';


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
  greeting += f_name + message + href.replace(/\?.*/, '') + '\n' + resume.substr(0, 500) + '...';
    
  w = window.open('http://www.linkedin.com/invite?firstName=' +
    encodeURIComponent(f_name.replace(/ .*/, '')) + '&lastName=' + encodeURIComponent(s_name) +
    '&emailAddress=' + encodeURIComponent(email) + '&preview.y=13&subject=' +
    encodeURIComponent(subject) + '&greeting=' + encodeURIComponent(greeting), '_blank');
  waitFor(function() {
    //w.document.getElementsByClassName('btn-primary')[0].click();
	var tries = 1;
    waitFor(function() {
      if (w.document.body.innerHTML.indexOf('Invitation to ') <= 0) {
	    if (tries++ % 7 == 0) {
		  //w.document.getElementsByClassName('btn-primary')[0].click();
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