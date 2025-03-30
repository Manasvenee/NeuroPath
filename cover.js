// JavaScript for Cover Page (cover.html)
document.addEventListener("DOMContentLoaded", function () {
    const quotes = [
        "The quick brown fox jumps over the lazy dog.",
        "Coding is fun and challenging at the same time.",
        "Practice makes perfect, keep on typing.",
        "Speed and accuracy lead to mastery in typing.",
        "Never give up, keep improving your skills."
    ];

    let currentQuoteIndex = 0;
    const quoteDisplay = document.getElementById("quote-display");
    const quoteInput = document.getElementById("quote-input");
    const submitBtn = document.getElementById("submit-btn");
    const congratsScreen = document.getElementById("congratulations-screen");

    // Function to display the current quote
    function displayQuote() {
        quoteDisplay.innerText = quotes[currentQuoteIndex];
        quoteInput.value = ""; // Clear the input field
    }

    // Event listener for the Submit button
    submitBtn.addEventListener("click", function () {
        const userInput = quoteInput.value.trim();
        const words = userInput.split(" ");
        const correctWords = quotes[currentQuoteIndex].split(" ").slice(0, words.length);

        // Check if the typed input matches the current quote
        if (words.join(" ") === correctWords.join(" ")) {
            currentQuoteIndex++;
            if (currentQuoteIndex >= quotes.length) {
                congratsScreen.classList.remove("hidden");
                quoteDisplay.innerText = "Congratulations! You completed the challenge!";
                quoteInput.style.display = 'none';
                submitBtn.style.display = 'none';
            } else {
                displayQuote();
            }
        } else {
            quoteInput.value = ""; // Clear the input field if incorrect
        }
    });

    // Initialize the game with the first quote
    displayQuote();
});
