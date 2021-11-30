let name = prompt("masukan nama");
let yourNumber = prompt(
  "Silahkan pilih angka 1-3\n1. Kertas\n2. Gunting\n3. Batu"
);

let yourValue;

switch (yourNumber) {
  case "1":
    yourValue = "Kertas";
    break;
  case "2":
    yourValue = "Gunting";
    break;
  case "3":
    yourValue = "Batu";
    break;
  default:
    alert("Masukkan angka yang sesuai!");
}

alert(name + " memilih " + yourValue);

let computerNumber = Math.random();
let computerValue;

if (computerNumber <= 0.33) {
  computerValue = "Kertas";
} else if (computerNumber > 0.33 && computerNumber <= 0.66) {
  computerValue = "Gunting";
} else if (computerNumber > 0.66) {
  computerValue = "Batu";
}

alert("Computer memilih " + computerValue);

function paperValue() {
  if (yourValue == "Kertas" && computerValue == "Kertas") {
    return "Seri";
  } else if (yourValue == "Kertas" && computerValue == "Batu") {
    return "Menang";
  } else if (yourValue == "Kertas" && computerValue == "Gunting") {
    return "Kalah";
  }
}

function rockValue() {
  if (yourValue == "Batu" && computerValue == "Kertas") {
    return "Kalah";
  } else if (yourValue == "Batu" && computerValue == "Batu") {
    return "Seri";
  } else if (yourValue == "Batu" && computerValue == "Gunting") {
    return (value = "Menang");
  }
}

function scissValue() {
  if (yourValue == "Gunting" && computerValue == "Kertas") {
    return "Menang";
  } else if (yourValue == "Gunting" && computerValue == "Batu") {
    return "Kalah";
  } else if (yourValue == "Gunting" && computerValue == "Gunting") {
    return "Seri";
  }
}

let value;

if (yourNumber == "1") {
  value = paperValue();
} else if (yourNumber == "2") {
  value = scissValue();
} else if (yourNumber == "3") {
  value = rockValue();
}

if (value == "Seri") {
  alert(name + " dan Computer " + value);
} else {
  alert(name + " " + value);
}
