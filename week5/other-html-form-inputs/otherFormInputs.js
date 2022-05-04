const form = document.myForm;

const check1 = document.getElementById("checkBox1");
const check2 = document.getElementById("checkBox2");
const check3 = document.getElementById("checkBox3");

form.addEventListener("submit", (event) => {

    var myArray = [];

    if (checkBox1.checked) {
        myArray.push(check1.value);
    }

    if (checkBox2.checked) {
        myArray.push(check2.value);
    }

    if (checkBox3.checked) {
        myArray.push(check3.value);
    }

    console.log(myArray);

    alert("First name: " + form.firstName.value + "\n" + "Last name: " + form.lastName.value + "\n" + "Age: " + form.age.value + "\n" + "Likes pizza?: " + form.questionOne.value + "\n" + "Likely to eat pizza?: " + form.questionTwo.value + "\n" + "Favorite toppings?: " + myArray);
});