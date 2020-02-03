function toggleButton() {
  var x = document.getElementById("firstDiv");
  var y = document.getElementById("secondDiv");
  var z = document.getElementById("thirdDiv");
  if (x.innerHTML === "$19.99") {
    x.innerHTML = "$199.99";
  } else {
    x.innerHTML = "$19.99";
  }

  if (y.innerHTML === "$24.99") {
    y.innerHTML = "$249.99";
  } else {
    y.innerHTML = "$24.99";
  }

  if (z.innerHTML === "$39.99") {
    z.innerHTML = "$399.99";
  } else {
    z.innerHTML = "$39.99";
  }
}
