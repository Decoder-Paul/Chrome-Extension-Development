const timeElement = document.getElementById("time");
const nameElement = document.getElementById("name");
const currentTime = new Date().toLocaleDateString();

nameElement.textContent = `The time is : ${currentTime}`;
