var myH1 = document.createElement('h1');
myH1.textContent = 'This is a basic website built in JavaScript'; // This creates, and appends an h1 element to index.html
document.body.appendChild(myH1);

var myNavbar = document.createElement('nav'); // This creates a navbar tag

var a1 = document.createElement('a');
var a2 = document.createElement('a'); // This creates 3 anchor tags
var a3 = document.createElement('a');

var link1 = document.createTextNode('Home');
var link2 = document.createTextNode('About'); // This creates text for the 3 anchor tags
var link3 = document.createTextNode('News');

a1.appendChild(link1);
a2.appendChild(link2); // This adds text to the 3 anchor tags
a3.appendChild(link3);

a1.href = '#';
a2.href = '#'; // This sets the hrefs for the 3 anchor tags
a3.href = '#';

a1.style.padding = '5px';
a2.style.padding = '5px';
a3.style.padding = '5px';

myNavbar.appendChild(a1);
myNavbar.appendChild(a2); // This adds the 3 anchor tags to the navbar
myNavbar.appendChild(a3);

document.body.appendChild(myNavbar); // This appends the navbar to the HTML

var myParagraph = document.createElement('p');
myParagraph.textContent = 'This is example text to fill out an HTML paragraph tag.'; // This creates, and appends a p element to index.html
document.body.appendChild(myParagraph);

var myList = document.createElement('ul'); // This creates an unordered list element

var listItem1 = document.createElement('li');
var listItem2 = document.createElement('li'); // This creates list items for our unordered list
var listItem3 = document.createElement('li');

listItem1.textContent = 'List item #1';
listItem2.textContent = 'List item #2'; // This adds text to our list items
listItem3.textContent = 'List item #3';

myList.appendChild(listItem1);
myList.appendChild(listItem2); // This adds our list items to our unordered list
myList.appendChild(listItem3);

document.body.appendChild(myList); // This appends our list to the document body

var myFooter = document.createElement('footer'); // This creates a footer

var exampleFooterText = document.createElement('p');
exampleFooterText.textContent = 'Contact information: exampleFooter@text.com'; // This creates and appends example text to the footer
myFooter.appendChild(exampleFooterText);

document.body.appendChild(myFooter); // This adds the footer to the HTML