// Change the heading text based on user input
function changeHeading() {
    let newHeading = document.getElementById("newHeading").value;
    if (newHeading !== "") {
        document.getElementById("heading").innerHTML = newHeading;
    }
}

// Change background to a random color
function changeBackground() {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    document.body.style.backgroundColor = randomColor;
}

// Increase font size of the heading by 4px each click
function increaseFontsize() {
    let heading = document.getElementById("heading");
    let currentSize = parseFloat(window.getComputedStyle(heading).fontSize);
    heading.style.fontSize = (currentSize + 4) + "px";
}

// show/hide of the paragraph
function showHidePara() {
    let para = document.getElementById("para");
    if (para.style.display === "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
}

// Reset everything to default
function reset() {
    document.getElementById("heading").innerHTML = "Welcome to JavaScript Lab";
    document.getElementById("heading").style.fontSize = "";
    document.body.style.backgroundColor = "";
    document.getElementById("para").style.display = "block";
    document.getElementById("newHeading").value = "";
}