document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "E".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "S".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "H".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "A".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "F".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "E".charCodeAt(0)) {
    return false;
  }
};

document.addEventListener("contextmenu", function (hello) {
  hello.preventDefault();
});

// (function(){

//   var _z = console;
//   Object.defineProperty( window, "console", {
// 		get : function(){
// 		    if( _z._commandLineAPI ){
// 			throw "Sorry, Can't execute scripts!";
// 		          }
// 		    return _z;
// 		},
// 		set : function(val){
// 		    _z = val;
// 		}
//   });

// })();

window.console.log = function () {
  console.error("Sorry , developers tools are blocked here....");
  window.console.log = function () {
    return false;
  };
};

console.log("test");

// Object.defineProperty(console, '_commandLineAPI', { get : function() { throw 'Nooo!' } })
