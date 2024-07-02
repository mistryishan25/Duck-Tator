console.log("quack echos in the background")

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ['on_click.js']
    });
  });