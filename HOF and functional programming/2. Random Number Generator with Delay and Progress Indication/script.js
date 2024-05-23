// Delay in milliseconds (modifiable)
let delay = 3000;

// Countdown start value (in seconds)
let countdown = delay / 1000;

// Function to generate a random number
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
}

// Function to display the countdown and generate the random number
function displayCountdownAndGenerateNumber() {
    const messageDiv = document.getElementById('message');
    
    // Update the countdown message every second
    const intervalId = setInterval(() => {
        if (countdown > 0) {
            messageDiv.textContent = `Time remaining: ${countdown} second(s)`;
            countdown--;
        } else {
            clearInterval(intervalId); // Stop the countdown interval
        }
    }, 1000);
    
    // Generate the random number after the specified delay
    setTimeout(() => {
        const randomNumber = generateRandomNumber();
        messageDiv.textContent = `Generated random number: ${randomNumber}`;
    }, delay);
}

// Start the process
displayCountdownAndGenerateNumber();
