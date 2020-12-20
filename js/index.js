const journetWindow = document.querySelector("#curtain__hover");
const curtainLeft = document.querySelector(".jsCurtain-left");
const curtainRight = document.querySelector(".jsCurtain-right");
const screenFrontBlack = document.querySelector(".screen__frontBlack");
const planeicon = document.querySelector(".planeicon");
const journetText = document.querySelector(".journetText__wrapper");
const rotatingPlane = document.querySelector(".window-rotatePlane__wrapper");

const mainEventHandler = {
  moveLeftIn: function () {
    curtainLeft.style.transform = "translateX(-48.7%)";
  },
  moveRightIn: function () {
    curtainRight.style.transform = "translateX(48.7%)";
  },
  moveLeftOver: function () {
    curtainLeft.style.transform = "translateX(0px)";
  },
  moveRightOver: function () {
    curtainRight.style.transform = "translateX(0px)";
  },
  screenOpacityOn: function () {
    screenFrontBlack.style.opacity = 1;
    journetText.style.opacity = 0;
  },
  screenOpacityOff: function () {
    screenFrontBlack.style.opacity = 0;
    journetText.style.opacity = 1;
  },
  planeiconMoveOn: function () {
    planeicon.setAttribute(
      "style",
      "transform: translateY(-350%) scale(0.65); opacity: 0"
    );
  },
  planeiconMoveOff: function () {
    planeicon.setAttribute("style", "transform: translateY(0%) scale(1)");
  },
  planeiconRotateOn: function () {
    rotatingPlane.setAttribute(
      "style",
      "transform: rotate(-180deg) scale(1); opacity: 1"
    );
  },
  planeiconRotateOff: function () {
    rotatingPlane.setAttribute(
      "style",
      "transform: rotate(30deg) scale(1); opacity: 0"
    );
  },
};

const init = () => {
  journetWindow.addEventListener("mouseenter", mainEventHandler.moveLeftIn);
  journetWindow.addEventListener("mouseenter", mainEventHandler.moveRightIn);
  journetWindow.addEventListener("mouseleave", mainEventHandler.moveLeftOver);
  journetWindow.addEventListener("mouseleave", mainEventHandler.moveRightOver);
  journetWindow.addEventListener(
    "mouseenter",
    mainEventHandler.screenOpacityOff
  );
  journetWindow.addEventListener(
    "mouseenter",
    mainEventHandler.planeiconMoveOn
  );
  journetWindow.addEventListener(
    "mouseenter",
    mainEventHandler.planeiconRotateOn
  );

  journetWindow.addEventListener(
    "mouseleave",
    mainEventHandler.screenOpacityOn
  );
  journetWindow.addEventListener(
    "mouseleave",
    mainEventHandler.planeiconMoveOff
  );
  journetWindow.addEventListener(
    "mouseleave",
    mainEventHandler.planeiconRotateOff
  );
};
init();
