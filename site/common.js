(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) {return;}
js = d.createElement(s); js.id = id;
js.src = "http://connect.facebook.net/en_US/all.js#xfbml=1";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-13024987-1']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

$(document).ready(function() {
  // Google Analytics
  //var _gaq = [['_setAccount', 'UA-13024987-1'], ['_trackPageview']]
  //$.getScript('//www.google-analytics.com/ga.js', function() {
//    console.log('loadad GA')
//  })

  var plusone_loaded = (typeof gapi_init == 'undefined') ? function() {} : function() {
    $.getScript("https://apis.google.com/js/client.js?onload=gapi_init")
  }

  // Share Buttons
  $.getScript('https://apis.google.com/js/plusone.js', plusone_loaded)
  $.getScript('//platform.twitter.com/widgets.js')
})