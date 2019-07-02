var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// the below checks that the above was done correctly by putting the below into the Console - it should give back what's in the HTML file
// console.log(css);
// console.log(color1);
// console.log(color2);
// console.log(body);


// the below makes it so that you can pick colors in the pop-up color wheel and it'll update in the Console
// color1.addEventListener("input", function() {
//   console.log(color1.value);
// });
//
// color2.addEventListener("input", function() {
//   console.log(color2.value);
// });

// color1.addEventListener("input", function() {
//   body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
// });
//
// color2.addEventListener("input", function() {
//   body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
// });

// the below condenses the above so we don't repeat ourselves (DRY)
function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";"; /* this is for the CSS code at bottom */
}

color1.addEventListener("input", setGradient);
// notice that we didn't write setGradient() - because () means to execute a function and we don't need it to do that here - it does it automatically when there's an input

color2.addEventListener("input", setGradient);
