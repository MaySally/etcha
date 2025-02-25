// Function to generate a random RGB color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // Random red value between 0 and 255
    const g = Math.floor(Math.random() * 256); // Random green value between 0 and 255
    const b = Math.floor(Math.random() * 256); // Random blue value between 0 and 255
    return `rgb(${r}, ${g}, ${b})`; // Return the RGB color in string format
}

function CreateSixteenDivs() {
    const container = document.querySelector('.etch-container');

            // Loop to create 16 divs inside the container
            for (let i = 0; i < 256; i++) {
                const div = document.createElement('div');
                // Add a dynamic class name like div-1, div-2, ..., div-16
                div.classList.add('gridDiv');
                container.appendChild(div);
                div.id = `div-${i}`;

                div.addEventListener('mouseover', function() {
                    div.style.backgroundColor = getRandomColor(); // Change color on hover
                });
            }
}

CreateSixteenDivs();

