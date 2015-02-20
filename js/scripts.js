
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
  var allItems = $("#gallery-items").getElementsByTagName("li");
  var preview = $("#preview");

  function hideAll(){
    while (preview.hasChildNodes()) {
      preview.removeChild(preview.lastChild);
    };
  }

  for(var i = 0; i < allItems.length; i++){

    allItems[i].addEventListener("click", function(e){

      e.preventDefault(); // stop default click behaviour
      hideAll(); // remove any child elements from the preview window

      var newNode = this.childNodes[0].firstChild.cloneNode(true); // newNode os a clone of the clicked image
      preview.appendChild(newNode); // add newNode to the preview window
      
      if(newNode.classList.contains("active") == 1){
          newNode.classList.remove("active");

      }else{
              newNode.classList.add("active");

      }

      function Grow(){

        var growStartTime = 0;
        var growDuration = 600;

        this.startGrow = function() {
          growStartTime = Date.now();
          requestAnimationFrame(update);
        };

        function update() {
          var currentTime = Date.now();
          var positionInGrow = (currentTime - growStartTime) / growDuration;

          var h = positionInGrow * 100;
          var w = positionInGrow * 100;

          // Im not sure how we can make this better
          // This is a hack to make sure that the height and width are both at 100
          // when they are both 100% it fills its container without needing absolute values
          // Is there a way to round
          if (h > 100){
            h = 100; 
          }
          if (w > 100){
            w = 100;    
          }
            console.log('h: '+h + ' w: ' +w);
          
          newNode.style.height =  h + "%";
          newNode.style.width =  w + "%";

          if (positionInGrow <= 1)
            requestAnimationFrame(update);
         }
      };
      var gallery = new Grow();
      gallery.startGrow();
      
    },false); // allItems[i].onclick

  } // for i loop

};// onload