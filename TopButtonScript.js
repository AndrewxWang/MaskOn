myID = document.getElementById("top-button");
var scrollFunc = function() {
  var y = window.scrollY;
  if (y >= 400) {
    myID.className = "top-button show"
  } else {
    myID.className = "top-button hide"
  }
};

window.addEventListener("scroll", scrollFunc);