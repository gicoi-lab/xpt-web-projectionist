/*
  jquery version
*/

$.xptProjCheckScreen = function () {
  var realScreenX = window.screen.width * window.devicePixelRatio;
  var realScreenY = window.screen.height * window.devicePixelRatio;

  // when screen width >= 1280 , and device > 1 DPI , then check and setup the root element
  if (realScreenX >= 1280 && window.devicePixelRatio > 1) {
    var newFontSize = Math.round((1 / window.devicePixelRatio) * 10) / 10;
    newFontSize = (newFontSize < 0.5 ? 0.5 : newFontSize);
    document.getElementsByTagName("html")[0].setAttribute('style', 'font-size:'+ newFontSize + 'rem;');
  } else {
    document.getElementsByTagName("html")[0].setAttribute('style', 'font-size:1rem;');
  }
}

$(function(){
  $.xptProjCheckScreen();
});

