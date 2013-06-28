var _CONTEXT = 20;
console.log('1: ');

function getEmails(content, res, domain) {
  var result;
  
  content = content.replace(/(\s+|_+)at\1/gi, '@');
  
  var registerEmail = function(email, index, lastIndex) {
    console.log("index = " + index);
    index = (index < _CONTEXT) ? 0 : index - _CONTEXT;
    var len = lastIndex - index + _CONTEXT * 2;
    console.log("len = " + len);
    res[email.toLowerCase()] = content.substr(index, len);
  }
  
  re = /([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4})/gi;
  while ((result = re.exec(content)) !== null)
    registerEmail(result[0], result.index, re.lastIndex);
  
  if (domain) {
    var re = new RegExp('([a-z0-9._%+-]+)[^a-z0-9._%+-]+' + domain.replace('.', '\.'), 'gi');
    while ((result = re.exec(content)) !== null) registerEmail(result[0] + '@' + domain, result.index, re.lastIndex);
  }
}

console.log('2: ');
