var menuImage = document.querySelector(".menu-img");
var sideBar = document.querySelector(".sidebar");
var mainPage = document.querySelector(".main-container");
// var videoList = document.querySelector(".");
menuImage.onclick = function () {
  sideBar.classList.toggle("collaps-sidebar");

  mainExpands();
};

function mainExpands() {
  mainPage.classList.toggle("main-containerExpands");
}
