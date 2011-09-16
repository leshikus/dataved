function Glob(list) {
  this.list = list
  this.childElement = list.children[0]
  this.nodes = []
  this.hash = []
}

function modifyListItem(html, res) {
  var flagpos = html.indexOf('</a>')
  if (flagpos == -1) flagpos = html.indexOf('</A>')

  html = (flagpos >= 0) ?
    '<span class="' + html.substr(flagpos).replace(/ /g, '"></span><span class="') +
      '"></span>' + res + ' ' + html.substr(0, flagpos) : res + ' ' + html

  return '<hr width="' + (Math.log(res) * 60) + '" /> ' + html
}

Glob.prototype.rank = function(searchControl, searcher) {

  with(this) {
    res = (searcher.cursor) ? 1 + parseInt(searcher.cursor.estimatedResultCount) : 1

    childElement.innerHTML = html = modifyListItem(childElement.innerHTML, res)
    nodes.push(html)
    hash[html] = res
var mySib = childElement.nextElementSibling;
if (!mySib)
{
 mySib = childElement.nextSibling
}

    if (mySib) { // Execute search
 
      childElement = mySib
   
      searchControl.execute(searchRequest())
    } else {
      nodes.sort(function(a, b) {
        return hash[b] - hash[a]
      })

      for (i = 0; i < nodes.length; i++) {
        list.children[i].innerHTML = nodes[i];
      }

      toggle = function(checkbox, t) {
        toggleFlags[t] = checkbox.checked

        with(document.getElementById("ranking"))
          for (i = 0; i < children.length; i++) processChild(children[i])
      }
    }
  }
}

function processChild(child) {
  for (j in toggleFlags) {

    if (!toggleFlags[j] || child.innerHTML.indexOf('<span class="' + j + '">') >= 0) continue

     child.style.display = 'none'
     return
  }
  child.style.display = 'block'
}

Glob.prototype.searchRequest = function() {
  return 'link:' + this.childElement.children[0].href
}

function rank(list) {
  // Create a search control
  var searchControl = new google.search.SearchControl()
  searchControl.addSearcher(new google.search.WebSearch())

  // Tell the searcher to draw itself and tell it where to attach
  // Use existing search control

  searchControl.draw(document.getElementById("searchcontrol"))

  var glob = new Glob(list)
  searchControl.setSearchCompleteCallback(glob, Glob.prototype.rank)
  //searchControl.execute(glob.searchRequest())
  searchControl.execute("www")
}

google.load('search', '1')

google.setOnLoadCallback(function() {
alert("Call Back Loaded");
var myList = document.getElementById("ranking");

  rank(myList);
})

toggleFlags = []
function toggle(checkbox, type) {
}

alert("Loaded");