var preRe = /<(pre|code)>[^<]*<\/\1>/gi;
var scriptRe = /<(script|style|textarea)[^<]*(\n\s*[^<].*)*\s*<\/\1>/gi;

function Matcher(data, log) {
  this.data = data;
  this.log = log;
  
  this.cut = function(re) {
    this.data = this.data.replace(re, '');
  }
  
  this.match = function(re) {
    matchContext(re, this.data, function(match, context) {
      maxErrors--;
      this.log(context);
    });
  }    
}


function checkRules(rules, content, log) {
  var html = content.replace(scriptRe, '');
  html = html.replace(preRe, 'code');
  html = html.replace(/\.NET|Яндекс\.Фотки|H\.(264|323)/g, 'новояз');
  html = html.replace(/\d+[,.]\d+/g, '1729');

  var text = html.replace(/<\/?(p|div|li|blockquote|br|td|th|tr)(|\s[^<]*)>/g, ' ');
  text = text.replace(/<[^<]*>/g, '');

  var getHtml = function() {
    return new Matcher(html, log);
  }
  var getText = function() {
    return new Matcher(text, log);
  }

  for (r in rules) {
    rules[r]();
  }
}
