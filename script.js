const textInput = document.getElementById('text-input');
const dynamicText = document.getElementById('dynamic-text');
const widthSlider = document.getElementById('width-slider');

const uiElements = document.querySelectorAll('.header-container, .input-container, .info-box');
let uiVisible = true;

textInput.addEventListener('input', (event) => {
    const inputText = event.target.value;
    dynamicText.innerHTML = ''; // Clear previous content

    inputText.split('').forEach((char) => {
        // Create the bounding box container for each letter
        const letterContainer = document.createElement('div');
        letterContainer.classList.add('letter-container');
        
        // Create the letter container
        const letterDiv = document.createElement('div');
        letterDiv.classList.add('letter');
        letterDiv.setAttribute('data-char', char.trim() ? char : 'space'); // Add attribute for spaces

        // Create the first font layer
        const font1Span = document.createElement('span');
        font1Span.classList.add('font1');
        font1Span.textContent = char;

        // Create the second font layer
        const font2Span = document.createElement('span');
        font2Span.classList.add('font2');
        font2Span.textContent = char;

        // Append the font layers to the letter container
        letterDiv.appendChild(font2Span); // Background layer
        letterDiv.appendChild(font1Span); // Foreground layer

        // Add the letter container to the bounding box container
        letterContainer.appendChild(letterDiv);

        // Add the bounding box container to the dynamic text container
        dynamicText.appendChild(letterContainer);
    });
});



// Function to update letter container width
widthSlider.addEventListener('input', (event) => {
    const newWidth = event.target.value + 'px';
    const letterContainers = document.querySelectorAll('.letter-container');
    letterContainers.forEach(container => {
        container.style.width = newWidth;
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'F1') {
        event.preventDefault(); // Prevent default F1 action (like opening help)
        uiVisible = !uiVisible; // Toggle the visibility state

        uiElements.forEach(element => {
            element.style.visibility = uiVisible ? 'visible' : 'hidden'; // Show or hide UI
        });
    }
});