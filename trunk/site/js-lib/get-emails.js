var _CONTEXT = 20;

function getEmails(content, res, domain) {
  var result;
  
  content = content.replace(/(\s+|_+)at\1/gi, '@');
  
  var registerEmail = function(email, index) {
    console.log("index = " + index);
    var len = _CONTEXT * 2 + email.length;
    index = (index < _CONTEXT + email.length) ? 0 : index - _CONTEXT - email.length;
    console.log("len = " + len);
    res[email.toLowerCase()] = content.substr(index, len);
  }
  
  re = /([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4})/gi;
  while ((result = re.exec(content)) !== null)
    registerEmail(result[0], re.lastIndex);
  
  if (domain) {
    var re = new RegExp('([a-z0-9._%+-]+)[^a-z0-9._%+-]+' + domain.replace('.', '\.'), 'gi');
    while ((result = re.exec(content)) !== null) registerEmail(result[0] + '@' + domain, re.lastIndex);
  }
}

