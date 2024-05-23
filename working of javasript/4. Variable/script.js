{
    // Attempt to log the values before declaration
    try {
        console.log(letVariable); // ReferenceError: Cannot access 'letVariable' before initialization
    } catch (e) {
        console.error(e);
    }

    try {
        console.log(varVariable); // Output: undefined
    } catch (e) {
        console.error(e);
    }

    try {
        console.log(constVariable); // ReferenceError: Cannot access 'constVariable' before initialization
    } catch (e) {
        console.error(e);
    }

    // Declare and assign values
    let letVariable = 'This is a let variable';
    var varVariable = 'This is a var variable';
    const constVariable = 'This is a const variable';

    // Log the values after declaration
    console.log(letVariable); // Output: This is a let variable
    console.log(varVariable); // Output: This is a var variable
    console.log(constVariable); // Output: This is a const variable
}
