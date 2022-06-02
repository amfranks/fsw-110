const form = document.getElementById("myForm");

var total = 0;

form.addEventListener("submit", function(e) {
    e.preventDefault();

    var listItem = document.createElement("li"); // Creates list item

    var inputVal = document.getElementById("addNewTask").value; // Grabs text from form input
    var inputVal2 = document.getElementById("addNewTask2").value; 

    var text = document.createTextNode(inputVal); // Creates text node from input value
    var text2 = document.createTextNode(" - "); 
    var text3 = document.createTextNode("$" + inputVal2); 

    listItem.style.marginBottom = "20px";
    listItem.appendChild(text); // Appends text to list item
    listItem.appendChild(text2);
    listItem.appendChild(text3);

    var deleteButton = document.createElement("button"); // Creates delete button
    deleteButton.textContent = "Delete";
    listItem.appendChild(deleteButton); // Appends delete button to list items

    deleteButton.style.padding = "5px";
    deleteButton.style.borderRadius = "10px";
    deleteButton.style.borderStyle = "none";
    deleteButton.style.backgroundColor = "red"; // Styles button
    deleteButton.style.color = "white";
    deleteButton.transition = "all .2s";
    deleteButton.style.marginLeft = "20px";

    document.getElementById("unorderedList").appendChild(listItem); // Appends list items to unordered list

    deleteButton.onclick = function() {
        var listItemPrice = inputVal2;

        listItem.style.display = "none";
        total -= parseFloat(listItemPrice);
        displayTotal.textContent = "Total: $" + total;
    }

    var displayTotal = document.getElementById("total");
    total += parseFloat(inputVal2);
    displayTotal.textContent = "Total: $" + total;

    document.getElementById("myForm").reset();
});