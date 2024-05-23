{
    try {
        console.log(letVariable); // ReferenceError: Cannot access 'letVariable' before initialization
    } catch (e) {
        console.error(e);
    }

    let letVariable = 'This is a let variable';

    // Log the value after declaration and assignment
    console.log(letVariable); // Output: This is a let variable
}
