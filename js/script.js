const myButton = document.getElementById("my-button");
const myParagraph = document.getElementById("my-paragraph");

let clickCounter = 0;

function clickFunction() {
  console.log("the button has been clicked");
  clickCounter = clickCounter + 1;

  myParagraph.innerHTML = "I have been clicked " + clickCounter + " time(s)";
}

myButton.onclick = clickFunction;
