var qrcode = new QRCode("qrcode");

function makeCode () {    
  var elText = document.getElementById("text");

  // make sure value exists and is 5 digits and possibly only numbers
  // | (elText.value.length != 5)
  if (!elText.value) {
    alert("Please input the code.");
    elText.focus();
    return;
  }
  if (elText.value == "away") {
    window.location.replace("success.html");
    return;
  }
  
  qrcode.makeCode(elText.value);
}

makeCode();

$("#text").
  on("blur", function () {
    makeCode();
  }).
  on("keydown", function (e) {
    if (e.keyCode == 13) {
      makeCode();
    }
  });

