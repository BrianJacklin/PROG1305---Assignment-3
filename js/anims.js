
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
  var allItems = $("#gallery-items").getElementsByTagName("img");
  var preview = $("#preview");

  function hideAll(){
    while (preview.hasChildNodes()) {
      preview.removeChild(preview.lastChild);
    };
    //this.classList.remove("active");
  }

  function animate(e){
    e.preventDefault(); // stop default click behaviour
    hideAll(); // remove any child elements from the preview window

    var _this = e.target; // capture _this as the target clicked.
    var time;
    function move(){
      requestAnimationFrame(move);
      var now = new Date().getTime(),
          dt = now - (time || now);
   
      time = now;

      // Drawing code goes here... for example updating an 'x' position:
      _this.x= 100 * dt; // Increase 'x' by 10 units per millisecond
      _this.style.top = 1 * dt; // Increase 'x' by 10 units per millisecond
      }
     
   move();
  } // animated

  for(var i = 0; i < allItems.length; i++){
    allItems[i].addEventListener("click", animate); 
  } // handle animation clicks

};// onload