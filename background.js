console.log("beginning of background.js");

//this control when to show the pageActino icon
//only to those URL not starting with about:
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (!tab.url.match(/^about:/)) {
    chrome.pageAction.show(tab.id);
  }
});


var filter = {
  url:
  [
    {hostContains: "youtube"}
  ]
}

function logOnHistoryStateUpdated(details) {
  console.log("onHistoryStateUpdated: " + details.url);
  console.log("Transition type: " + details.transitionType);
  console.log("Transition qualifiers: " + details.transitionQualifiers);
}

chrome.webNavigation.onHistoryStateUpdated.addListener(logOnHistoryStateUpdated, filter);
console.log("end of background.js");
