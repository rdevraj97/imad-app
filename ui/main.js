var button = documentgetElementById('counter');
button.onlick = function () {
    // make requets to counter endpoint
    
    // capture response and store in a variable
    
    
    
    // render the variable in the correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
}

