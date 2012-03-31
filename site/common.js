(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) {return;}
js = d.createElement(s); js.id = id;
js.src = "http://connect.facebook.net/en_US/all.js#xfbml=1";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

$(document).ready(function() {
  // Google Analytics
  var _gaq = [['_setAccount', 'UA-13024987-1'], ['_trackPageview']]
  $.getScript('//www.google-analytics.com/ga.js')

  // Share Buttons
  $.getScript('https://apis.google.com/js/plusone.js')
  $.getScript('//platform.twitter.com/widgets.js')
  $.getScript('http://assets.pinterest.com/js/pinit.js')
})