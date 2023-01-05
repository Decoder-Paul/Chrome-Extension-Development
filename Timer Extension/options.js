const timeInput = document.getElementById("time-input");
document.querySelector("#save-btn").addEventListener("click", ()=>{
    const notificationTime = timeInput.value;
    chrome.storage.sync.set({
        notificationTime
    })
})
chrome.storage.sync.get(["notificationTime"], (res)=>{
    timeInput.value = res.notificationTime ?? 1000
})