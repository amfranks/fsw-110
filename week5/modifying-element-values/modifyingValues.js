const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const button = document.getElementById("button");

button.addEventListener("click", function() {
    alert(input1.value + ", " + input2.value + ", " + input3.value);
});