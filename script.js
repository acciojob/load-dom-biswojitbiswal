//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const message = document.createElement('div');
    message.textContent = "DOM load success"; // Set the text content
            
    document.body.appendChild(message);
});