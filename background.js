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