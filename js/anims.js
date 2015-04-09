
window.onload = function() {
  var $ = function (selector){return document.querySelector(selector);};  // this is not jQuery
  var allItems = document.querySelectorAll(".gallery-item");
  var preview = $("#preview");
 
  function hideAll(){
    for(var i = 0;i <= allItems.length - 1 ;i++){
     allItems[i].setAttribute("style", '');
    }
  }

  for(var i = 0; i < allItems.length; i++){
    allItems[i].addEventListener("click", animate); 
  } 


};// onload