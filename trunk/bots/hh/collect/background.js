var HH_URL = 'http://hh.ru/resumesearch/result';
var added = false;

// Called when the url of a tab changes.
function checkForUrl(tabId, changeInfo, tab) {
  if (tab.url.indexOf(HH_URL) == 0) {
    if (!added) {
	  chrome.pageAction.onClicked.addListener(function(tab) {
	    chrome.tabs.executeScript(tab.id, { 'code': 'start();' });
	  });
	}
	added = true;
    chrome.pageAction.show(tabId);
  }
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForUrl);
