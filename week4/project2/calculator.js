const answer = document.getElementById("answer");

const addOne = document.getElementById("addOne");
const addTwo = document.getElementById("addTwo");
const subtractOne = document.getElementById("subtractOne");
const subtractTwo = document.getElementById("subtractTwo");
const multiplyOne = document.getElementById("multiplyOne");
const multiplyTwo = document.getElementById("multiplyTwo");

const addButton = document.getElementById("addButton");
const subtractButton = document.getElementById("subtractButton");
const multiplyButton = document.getElementById("multiplyButton");

addButton.addEventListener("click", function() {
    var result = parseFloat(addOne.value) + parseFloat(addTwo.value);
    answer.innerHTML = result;
});

subtractButton.addEventListener("click", function() {
    var result = parseFloat(subtractOne.value) - parseFloat(subtractTwo.value);
    answer.innerHTML = result;
});

multiplyButton.addEventListener("click", function() {
    var result = parseFloat(multiplyOne.value) * parseFloat(multiplyTwo.value);
    answer.innerHTML = result;
});