function myFunction() {
  var name = prompt("Please enter your name:");

  if (name != null) {
    document.getElementById("myName").innerHTML += name;
  }

  var date = new Date();

  var timeStr = date.toLocaleTimeString();
  if (timeStr != null) {
    document.getElementById("myClock").innerHTML += timeStr;
  }

  var day = date.getDay();
  var dayStr;
  if (day != null) {
    if (day === 1) dayStr = "Pazartesi";
    else if (day === 2) dayStr = "Salı";
    else if (day === 3) dayStr = "Çarşamba";
    else if (day === 4) dayStr = "Perşembe";
    else if (day === 5) dayStr = "Cuma";
    else if (day === 6) dayStr = "Cumartesi";
    else dayStr = "Pazar";
  }
  document.getElementById("myClock").innerHTML += " " + dayStr;
}

myFunction();
