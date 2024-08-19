// Variables
function showVariable() {
    var message = "Hey, this is a JavaScript variable!";
    document.getElementById('variable-result').innerText = message;
}

// Functions
function calculateSum() {
    var num1 = 5;
    var num2 = 10;
    var sum = num1 + num2;
    document.getElementById('function-result').innerText = "The sum of 5 and 10 is: " + sum;
}

// Events
function changeColor() {
    document.getElementById('event-box').style.backgroundColor = '#ffcc00';
}

function resetColor() {
    document.getElementById('event-box').style.backgroundColor = '#ddd';
}

// Loops
function generateList() {
    var list = "";
    for (var i = 1; i <= 5; i++) {
        list += "<li>Item " + i + "</li>";
    }
    document.getElementById('loop-result').innerHTML = list;
}

// Arrays
function displayArray() {
    var fruits = ["Apple", "Banana", "Cherry", "Date"];
    document.getElementById('array-result').innerText = "Array contains: " + fruits.join(", ");
}

// DOM Manipulation
function changeContent() {
    document.getElementById('dom-result').innerText = "The content has been changed!";
}
