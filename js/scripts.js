
window.onload = function() {
  var $ = function (selector){return document.querySelector(selector);};  // this is not jQuery

/* ############################################################## 
                      Navigation
   ############################################################## */
  function toggleMenu(){
    $("#main-nav").classList.toggle("open");
    $(".overlay").classList.toggle("open");
    $(".trigger").classList.toggle("open");
    $("#body").classList.toggle("open");
  }
  
  //behaviour if you click the menu button
  $(".trigger").onclick = toggleMenu;
  
  //behaviour if you click a menu item
  $("#main-nav").getElementsByTagName("li").onclick = toggleMenu;
  
  //behaviour if you click the overlay
  $(".overlay").onclick = toggleMenu;


/* ############################################################## 
                      ASSIGNMENT #3 START
   ############################################################## */
    

};// onload