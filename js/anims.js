window.addEventListener('load', function () {

var $ = function (selector){return document.querySelector(selector);};  // this is not jQuery
var allItems = $("#gallery").querySelectorAll(".gallery-item");
var preview = $("#preview");
var fps = 1000/60;

function animate(e){
  var _this = e.target;

  function Gallery(){
    var startTime;
    var duration = 1000;
    var isDone;

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
      var progress = (currentTime - startTime) / duration;
      console.log("up - " + progress);
      
      if(progress <= 1){
        _this.style.top = 500 - (progress * (500)) + "px";
        _this.style.left = 0 - (progress * 1) + "px";
        _this.style.height = (progress * 500) + "px";
        _this.style.width = (progress * 100) + "%";
    
        progress = 1;
        requestID = requestAnimationFrame(up);
      };
    };

    function down(){
      var currentTime = Date.now();
      var progress = (currentTime - startTime) / duration;
      console.log("down - " + progress);
      
      if(progress <= 1 ){
        _this.style.top = 1 + (progress * 500 ) + "px";
        _this.style.height = 100 + (progress * 50) + "px";
        _this.style.width = 180 + (progress * 1) + "px";
        progress = 1;
        requestID = requestAnimationFrame(down);
      };
    };
  
  }; // gallery constructor

  //Add new gallery object

  var gallery = new Gallery();
  
  //check if the item is already up, if it is, bring it down.
  if(_this.classList.contains("active")){
    gallery.moveBack();
    _this.classList.remove("active");

  }else{
    gallery.moveUp();
    _this.classList.add("active")
  }
};
  
for(var i = 0; i < allItems.length; i++){
  allItems[i].addEventListener("click", animate); 
} 

});