function Glob(list) {
  this.list = list;
  this.li = 0;
  this.childElement = list.children[0];
  this.searches = [];
  this.nodes = [];
  this.hash = [];
  this.maxw = 1;
}

Glob.prototype.modifyListItem = function(html, res) {
 var w = Math.log(res) * 100;
 if (this.maxw < w) this.maxw = w;
 return '<div style="position: absolute;">' + res + ': ' + html + '</div><div class="bg" style="width: ' + w + 'px; background-color: lightgreen;" >';
}


Glob.prototype.getSearchText = function(text) {
  return text.replace(/^.*: /, '').replace(/,/g, ' ');
}

Glob.prototype.searchRequest = function() {
  var text = this.childElement.innerHTML;
  text = text.replace(/((\S*\s){20}).*/, '$1');
  console.log('calling searchRequest: ' + text);
  return text;
}

Glob.prototype.onComplete = function() {
  console.log('onComplete: maxw = ' + this.maxw);
  
  var bg = document.querySelectorAll("#ranking .bg");
  
  this.maxw = 730 / this.maxw;
  for (var i = 0; i < bg.length; i++) {
    var w = bg[i].style.width.replace('px', '') * this.maxw;
    bg[i].style.width = w + 'px';
  }

  
  var q;
  
  with (this) {
    q = nodes.slice(0, 5).map(getSearchText).join(',');
  }
  console.log(q);
  
  var e = document.createElement('iframe');

  e.onload = function() {
    console.log("Script loaded and ready");
  };
  e.width = '800';
  e.height = '324'
  e.src = '//www.google.com/trends/fetchComponent?q=' + encodeURIComponent(q) +
    '&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=' + e.width + '&h=' + e.height;
  $(this.list).before(e);
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


$('head').append('<link rel="stylesheet" href="http://dataved.googlecode.com/svn/trunk/site/compare.css" type="text/css" />');

