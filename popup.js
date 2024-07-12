document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("try-me").addEventListener("click", function() {
        // Send a message to the content script
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "tryMeClicked" });
        });
    });
});


window.addEventListener("DOMContentLoaded", function(){
    const submitTaskButton = document.getElementById('submit-task');
    if (submitTaskButton) {
        submitTaskButton.addEventListener('click', function() {
            const taskDesc = document.getElementById('task-desc').value;
            if (taskDesc) {
                alert('Task submitted: ' + taskDesc);
            } else {
                alert('Please enter a task description.');
            }
        });
    }
});

window.addEventListener("DOMContentLoaded", function() {
    const alarm_id = 'alarm_001';
    const submitreminderButton = document.getElementById('submit-reminder');
    if (submitreminderButton) {
        submitreminderButton.addEventListener('click', function() {
            const reminderMinutes = document.getElementById('reminder-minutes').value;
            if (isNaN(reminderMinutes) || reminderMinutes === '') {
                alert('Please enter a valid number of secs.');
                console.log("invalid input")
            } else {
                let dt = new Date();
                dt.setSeconds(dt.getSeconds() + parseInt(reminderMinutes));
                chrome.alarms.create(alarm_id, {when: dt.getTime()});
                console.log("alaram created")
                alert('Reminder set for ' + reminderMinutes + ' secs.');
            }
        });
    }
});



