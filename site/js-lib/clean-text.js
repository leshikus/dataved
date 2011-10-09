alert('hrtr')

function esc(str) {
  if (str && str.replace) return str.replace(/>/g, '&gt;').replace(/</g, '&lt;');
  return str;
}

function trim(str) {
  return str.replace(/\s*$/, '').replace(/^\s*/, '');
}

function cleanit(node) {
  var out = '';
  var n = node.childNodes;

  for (var i = 0; i < n.length; i++) {
    switch (n[i].nodeType) {
      case node.ELEMENT_NODE:
        var tag = node.tagName.toLowerCase();
//alert(tag);
        var a = attr[tag];
//alert(a);
        if (!a) {
          // remove tag
          out += cleanit(n[i]);
          break;
        }

        if (!n[i].hasChildNodes()) {
          out += '<' + tag + '/>';
          break;
        }

        var content = '<' + tag + '>' + trim(cleanit(n[i])) + '</' + tag + '>';

        if (node.style.display = 'block')
          content = '\n' + content + '\n';

        out += content;
        break;

      case node.TEXT_NODE:
        out += n[i].textContent.replace(/\s+/g, ' ');
        break;

      case node.COMMENT_NODE:
        // skip comments
        break;

      default:
        out += "#" + n[i].nodeType + ": " + esc(n[i]) + '\n';
        break;
    }
  }
  return out;
}

function monitor() {
  var content = doc.body.innerHTML;
  if (content.match(/^\s*$/) || doc.designMode != 'on') return;

  var e = doc.getElementById('cleanit-spandots');
  if (e) {
    e.innerHTML += '.';
    if (e.innerHTML.length > 3) e.innerHTML = '';
    doc.execCommand('selectall', false, null);
    return;
  }

  if (content == result) {
    doc.execCommand('selectall', false, null);
    doc.execCommand('copy', false, null);
    return;
  }

  doc.designMode = 'off';
  //alert("pasted");
  //var preclean = trim(cleanit(doc.body));
  //alert(preclean);
  //var sekondClean = clean();
  //alert(sekondClean);
  //alert(doc.body.innerHTML);
  //result = '<pre>' + trim(cleanit(doc.body)) + '</pre>';
  result = '<pre>' + trim(esc(doc.body.innerHTML)) + '</pre>'; // used to check the initial HTML
  doc.body.innerHTML = result;
//  clean();
//  doc.designMode = 'on';
}

