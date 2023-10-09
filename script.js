function toggleDisplay(className, eventName) {
    var elements = document.querySelectorAll("#" + className);
    var logo = document.getElementById("head-logo");
    var button = document.getElementById("btns");
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].style.display === "block") { //main
        elements[i].style.display = "none";
        button.style.display = "block";
        logo.style.display = "block";
        document.title = "The Fox Returns — SOC Days 2023";
      } else { //menu
        elements[i].style.display = "block";
        button.style.display = "none";
        logo.style.display = "none";
        document.title = eventName + " — SOC Days 2023";
      }
    }
  }