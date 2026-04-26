// 1. Select the elements from the HTML
const inputField = document.getElementById('messageInput');
const postButton = document.getElementById('postBtn');
const outputDisplay = document.getElementById('outputBox');

// 2. Define the function
function updateAnnouncement() {
    // Get the value from the input box
    const message = inputField.value;

    // Put that text inside the outputBox
    outputDisplay.innerText = message;

    // Optional: Clear the input box after posting
    inputField.value = "";
}

// 3. Trigger the function when the button is clicked
postButton.addEventListener('click', updateAnnouncement);
