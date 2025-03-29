const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreboard = document.getElementById('scoreboard');

let isTracing = false; // Whether the user is currently tracing
let tracedPoints = []; // Stores points traced by the user
let currentShape = 0; // Tracks the current shape being traced
const shapes = ['circle', 'triangle', 'square']; // List of shapes

// Function to draw a shape based on its type
function drawShape(shape) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 5;

    if (shape === 'circle') {
        ctx.beginPath();
        ctx.arc(250, 250, 100, 0, Math.PI * 2);
        ctx.stroke();
    } else if (shape === 'triangle') {
        ctx.beginPath();
        ctx.moveTo(250, 150); // Top vertex
        ctx.lineTo(150, 350); // Bottom-left vertex
        ctx.lineTo(350, 350); // Bottom-right vertex
        ctx.closePath(); // Close the triangle
        ctx.stroke();
    } else if (shape === 'square') {
        ctx.strokeRect(150, 150, 200, 200); // Draw square
    }
}

// Function to calculate accuracy based on traced points
function calculateAccuracy(shape) {
    let totalPoints = tracedPoints.length;
    let correctPoints = 0;

    for (let point of tracedPoints) {
        const x = point.x;
        const y = point.y;

        if (shape === 'circle') {
            const dx = x - 250;
            const dy = y - 250;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (Math.abs(distance - 100) <= 10) correctPoints++; // Within tolerance
        } else if (shape === 'triangle') {
            if (
                (y >= (x - 100) && y >= (-x + 600)) && 
                y <= 350
            ) correctPoints++; // Inside triangle bounds
        } else if (shape === 'square') {
            if (x >= 150 && x <= 350 && y >= 150 && y <= 350)
                correctPoints++; // Inside square bounds
        }
    }

    return Math.round((correctPoints / totalPoints) * 100); // Return percentage accuracy
}

// Event listeners for tracing functionality
canvas.addEventListener('mousedown', () => {
    isTracing = true;
});

canvas.addEventListener('mouseup', () => {
    isTracing = false;

    // Calculate accuracy and show scoreboard when tracing is done
    const accuracy = calculateAccuracy(shapes[currentShape]);
    scoreboard.style.display = 'block';
    scoreboard.innerHTML = `You traced the ${shapes[currentShape]} with ${accuracy}% accuracy!`;

    // Move to the next shape after a delay
    setTimeout(() => {
        currentShape++;
        if (currentShape < shapes.length) {
            tracedPoints = []; // Reset traced points for the next shape
            scoreboard.style.display = 'none'; // Hide scoreboard for next round
            drawShape(shapes[currentShape]); // Draw the next shape
        } else {
            scoreboard.innerHTML += `<br>Game Over! You completed all shapes!`;
        }
    }, 2000);
});

canvas.addEventListener('mousemove', (event) => {
    if (isTracing) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        tracedPoints.push({ x, y }); // Save traced point

        // Draw user's trace on canvas
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
    }
});

// Start with the first shape
drawShape(shapes[currentShape]);
