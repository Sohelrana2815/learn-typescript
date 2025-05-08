{
    // Task 5: Function Type
    // Objective: Write a function that reverses a string.
    // Instructions:
    // Write a function reverseString that:
    // Takes a single string argument.
    // Returns the string in reverse order.
    // Example:
    // Input: "hello"
    // Output: "olleh"
    function reverseString(str) {
        var reversed = "";
        for (var i = str.length - 1; i >= 0; i--) {
            reversed += str[i]; // Index of the string
        }
        return reversed;
    }
    console.log(reverseString("hello"));
    //
}
//  h e l l o
//  0 1 2 3 4
