var _CONTEXT = 20;

function getEmails(content, res, domain) {
  var result;
  
  content = content.replace(/(\s+|_+)at\1|\(at\)|\[at\]/gi, '@');
  content = content.replace(/\s+/g, ' ');
  
  var registerEmail = function(email, s) {
    res[email.toLowerCase()] = s;
  }
  
  matchContext(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/gi, content, registerEmail);
  
  var registerEmail = function(email, s) {
    res[(email + '@' + domain).toLowerCase()] = s;
  }
  if (domain) {
    var re = new RegExp('([a-z0-9._%+-]+)[^a-z0-9._%+-]+' + domain.replace('.', '\.'), 'gi');
    matchContext(re, content, registerEmail);
  }
}
