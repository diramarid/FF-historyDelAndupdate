console.log("beginning of background.js");

//this control when to show the pageActino icon
//only to those URL not starting with about:
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (!tab.url.match(/^about:/)) {
    chrome.pageAction.show(tab.id);
  }
});


//test webNavigation.onHistorySateUpdated
function logOnHistoryStateUpdated(details) {
  console.log("onHistoryStateUpdated: " + details.url);
  console.log("Transition type: " + details.transitionType);
  console.log("Transition qualifiers: " + details.transitionQualifiers);
}

chrome.webNavigation.onHistoryStateUpdated.addListener(logOnHistoryStateUpdated, filter);
//end of test webNavigation.onHistorySateUpdated

console.log("end of background.js");
