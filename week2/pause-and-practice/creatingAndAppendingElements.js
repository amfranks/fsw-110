var myH1 = document.createElement('h1');
myH1.textContent = 'Welcome to my JS site';
document.body.appendChild(myH1);

var myParagraph = document.createElement('p');
myParagraph.textContent = 'All of this was created with Javascript';
document.body.appendChild(myParagraph);

var myOrderedList = document.createElement('ol'); // Creates an ordered list

var listItemOne = document.createElement('li'); 
var listItemTwo = document.createElement('li'); // Creates 3 list items
var listItemThree = document.createElement('li');

listItemOne.textContent = 'Basketball';
listItemTwo.textContent = 'Baseball'; // Adds text to list items
listItemThree.textContent = 'Football';

myOrderedList.appendChild(listItemOne); 
myOrderedList.appendChild(listItemTwo); // Adds list items to ordered list
myOrderedList.appendChild(listItemThree);

document.body.appendChild(myOrderedList); // Adds ordered list to document body