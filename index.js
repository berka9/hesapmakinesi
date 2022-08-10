let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));
let operators = Array.from(document.getElementsByClassName("operators"));
let sonuc = document.getElementById("sonuc");
let toplama = document.getElementById("toplama");
let display2 = document.getElementById("display2");

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        display2.innerText = "";
        sonuc.innerText = "";
        break;

      case "=":
        try {
          sonuc.innerText = eval(display.innerText + display2.innerText);
        } catch {
          sonuc.innerText = "Eror";
        }
        break;
      case "←":
        if (display2.innerText) {
          display2.innerText = display2.innerText.slice(0, -1);
        } else if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "+":
        display2.innerText += e.target.innerText;
        break;
      case "-":
        display2.innerText += e.target.innerText;
        break;
      case "*":
        display2.innerText += e.target.innerText;
        break;
      case "/":
        display2.innerText += e.target.innerText;
        break;

      default:
        if (display2.textContent == "") {
          display.innerText += e.target.innerText;
        } else {
          display2.innerText += e.target.innerText;
        }
    }
  });
});
