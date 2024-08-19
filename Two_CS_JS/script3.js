document.getElementById('user-form').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Get the values from the input fields
    var name = document.getElementById('name').value;
    var color = document.getElementById('color').value;
    
    // Generate the output message
    var outputMessage = 'Hello, ' + name + '! Your favorite color is ' + color + '.';
    
    // Update the output div with the message
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = outputMessage;
    
    // Change the background color of the output div based on the user's input
    outputDiv.style.backgroundColor = color;
});
