// Trying to call the function before its declaration will result in an error
try {
    console.log(multiplyNumbers(3, 5)); // Error: multiplyNumbers is not a function
} catch (e) {
    console.error(e);
}

// Function expression
var multiplyNumbers = function(num1, num2) {
    return num1 * num2;
};

// Calling the function after its declaration works as expected
console.log(multiplyNumbers(3, 5)); // Output: 15
