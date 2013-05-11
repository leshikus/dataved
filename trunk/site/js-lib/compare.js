function Glob(list) {
  this.list = list;
  this.li = 0;
  this.childElement = list.children[0];
  this.nodes = [];
  this.hash = [];
}

Glob.prototype.modifyListItem = function(html, res) {
  return '<hr width="' + (Math.log(res) * 40) + '" /> ' + res + ' ' + html;
}

Glob.prototype.getInnerText = function(e) {
  var text = e.innerHTML;
  return text.replace(/((\S*\s){20}).*/, '$1');
}

Glob.prototype.searchRequest = function() {
  var text = this.getInnerText(childElement);
  console.log('calling searchRequest: ' + text);
  return text;
}

Glob.prototype.onComplete = function() {
  var e = document.createElement('div');
  var q;
  
  with (this) {
    q = nodes.slice(5).map(getInnerText).join(',');
  }
  console.log(q);
  e.innerHTML = '<s' + 'cript type="text/javascript" src="//www.google.com/trends/embed.js?q=' +
    encodeURIComponent(q) + '"></s' + + 'cript>';

  var theFirstChild = this.list.firstChild;
  this.list.insertBefore(e, theFirstChild);
}

Glob.prototype.rank = function(searchControl, searcher) {
  with(this) {
    res = (searcher.cursor) ? 1 + parseInt(searcher.cursor.estimatedResultCount) : 1;

    childElement.innerHTML = html = modifyListItem(childElement.innerHTML, res);
    nodes.push(html);
    hash[html] = res;

    childElement = list.children[++li];
    if (childElement) { // Execute search
      searchControl.execute(searchRequest());
    } else {
      nodes.sort(function(a, b) {
        return hash[b] - hash[a];
      })

      for (i = 0; i < nodes.length; i++) {
        list.children[i].innerHTML = nodes[i];
      }
      onComplete();
    }
  }
}

function rank(list) {
  // Create a search control
  var searchControl = new google.search.SearchControl();
  searchControl.addSearcher(new google.search.WebSearch());

  // Tell the searcher to draw itself and tell it where to attach
  // Use existing search control
  searchControl.draw(document.getElementById("searchcontrol"));

  console.log('creating glob');
  var glob = new Glob(list);
  searchControl.setSearchCompleteCallback(glob, Glob.prototype.rank);
  searchControl.execute(glob.searchRequest());
}

google.load('search', '1');

google.setOnLoadCallback(function() {
  var e = document.getElementById("ranking");
  if (e) rank(e);
})
