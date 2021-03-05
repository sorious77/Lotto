const timeDiv = document.querySelector(".time");
const timeContent = timeDiv.querySelector(".clock");

function getTime() {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  timeContent.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${
    min < 10 ? `0${min}` : min
  }:${sec < 10 ? `0${sec}` : sec}`;
}

function init() {
  setInterval(getTime, 100);
  getTime();
}

init();
