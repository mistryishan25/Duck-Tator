// document.addEventListener("DOMContentLoaded", function(){
//     // alert("YO IT IS WORKING")
//     document.getElementById("try-me").addEventListener("click", function(){
//         alert("Button clicky clicky!")
//     })
// })


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("try-me").addEventListener("click", function() {
        // Send a message to the content script
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "tryMeClicked" });
        });
    });
});
