//code for the button to go back to home page on bottom right

topBtn = document.getElementById("top-button");
var scrollFunc = function() {
  var y = window.scrollY;
  if (y >= 400) {
    topBtn.className = "top-button show"
  } else {
    topBtn.className = "top-button hide"
  }
};

window.addEventListener("scroll", scrollFunc);