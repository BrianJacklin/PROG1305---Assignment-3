
window.onload = function() {
  var $ = function (selector){return document.querySelector(selector);};  // this is not jQuery
  var allItems = $("#gallery").querySelectorAll(".gallery-item");
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
        requestID = requestAnimationFrame(update);
      };

      this.endGrow = function() {
        growStartTime = Date.now();
        requestID = requestAnimationFrame(down);
      };

      function update() {
        var currentTime = Date.now();
        var positionInGrow = (currentTime - growStartTime) / growDuration;
        var baseline = positionInGrow * 100;

          _this.style.transform = "translateY(-150px)";

          _this.style.height =  Math.floor(baseline) * 5.0 + "px";
          _this.style.width =  Math.floor(baseline) * 1 + "%";  
        
          
          
      if (positionInGrow <= 1)
        requestID = requestAnimationFrame(update);
      }

      function down() {
        var currentTime = Date.now();
        var positionInGrow = (currentTime - growStartTime) / growDuration;
        var baseline = positionInGrow * 1;

          _this.style.transform = "translateY(-150px)";

          _this.style.height =  Math.floor(baseline) * 5.0 + "px";
          _this.style.width =  Math.floor(baseline) * 1 + "%";  
        
          
          
      if (positionInGrow <= 1)
        requestID = requestAnimationFrame(down);
      }
    };
      var gallery = new Grow();

      function start(){
        gallery.startGrow();
      }
start();
  } // animated


  for(var i = 0; i < allItems.length; i++){

    allItems[i].addEventListener("click", animate);

    allItems[i].addEventListener("click", animate); 
  } 

};// onload