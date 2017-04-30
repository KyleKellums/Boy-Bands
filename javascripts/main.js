/***********************************************************************************
Loop through the two arrays provided (bands and vegetables) and output each element in the arrays into their corresponding HTML <div> element. Ensure that each item is in a block element (e.g. li, div, p. etc...)
*********************************************************************************/
console.log("hello");

var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];


var loopCount = 5; // The number of loops to perform (what if the array changes?)
var currentBand = ""; // Keep track of which band we're on in the loop
var currentVeggie = ""; // Keep track of which veggie we're on in the loop

// References to the appropriate DOM
var bandElement = document.getElementById("boy-bands");
var veggieElement = document.getElementById("vegetables");


for (var i = 0; i < bands.length; i++) {
  currentBand = `<p>${bands[i]}</p>`;
  bandElement.innerHTML += currentBand;
}

for (var i = 0; i < vegetables.length; i++) {
  currentVeggie = `<p>${vegetables[i]}</p>`;
  veggieElement.innerHTML += currentVeggie;
}