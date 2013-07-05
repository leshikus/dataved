var _CONTEXT = 20;

function _filterAt(content) {
  content = content.replace(/\s+/g, ' ');
  return content.replace(/[^a-z0-9_.%+-]+[ae]t[^a-z0-9.@-]+|([_-]+)[ae]t\1/gi, '@');
}

function getEmails(content, res) {
  var result;
  
  content = _filterAt(content);
  
  var registerEmail = function(email, s) {
    res[email.toLowerCase()] = s;
  }
  
  matchContext(/[a-z0-9._%+-]*[a-z0-9_%+]@[a-z0-9.-]+\.[a-z]{2,4}/gi, content, registerEmail);
}

function getEmailsFrom(content, res, domain) {
  var result;
  
  content = _filterAt(content);

  var registerEmail = function(email, s) {
    res[(email + '@' + domain).toLowerCase()] = s;
  }
  var re = new RegExp('([a-z0-9._%+-]*[a-z0-9_%+])[^a-z0-9_%+-]+' + domain.replace('.', '\.'), 'gi');
  matchContext(re, content, registerEmail);
}
