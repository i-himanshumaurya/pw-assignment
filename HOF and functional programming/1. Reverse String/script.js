// Function to reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Input string
const input = "Hello, World!";

// Function to reverse the string after a delay of 2 seconds
function reverseAfterDelay(input) {
    setTimeout(() => {
        const reversed = reverseString(input);
        console.log(reversed);
    }, 2000); // 2000 milliseconds = 2 seconds
}

// Call the function
reverseAfterDelay(input);
