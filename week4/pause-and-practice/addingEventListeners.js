const box = document.getElementById("box");

window.addEventListener("load", function() {
    box.style.backgroundColor = "black";
});

box.addEventListener("mouseover", function() {
    box.style.backgroundColor = "green";
});

box.addEventListener("mousedown", function() {
    box.style.backgroundColor = "yellow";
});

box.addEventListener("mouseup", function() {
    box.style.backgroundColor = "blue";
});

box.addEventListener("dblclick", function() {
    box.style.backgroundColor = "red";
});

window.addEventListener("scroll", function() {
    box.style.backgroundColor = "purple";
});

window.addEventListener("keydown", function(e) {
    if (e.keyCode == 87) {
        box.style.backgroundColor = "white";
    } else if (e.keyCode == 71) {
        box.style.backgroundColor = "green";
    } else if (e.keyCode == 89) {
        box.style.backgroundColor = "yellow";
    } else if (e.keyCode == 66) {
        box.style.backgroundColor = "blue";
    } else if (e.keyCode == 82) {
        box.style.backgroundColor = "red";
    } else if (e.keyCode == 80) {
        box.style.backgroundColor = "purple";
    }
});