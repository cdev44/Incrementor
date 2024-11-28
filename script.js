// INCREMENTING VARIABLES & RANDOM VALUES

// 1. Saving elements as variables cleans up your code.

// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before

// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!

// 4. Math.random() is used to bring RNG (random number generator) to your applications.

// Check your understanding
// 1. Complete the rest of the incrementing buttons.
// 2. Complete the random __ to __ button.
// 3. Complete the Random Size button. This button should change the font size of all text in the body to a value between 0 and 75
// 4. Complete the Random Color button. This should change the html background to a random rgb color.  Hint:  `rgb(34, 245, 128)` is a value rgb color, where the numbers each range from 0 to 255. You will need three random numbers, then you will need to create a string using those numbers.

// i.e.  var rgbString = `rgb(34, 245, 128)`;
//       document.getElementById('HTML').style.background = rgbString

// Your job is to make the values random in the above code snippet.

// 4. Code the reset button. This will reset all variables back to initial values and clear out all input fields and reset span boxes back to dashes. It's like refresing the page without actually refreshing the page.

var displayNum = 0;
var randVal1 = 0;
var randVal2 = 0;
document.getElementById("plus1").addEventListener("click", addOne);
document.getElementById("plus10").addEventListener("click", addTen);
document.getElementById("plus50").addEventListener("click", addFif);
document.getElementById("minus1").addEventListener("click", minOne);
document.getElementById("minus10").addEventListener("click", minTen);
document.getElementById("minus50").addEventListener("click", minFif);
document.getElementById("strIn").addEventListener("change", addStr);
document.getElementById("rand1").addEventListener("click", randZO);
document.getElementById("rand2").addEventListener("click", randZOH);
document.getElementById("rand3").addEventListener("click", randNFF);
document.getElementById("rand-in1").addEventListener("change", randUP);
document.getElementById("rand-in2").addEventListener("change", randUP);
document.getElementById("rand4").addEventListener("click", randNN);
document.getElementById("random-rgb").addEventListener("click", rRGB);
document.getElementById("random-size").addEventListener("click", rS);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("candy").addEventListener("click", addCD);

function addOne() {
  displayNum += 1;
  console.log(displayNum);
  document.getElementById("display").innerHTML = displayNum;
}

function addTen() {
  displayNum += 10;
  console.log(displayNum);
  document.getElementById("display").innerHTML = displayNum;
}

function addFif() {
  displayNum += 50;
  console.log(displayNum);
  document.getElementById("display").innerHTML = displayNum;
}

function minOne() {
  displayNum -= 1;
  console.log(displayNum);
  document.getElementById("display").innerHTML = displayNum;
}

function minTen() {
  displayNum -= 10;
  console.log(displayNum);
  document.getElementById("display").innerHTML = displayNum;
}

function minFif() {
  displayNum -= 50;
  console.log(displayNum);
  document.getElementById("display").innerHTML = displayNum;
}

function addStr() {
  var modString = document.getElementById("strIn").value;
  var output = `Once upon a time, ${modString}`;
  document.getElementById("strOut").innerHTML = output;
}

function randZO() {
  var rNum = Math.random();
  rNum = Math.round(rNum * 100) / 100;
  document.getElementById("rand1-out").innerHTML = rNum;
}

function randZOH() {
  var rNum = Math.random();
  rNum = Math.round(rNum * 100);
  document.getElementById("rand2-out").innerHTML = rNum;
}

function randNFF() {
  var rNum = Math.random() * (5 - -5) + -5;
  rNum = Math.round(rNum);
  document.getElementById("rand3-out").innerHTML = rNum;
}

function randUP() {
  randVal1 = Number(document.getElementById("rand-in1").value);
  randVal2 = Number(document.getElementById("rand-in2").value);
}

function randNN() {
  rNum = Math.random() * (randVal2 - randVal1) + randVal1;
  rNum = Math.round(rNum);
  document.getElementById("rand4-out").innerHTML = rNum;
}

function rRGB() {
  console.log("RGB");
  var RVal = Math.random() * (255 - 1) + 1;
  var GVal = Math.random() * (255 - 1) + 1;
  var BVal = Math.random() * (255 - 1) + 1;

  RVal = Math.round(RVal);
  GVal = Math.round(GVal);
  BVal = Math.round(BVal);

  var rgbStr = `rgb(${RVal}, ${GVal}, ${BVal})`;
  console.log(rgbStr);
  document.getElementById("HTML").style.background = rgbStr;
}

function rS() {
  var RVal = Math.random() * (75 - 1) + 1;
  document.getElementById("HTML").style.fontSize = `${RVal}px`;
}

function reset() {
  displayNum = 0;
  randVal1 = 0;
  randVal2 = 0;

  document.getElementById("strIn").value = null;
  document.getElementById("rand-in1").value = null;
  document.getElementById("rand-in2").value = null;

  document.getElementById("rand1-out").innerHTML = "----------";
  document.getElementById("rand2-out").innerHTML = "----------";
  document.getElementById("rand3-out").innerHTML = "----------";
  document.getElementById("rand4-out").innerHTML = "----------";
  document.getElementById("strOut").innerHTML = `Once upon a time, `;
  document.getElementById("display").innerHTML = displayNum;
  document.getElementById("HTML").style.fontSize = `medium`;
  document.getElementById("HTML").style.background = "#9ae4c8";
  document.getElementById("candyCont").innerHTML = null;
}

function addCD() {
  var output = (document.getElementById(
    "candyCont"
  ).innerHTML += `<img src="img/The goat.jpg" alt="Twix">`);
  document.getElementById("candyCont").innerHTML = output;
}
