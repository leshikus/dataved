(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "http://connect.facebook.net/ru_RU/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

var _gaq;

$(document).ready(function() {
  // Google Analytics
  var _gaq = _gaq || [];
  _gaq.push([['_setAccount', 'UA-13024987-1'], ['_trackPageview']]);

  $.getScript('//www.google-analytics.com/ga.js');

  window.onerror = function(msg, url, line) {
    var preventErrorAlert = true;
    _gaq.push(['_trackEvent', 'JS Error', msg, navigator.userAgent + ' -> ' + url + " : " + line, 0, true]);
    return preventErrorAlert;
  };

  var plusone_loaded = (typeof gapi_init == 'undefined') ? function() {} : function() {
    $.getScript("https://apis.google.com/js/client.js?onload=gapi_init");
  }

  // Share Buttons
  $.getScript('https://apis.google.com/js/plusone.js', plusone_loaded);
});