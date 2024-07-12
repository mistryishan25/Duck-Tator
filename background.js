// console.log("quack echos in the background")

// function buttonClicked() {
//     console.log("Button clicked hooray!");
// }

// chrome.action.onClicked.addListener(buttonClicked);

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ['content.js']
    });
  });

// Listener for the task - regular alerts
chrome.alarms.onAlarm.addListener((alarm) => {
  chrome.windows.create({
    width : 500,
    height : 500,
    type : 'popup',
    url : 'alert.html'
  });
});