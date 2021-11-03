console.log("My favorite food is chicken wings.")

const button = document.querySelector('button');

button.addEventListener('mousedown', function() {
    button.innerText = 'Changed';
    document.body.style.backgroundColor = 'lightBlue';
});