for (var i = 0; i < 5; i++) {
    var myH2 = document.createElement('h2');

    myH2.textContent = 'This is an h2 header';

    myH2.style.fontSize = '20px';
    myH2.style.fontWeight = 'lighter';
    myH2.style.fontFamily = 'sans-serif';
    myH2.style.color = 'cornflowerblue';

    myH2.classList.add('border');

    document.body.append(myH2);
}