var sections = document.getElementsByClassName("article-section");
var outputSection = document.getElementById("output-target");
var h1Tag = document.getElementById("page-title");



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