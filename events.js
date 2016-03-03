var sections = document.getElementsByClassName("article-section");
var outputSection = document.getElementById("output-target");
var h1Tag = document.getElementById("page-title");
var inputBox = document.getElementById("keypress-input");
var addColor = document.getElementById("add-color");
var guineaPig = document.getElementById("guinea-pig")
var hulkify = document.getElementById("make-large")


//When any section is clicked the output target text should be "You clicked on the {text of the section} section"
giveSectionName(sections);

function giveSectionName(sections) {
    for (var i = 0; i < sections.length; i++) {
        sections[i].addEventListener("click", selectedShit);
    }
}

function selectedShit(e){
    var clickedItem = e.target.innerHTML
    outputSection.innerHTML = "You clicked on the " + clickedItem + " section.";
}


//When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
h1Tag.addEventListener("mouseover", mousedOverShit);

function mousedOverShit() {
   outputSection.innerHTML = "You moved your mouse over the header."; 
}


//When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
h1Tag.addEventListener("mouseout", mousedOuttaShit);

function mousedOuttaShit() {
   outputSection.innerHTML = "You left me!!"; 
}


//When you type characters into the input field, the output element should mirror the text in the input field.
inputBox.addEventListener("keyup", mirrorDatShit);

function mirrorDatShit() {
    outputSection.innerHTML = inputBox.value;
} 

//When you click the "Add color" button, the guinea-pig element's text color should change to blue.
addColor.addEventListener("click", fuckWithColor)

function fuckWithColor() {
    guineaPig.style.color = "blue"
}

//When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
hulkify.addEventListener("click", makeShitBig)

function makeShitBig() {
    guineaPig.style.fontSize = "40px"
}