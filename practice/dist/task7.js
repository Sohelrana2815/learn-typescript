"use strict";
{
    // Task 7: Type Assertion and Narrowing
    // Objective: Write a function that behaves differently based on the input type.
    // Instructions:
    // Create a function that accepts a parameter of type string | number.
    // The function should:
    // Return the length if the input is a string.
    // Return the square if the input is a number.
    // type assertion
    let anything;
    anything = "Next level Web Development";
    anything = 1111;
    anything;
    anything;
    function assertion(input) {
        if (typeof input === "string") {
            return input.length;
        }
        else if (typeof input === "number") {
            return input * input;
        }
        else {
            return "Invalid input";
        }
    }
    console.log(assertion(10));
    //
}
