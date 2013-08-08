(function(window) {
 function Main() {
 if(window.addEventListener) {
 window.addEventListener("load", onLoad);
 } else {
 window.attachEvent("onload", onLoad);
 }
 
 }
 function onLoad() {
		Facebook.APP_ID = "226287480854737";
		Facebook.init();
 }
 Main();
 }
 )(window);
