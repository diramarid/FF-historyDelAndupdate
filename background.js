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

<<<<<<< HEAD
function logOnHistoryStateUpdated(details) {
  console.log("onHistoryStateUpdated: " + details.url);
  console.log("Transition type: " + details.transitionType);
  console.log("Transition qualifiers: " + details.transitionQualifiers);
}

chrome.webNavigation.onHistoryStateUpdated.addListener(logOnHistoryStateUpdated, filter);
=======
function logOnCompleted(details) {
  console.log("onCompleted: " + details.url);
}

chrome.webNavigation.onCompleted.addListener(logOnCompleted, filter);
>>>>>>> 3007eca952568fa9f80376a5cfa6764bf99c149b
console.log("end of background.js");
