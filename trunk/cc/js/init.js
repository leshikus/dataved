// Config sound manager
soundManager.url = 'http://dataved.googlecode.com/svn/trunk/cc/swf/';
soundManager.flashVersion = 9;
soundManager.debugMode = true;
soundManager.useHighPerformance = true;
// All classes now loaded...
Class.classesLoaded();

var app = null;
$(function() {
  app = App.start();
});
