var box = document.querySelector(".red-box");

box.addEventListener("mousemove", function(event) {
    box.innerHTML = "X: " + event.x + "<br/>" + "Y: " + event.y;
});