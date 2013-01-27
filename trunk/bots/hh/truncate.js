// res = 

var i;
var letterRe = /\nПригласить Написать письмо[\s\S]*/;

for (i = 0; i < res.length; i++) {
  var e = res[i];
  var text = e[4];
  if (letterRe.test(text)) {
    text = text.replace(letterRe, '');
  } else {
    text = text.replace(/\n.*$/, '\n...');
  }
  e[4] = text;
}

JSON.stringify(res);