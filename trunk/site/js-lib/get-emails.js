function getEmails(content, res, domain) {
  var result;
  
  content = content.replace(/(\s+|_+)at\1/gi, '@');
  
  var registerEmail = function(email, context) {
    res[email.toLowerCase()] = context;
  }
  
  while ((result = /(.{0,20}([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}).{0,20})/gi.exec(content)) !== null)
    registerEmail(result[1], result[0]);
  
  if (domain) {
    var re = new RegExp('(.{0,20}([a-z0-9._%+-]+)[^a-z0-9._%+-]+' + domain.replace('.', '\.'), 'gi');
	  while ((result = re.exec(content)) !== null) registerEmail(result[1] + '@' + domain, result[0]);
  }
}
