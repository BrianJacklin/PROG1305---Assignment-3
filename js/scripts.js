
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
  var allItems = $("#gallery").getElementsByTagName("img");
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
    
    function Grow(){

      var growStartTime;
      var growDuration = 600;

      this.startGrow = function() {
        growStartTime = Date.now();
        requestAnimationFrame(update);
      };

      function update() {
        var currentTime = Date.now();
        var positionInGrow = (currentTime - growStartTime) / growDuration;
        var baseline = positionInGrow * 100;

          _this.style.transform = "translateY(-150px)";

          _this.style.height =  Math.floor(baseline) * 5.0 + "px";
          _this.style.width =  Math.floor(baseline) * 1 + "%";  
        
          
          
      if (positionInGrow <= 1)
        requestAnimationFrame(update);
      }
    };
      var gallery = new Grow();

      gallery.startGrow();

  } // animated


  for(var i = 0; i < allItems.length; i++){

    allItems[i].addEventListener("click", animate); 
  } 

};// onload