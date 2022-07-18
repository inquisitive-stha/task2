const x = document.getElementById("main");
const y = x.getElementsByTagName("p");

// onClick button-1
function showFirstPData() {
  populateContentOnDemo(y[0].innerHTML);
}

// onClick button-2
function showLastPData() {
  populateContentOnDemo(y[y.length - 1].innerHTML);
}

function populateContentOnDemo(content) {
  document.getElementById("demo").innerHTML = content;
}
