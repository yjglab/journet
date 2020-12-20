const modeBtn = document.querySelector("#curtain__hover");
const windowBackground = document.querySelector("#window");
const body = document.querySelector("body");
const curtainShadow = document.querySelector(".curtain__shadow");
const journetTextWrapper = document.querySelector(".journetText__wrapper");
const journetTextBar = document.querySelector(".journetText__title-bar");
const journetTextTitle = document.querySelector(".journetText__title");
const journetTextL1 = document.querySelector(".journetText__leftUp");
const journetTextL2Sub = document.querySelector(
  ".journetText__leftDown-subTitle"
);
const journetTextL2 = document.querySelector(".journetText__leftDown");
const journetTextR1 = document.querySelector(".journetText__rightUp");
const journetTextR2Sub = document.querySelector(
  ".journetText__rightDown-subTitle"
);
const journetTextR2 = document.querySelector(".journetText__rightDown");
const journetModeBtn = document.querySelector(".journet-modeBtn");
const witchImg = document.querySelector(".witch");

let currentMode = "day";
modeBtn.addEventListener("click", () => {
  if (currentMode === "day") {
    windowBackground.style.background = "rgba(31, 18, 31, 0.979)";

    body.style.backgroundColor = "rgba(15, 2, 15, 0.979)";

    curtainShadow.style.background =
      "linear-gradient(90deg, rgba(11,5,11,0.85) 3%, rgba(11,5,11,0) 47%, rgba(11,5,11,0) 53%, rgba(14,5,14,0.85) 97%)";
    windowBackground.style.boxShadow = "0px 0px 1vw 0.33vw rgb(20, 1, 17)";

    journetTextBar.style.backgroundColor = "rgba(255, 255, 255, 0.623)";
    journetTextTitle.style.color = "rgba(255, 255, 255, 0.623)";
    journetTextL1.style.color = "rgba(255, 255, 255, 0.623)";
    journetTextL2.style.color = "rgba(255, 255, 255, 0.623)";
    journetTextL2Sub.style.color = "rgba(255, 255, 255, 0.623)";
    journetTextR1.style.color = "rgba(255, 255, 255, 0.623)";
    journetTextR2.style.color = "rgba(255, 255, 255, 0.623)";
    journetTextR2Sub.style.color = "rgba(255, 255, 255, 0.623)";

    journetModeBtn.innerText = "Journet. Night";
    journetModeBtn.style.color = "rgba(34, 26, 34, 0.979)";
    journetModeBtn.style.backgroundColor = "rgba(255, 255, 255, 0.623)";
    currentMode = "night";

    witchImg.src = "img/santa.png";
    witchImg.style.transform = "scale(3)";
  } else if (currentMode === "night") {
    windowBackground.style.background =
      "linear-gradient(0deg, rgba(166, 160, 218, 1) 0%, rgba(252, 171, 205, 1) 81%)";
    body.style.backgroundColor = null;
    curtainShadow.style.background =
      "linear-gradient(90deg,rgba(0, 0, 0, 0.6) 0%,rgba(255, 255, 255, 0) 22%,rgba(255, 255, 255, 0) 78%,rgba(0, 0, 0, 0.6) 100%)";
    windowBackground.style.boxShadow =
      "0px 0px 1vw 0.33vw rgba(39, 39, 39, 0.39)";

    const textColor = " rgba(0, 0, 0, 0.781)";
    journetTextBar.style.backgroundColor = textColor;
    journetTextTitle.style.color = textColor;
    journetTextL1.style.color = textColor;
    journetTextL2.style.color = textColor;
    journetTextL2Sub.style.color = textColor;
    journetTextR1.style.color = textColor;
    journetTextR2.style.color = textColor;
    journetTextR2Sub.style.color = textColor;

    journetModeBtn.innerText = "Journet. Day";
    journetModeBtn.style.color = null;
    journetModeBtn.style.backgroundColor = textColor;
    currentMode = "day";

    witchImg.src = "img/witch.png";
    witchImg.style.transform = "scale(1)";
  }
});
