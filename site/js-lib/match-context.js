var _CONTEXT = 30;

function matchContext(re, content, cb) {
  var result;
  while ((result = re.exec(content)) !== null) {
    var match = (result.length == 1) ? result[0] : result[1];
    var len = _CONTEXT * 2 + match.length;
    var index = re.lastIndex - _CONTEXT - match.length;
    if (index < 0) index = 0;
    var s = content.substr(index, len);
    console.log("matched: " + match + " substr: " + s);
    cb(match, s);
  }
}
