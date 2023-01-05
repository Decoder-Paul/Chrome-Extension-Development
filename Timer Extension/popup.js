const timeElement = document.getElementById("time");
const nameElement = document.getElementById("name");
const currentTime = new Date().toLocaleDateString();

nameElement.textContent = `The time is : ${currentTime}`;

function updateTimeElement() {
    chrome.storage.local.get(["timer"], (res)=>{
        const time = res.timer ?? 0
        timeElement.textContent = `The timer is at: ${time} Seconds`
    })
}
updateTimeElement();
setInterval(updateTimeElement, 1000);