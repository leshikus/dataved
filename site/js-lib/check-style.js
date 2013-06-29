var preRe = /<(pre|code)>[^<]*<\/\1>/gi;
var scriptRe = /<(script|style|textarea)[^<]*(\n\s*[^<].*)*\s*<\/\1>/gi;
var entityRe = /&[a-z#0-9]+;/g;

function checkRules(url, content) {
  var html = content.replace(scriptRe, '');
  html = html.replace(preRe, 'code');
  html = html.replace(/\.NET|Яндекс\.Фотки|H\.(264|323)/g, 'новояз');
  html = html.replace(/\d+[,.]\d+/g, '1729');

  var text = html.replace(/<\/?(p|div|li|blockquote|br|td|th|tr)(|\s[^<]*)>/g, ' ');
  text = text.replace(/<[^<]*>/g, '');

  for (r in rules) {
    var error = '';
    
    matchHtmlRule = function(re) {
      matchContext(re, html, function(match, context) {
        maxErrors--;
        error += context.replace(/</g, '&lt;').replace(/>/g, '&gt;').
          replace(/&/g, '&amp;') + '<br/>';
      });
    }
    
    matchTextRule = function(re) {
      matchContext(re, text, function(match, context) {
        maxErrors--;
        error += context + '<br/>';
      });
    }

    rules[r]();
    
    if (error) e(rule).innerHTML += url + ":<pre>\n" + error '</pre>';
  }
}
