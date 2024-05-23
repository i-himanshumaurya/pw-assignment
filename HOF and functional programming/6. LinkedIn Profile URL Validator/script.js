// Function to validate LinkedIn profile URLs using regex
function validateLinkedInURL(url) {
    // Regular expression to match valid LinkedIn profile URLs
    const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{4,29}[a-zA-Z0-9]$/;
    
    // Test the URL against the regex
    if (regex.test(url)) {
        console.log(`The URL "${url}" is a valid LinkedIn profile URL.`);
    } else {
        console.log(`The URL "${url}" is not a valid LinkedIn profile URL.`);
    }
}

// Example URLs to test
const urls = [
    "https://www.linkedin.com/in/john_doe",
    "https://www.linkedin.com/in/jane-smith123",
    "https://www.linkedin.com/in/invalid_url/",
    "https://www.linkedin.com/in/short",
    "https://www.linkedin.com/in/this-is-a-very-long-profile-id-that-exceeds-thirty-characters",
    "http://www.linkedin.com/in/missing-https",
    "https://www.linkedin.com/in/invalid_chars!*@",
    "https://www.linkedin.com/in/valid-url-123"
];

// Test each URL
urls.forEach(url => {
    validateLinkedInURL(url);
});
