// Function to validate URLs using regex
function validateURL(url) {
    // Regular expression to match valid URLs
    const regex = /^(https?:\/\/)[\w.-]+\.[a-z]+$/i;
    
    // Test the URL against the regex
    if (regex.test(url)) {
        console.log("The URL is valid.");
    } else {
        console.log("The URL is not valid.");
    }
}

// Example URLs to test
const urls = [
    "http://example.com",
    "https://example.com",
    "http://example",
    "ftp://example.com",
    "http://example.c",
    "http://example.com/path"
];

// Test each URL
urls.forEach(url => {
    console.log(`Testing URL: ${url}`);
    validateURL(url);
});
