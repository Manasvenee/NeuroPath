document.addEventListener("DOMContentLoaded", () => {
    const quotes = [
        "Knowledge is power.",
        "Practice makes perfect.",
        "Believe in yourself."
    ];

    let currentQuoteIndex = 0;
    const quoteDisplay = document.getElementById("quote-display");
    const quoteInput = document.getElementById("quote-input");
    const submitBtn = document.getElementById("submit-btn");
    const errorMessage = document.getElementById("error-message");
    const congratsScreen = document.getElementById("congratulations-screen");
    const contentSection = document.querySelector(".content");

    function displayQuote() {
        quoteDisplay.innerText = quotes[currentQuoteIndex];
    }

    submitBtn.addEventListener("click", () => {
        const userInput = quoteInput.value.trim();
        if (userInput === quotes[currentQuoteIndex]) {
            currentQuoteIndex++;
            if (currentQuoteIndex >= quotes.length) {
                congratsScreen.classList.remove("hidden");
                contentSection.classList.add("hidden");
            } else {
                displayQuote();
                quoteInput.value = "";
                errorMessage.classList.add("hidden");
            }
        } else {
            errorMessage.classList.remove("hidden");
        }
    });

    displayQuote();
});
