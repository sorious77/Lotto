const makeNumBtn = document.querySelector(".makeNum");
const number = document.querySelector(".lottoNum");
const numList = number.querySelector("ul");

let index = 0;
let lottoNum = [];
let color = ["#F08989", "#F8A481", "#F0EE71", "#A2F39D", "#A0D2F5", "#969CFA"];

function startLotto() {
  number.style.height = "100px";

  let check = new Array(46).fill(0);

  for (var i = 0; i < 6; i++) {
    var temp = 0;
    while (true) {
      temp = Math.floor(Math.random() * 45 + 1);

      if (check[temp] === 0) {
        check[temp] = 1;
        break;
      }
    }
    lottoNum.push(temp);
  }

  lottoNum.sort(function (a, b) {
    return a - b;
  });

  console.log(lottoNum);

  setInterval(printLotto, 1000);
  makeNumBtn.style.display = "none";
}

function printLotto() {
  if (index >= 6) {
    clearInterval();
    return;
  }

  const span = document.createElement("span");
  span.innerText = `${lottoNum[index]} `;

  span.style.verticalAlign = "middle";
  span.style.display = "inline-block";
  span.style.backgroundColor = color[index];
  span.style.borderRadius = "50%";
  span.style.width = "100px";
  span.style.height = "100px";
  span.style.lineHeight = "100px";
  span.style.fontSize = "3vw";
  span.style.color = "#4A4A4A";

  number.appendChild(span);
  index++;
}

function init() {
  number.style.visibility = "visible";
  makeNumBtn.addEventListener("click", startLotto);
}

init();
