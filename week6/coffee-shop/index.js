var coffee = document.getElementById("quantity1");
var icedCoffee = document.getElementById("quantity2");
var tea = document.getElementById("quantity3");
var bagel = document.getElementById("quantity4");
var muffin = document.getElementById("quantity5");
var parfait = document.getElementById("quantity6");
var cookies = document.getElementById("quantity7");
var salad = document.getElementById("quantity8");

var coffeePrice = 2;
var icedCoffeePrice = 2;
var teaPrice = 1.75;
var bagelPrice = 2.5
var muffinPrice = 2.3
var parfaitPrice = 2.15
var cookiePrice = 1
var saladPrice = 4.75

var button = document.getElementById("button");

button.addEventListener("click", function(e) {
    e.preventDefault();

    var totalItems = 0;
    var totalPrices = 0;

    var totalAmount = document.getElementById("totalAmount");
    var totalPrice = document.getElementById("totalPrice");

    if (coffee.value > 0 || icedCoffee.value > 0 || tea.value > 0 || bagel.value > 0 || muffin.value > 0 || parfait.value > 0 || cookies.value > 0 || salad.value > 0) {
        
        totalItems += parseInt(coffee.value) + parseInt(icedCoffee.value) + parseInt(tea.value) + parseInt(bagel.value) + parseInt(muffin.value) + parseInt(parfait.value) + parseInt(cookies.value) + parseInt(salad.value);

        totalPrices += (parseFloat(coffeePrice * coffee.value)) + (parseFloat(icedCoffeePrice * icedCoffee.value)) + (parseFloat(teaPrice * tea.value)) + (parseFloat(bagelPrice * bagel.value)) + (parseFloat(muffinPrice * muffin.value)) + (parseFloat(parfaitPrice * parfait.value)) + (parseFloat(cookiePrice * cookies.value)) + (parseFloat(saladPrice * salad.value));
    } 
    
    totalAmount.textContent = totalItems;
    totalPrice.textContent = totalPrices;
});