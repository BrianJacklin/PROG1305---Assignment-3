window.addEventListener('load', function () {

var $ = function (selector){return document.querySelector(selector);};  // this is not jQuery
var allItems = $("#gallery").querySelectorAll(".gallery-item");
var preview = $("#preview");
var isUp = false;
var fps = 1000/60;

function animate(e){
  var _this = e.target;

  function Gallery(){
    var startTime;
    var duration = 1000;

    this.moveUp = function (){
      var requestID = 0;
      startTime = Date.now();
      requestID = requestAnimationFrame(up);
    };

    this.moveBack = function (){
      var requestID = 0;
      startTime = Date.now();
      requestID = requestAnimationFrame(down);
    };

    function up(){
      var currentTime = Date.now();
      var progress = Math.floor((currentTime - startTime)) / duration || 1;
      console.log("up - " + progress);
      isUp = true;
      _this.style.top = 500 - (progress * (500)) + "px";
      _this.style.left = 1 + (progress * 1) + "px";
      _this.style.height = (progress * 300) + "px";
      _this.style.width = (progress * 525) + "px";
      _this.classList.add("active");

      if(progress <= 1){
        requestID = requestAnimationFrame(up);
      };
    };

    function down(){
      var currentTime = Date.now();
      var progress = (currentTime - startTime) / duration;
      console.log("down - " + progress);
      isUp = false;
      _this.style.top = 1 + (progress * 500 ) + "px";
      _this.style.left = 0;
      _this.style.height = 100 + (progress * 50) + "px";
      _this.style.width = 180 + (progress * 1) + "px";

      if(progress <= 1){
        requestID = requestAnimationFrame(down);
      };
    };

  }; // gallery

  //Add new gallery object
  var gallery = new Gallery();
  //check if the item is already up, if it is, bring it down.
  if(isUp){
    gallery.moveBack();
    _this.classList.remove("active");
  }else{
    gallery.moveUp();
  }

  
};
  
for(var i = 0; i < allItems.length; i++){
  allItems[i].addEventListener("click", animate); 
} 

});