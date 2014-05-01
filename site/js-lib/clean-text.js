function esc(str) {
  if (str && str.replace) return str.replace(/>/g, '&gt;').replace(/</g, '&lt;')
  return str
}

function trim(str) {
  return str.replace(/\s*$|^\s*/g, '')
}

var cleanerTagRe = /&lt;(\w+(?:\s+\w+)*)&gt;/g
var cleanerEmptyRe = /^(\&nbsp;|\s)*$/
var cleanerHrefRe = /file:\/\/[^#]*/

function parseTags(tags) {
  var a = new Array()
  
  var element
  while ((element = cleanerTagRe.exec(tags)) != null) {
    element = element[1].split(/\s+/)
    var tag = element.shift()
    a[tag] = element
  }
  return a
}

function parseTagPairs(tags) {
  var a = new Array()
  
  var element
  while ((element = cleanerTagRe.exec(tags)) != null) {
    var tag = element[1]
    a[tag] = cleanerTagRe.exec(tags)[1]
  }
  return a
}

function isEmpty(o) {
//  console.log("isEmpty: [" + o.innerHTML + "]");
  return cleanerEmptyRe.test(o.innerHTML);
}

function hashList(a) {
  var hash = new Array()
  var i

  for (i = 0; i < a.length; i++) hash[a[i]] = 1
  return hash
}

function Cleaner(iframeName, allowedTags, emptyTags, convertTags, resultArea, resultCallback) {
  this.win = iframeName.contentWindow;
  this.doc = this.win.document;
  this.result = resultArea;
  this.callback = resultCallback;

  this.atags = parseTags(allowedTags.innerHTML);
  this.etags = parseTags(emptyTags.innerHTML);
  this.rtags = parseTagPairs(convertTags.innerHTML);

  this.init = function() {
    with (this.doc) {
      open()
      write('<html><head><meta http-equiv="Content-type" content="text/html; charset=utf-8"></head>'
        + '<body></body></html>')
      close()
      this.result = body.innerHTML
      designMode = 'on'
    }

    var self = this
    setInterval(function() {
      self.monitor()
    }, 2000)
  }

  this.monitor = function() {
    with (this.doc) {
      var content = body.innerHTML;
      execCommand('selectall', false, null);

      if ((designMode != 'on') || (content == this.result)) return;

      designMode = 'off';

//      console.log("initial = " + this.doc.body.innerHTML);
      this.doc.body.innerHTML = this.doc.body.innerHTML.replace(/<br>/gi, '</p><p>');
      this.cleanElement(this.doc.body, false);
      this.viewSource();
    }
  }

  this.viewSource = function() {
    this.result.value = esc(body.innerHTML);
    this.result.focus();
    this.result.select();
    this.callback();
  }

  this.cleanElement = function(o, f) {
//    console.log('cleanElement: ' + o.outerHTML.substr(0,5))
    var cn = o.firstChild

    while (c = cn) {
      var cn = c.nextSibling
      switch (c.nodeType) {
        case 1: this.cleanElement(c, true)
          break
        case 2:
          break
        case 3:
        case 5:
        case 6:
          break
        default:
          o.removeChild(c)
      }
    }
    if (!f) return

    var tag = o.tagName.toLowerCase()
//    console.log('->' + o.parentNode.outerHTML)

    // replace tags
    if (this.rtags[tag]) {
      var range = document.createRange()
      range.selectNodeContents(o)

      var parent = o.parentNode
      var ntag = this.rtags[tag]

      if (isEmpty(o) && !this.etags[ntag]) {
//        console.log(tag + ' to be removed, not replaced')
        parent.replaceChild(range.extractContents(), o)
      } else {
        var etag = document.createElement(ntag)
        etag.appendChild(range.extractContents())
        parent.replaceChild(etag, o)
//        console.log(tag + ' replaced with ' + ntag)
      }

      return
    }

//    console.log('->' + tag + '->' + (!this.atags[tag] || (isEmpty(o) && !this.etags[tag])) )
    if (!this.atags[tag] || (isEmpty(o) && !this.etags[tag])) {
//      console.log(tag + ' to be removed')
      var range = document.createRange()
      range.selectNodeContents(o)
      o.parentNode.replaceChild(range.extractContents(), o)
      return
    }

    var a = o.attributes
    if (!a) return

    var i
    var hash = new Array()

    for (i = 0; i < a.length; i++) {
//      console.log(a[i].name + ' from ' + tag + ' found')
      hash[a[i].name] = 1
      if (a[i].name == 'href') {
        a[i].value = a[i].value.replace(cleanerHrefRe, '')
      }
    }

    var aa = this.atags[tag]
    for (i = 0; i < aa.length; i++) {
//      console.log('removing ' + aa[i] + ' from hash')
      delete hash[aa[i]]
    }

    for (attr in hash)
      o.removeAttribute(attr)
  }
}
