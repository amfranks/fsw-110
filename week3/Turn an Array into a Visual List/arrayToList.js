var myH1 = document.createElement("h1");
myH1.textContent = "Hello World"; // This creates, and appends an h1 to index.html
document.body.appendChild(myH1);

for (var i = 0; i < 10; i++) {
    var myH1 = document.createElement("h1");
    myH1.textContent = "Hello World"; 

    myH1.style.color = "red";
    myH1.style.padding = "5px"; // This adds styling to the h1 elements
    myH1.style.fontSize = "20px";

    document.body.appendChild(myH1);
}

const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];

if (names.length >= 1) {
    document.body.append(names[0]);
}

for (var i = 1; i < names.length; i++) {
    document.body.append(", " + names[i]); 
}