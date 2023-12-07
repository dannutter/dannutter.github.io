// Typing animation
const terminalText = "./display_cv.sh";
let index = 0;

function typeText() {
    const terminalElement = document.getElementById("user-header");
    if (index < terminalText.length) {
        terminalElement.innerHTML += terminalText.charAt(index);
        index++;
        setTimeout(typeText, 100); // Adjust the delay for typing speed
    } else {
        // After typing is complete, display the loading bar
        displayProgressBar();
    }
}

function displayProgressBar() {
    const progressBar = document.getElementById("progress-bar-container");
    progressBar.style.display = "inline-block";

    // Simulate loading with a timeout
    simulateLoading();
    let progress = 0;
}

function simulateLoading() {
    const progressBar = document.getElementById("progress-bar");
    const loadingText = document.getElementById("loading-text");
    
    let progress = 0;
    const interval = setInterval(() => {
        progressBar.textContent = `[${"#".repeat(progress/5+1)}${":".repeat(20-(progress/5+1))}]`;
        progress += 5;
        loadingText.textContent = `${progress}%`;
        if (progress >= 100) {
            clearInterval(interval);
            displayContent();
        }
    }, 140); //Delay for loading simulation
}

function displayContent() {
    const contentElement = document.getElementById("content");
    contentElement.style.display = "block"; // Display the content
}

// Toggle between light and dark mode
function toggleMode() {
    const body = document.body;
    const terminal = document.getElementById("terminal");

    // Toggle the body class for light/dark mode
    body.classList.toggle("light-mode");
    body.classList.toggle("dark-mode");

    // Toggle the terminal class for dark mode border color
    terminal.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
}

// Call the typing function when the page loads
window.onload = typeText;
