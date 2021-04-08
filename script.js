

var executeButton = document.getElementById("fortuneButton");
var outputParagraph = document.getElementById("fortuneOutput");
var inputElement = document.getElementById("fortuneInput");


executeButton.addEventListener("click", fortune);



function fortune() {

  var aesthetics = ["grunge", "fairy", "pastel", "cottage", "light academia", "dark academia", "y2k", "vintage", "cyber", "90's"];
  var aestheticsRandom = Math.floor(Math.random() * aesthetics.length);
var yourAesthetic = aesthetics[aestheticsRandom];
    var currentInputText = inputElement.value;
  outputParagraph.innerHTML =  currentInputText + ", " + "your aesthetic is " + yourAesthetic + " core!";
aestheticOutput = outputParagraph;
restyle(aestheticOutput);

}


function restyle(text){



//spacing
  text.style.letterSpacing = Math.floor(Math.random()*10 ) + "px";


//font colors
var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
var randomColors = Math.floor(Math.random() * colors.length);
var randomColorsOutput = colors[randomColors];
text.style.color = randomColorsOutput;


// font families
  var fontFamilies = ["Calibri", "Cambria", "Verdana", "Arial"]
    var randomFonts = Math.floor(Math.random() * fontFamilies.length);
    var randomFontOutput = fontFamilies[randomFonts];
text.style.fontFamily = randomFontOutput;

}
