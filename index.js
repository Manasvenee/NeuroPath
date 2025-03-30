// JavaScript for Main Page (index.html)
document.addEventListener("DOMContentLoaded", function () {
    const muteBtn = document.getElementById('mute-btn');

    // Toggle mute button functionality
    muteBtn.addEventListener('click', function() {
        // This will toggle mute state
        if (muteBtn.innerText === "🔇") {
            muteBtn.innerText = "🔊"; // Change to Unmute
            // Implement sound off here (if any sound is present in the game)
        } else {
            muteBtn.innerText = "🔇"; // Change to Mute
            // Implement sound on here (if any sound is present in the game)
        }
    });
});
