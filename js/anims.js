
window.onload = function() {



var $ = function (selector){return document.querySelector(selector);};  // this is not jQuery
var allItems = document.querySelectorAll(".gallery-item");
var preview = $("#preview");
var isUp = false;
var requestID = 0;
var fps = 1000/60;
var posX = 150;
var posY = 150;
var delta = 100;


function moveUp(e){
  isUp = true;
  e = e || window.event;
  var target = e.target || e.srcElement;
  console.log(target);
  posY += 10;
  posX += 10;

  target.style.top = posY + "px";
  target.style.left = 190 + "px";
  target.style.height = 150 * 2 + "px";
  target.style.width = 150 * 3.5 + "px";
  target.classList.add("active");

  setTimeout(moveUp, fps);
}


function mover(){

    moveUp();

}

  for(var i = 0; i < allItems.length; i++){
    allItems[i].addEventListener("click", moveUp, false); 
  } 

};// onload