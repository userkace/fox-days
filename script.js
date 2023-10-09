function toggleDisplay(className) {
    var elements = document.querySelectorAll("#" + className);
    var logo = document.getElementById("head-logo");
    var button = document.getElementById("btns");
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].style.display === "block") {
        elements[i].style.display = "none";
        button.style.display = "block";
        logo.style.display = "block";
      } else {
        elements[i].style.display = "block";
        button.style.display = "none";
        logo.style.display = "none";
      }
    }
  }