Glob.prototype.getSearchText = function(text) {
 text = text.replace(/<\/a>$/, '').replace(/.*>/g, '');
 console.log('trends: ' + text);
 return text;
}

Glob.prototype.searchRequest = function() {
 var text = 'link:' + this.childElement.children[0].href
 console.log('calling searchRequest: ' + text);
 return text;
}
