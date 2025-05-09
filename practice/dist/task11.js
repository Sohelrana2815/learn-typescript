"use strict";
{
    // Task 11: Unknown Type
    // Objective: Handle different types with the unknown type.
    // Instructions:
    // Write a function processData(data: unknown) that:
    // Checks if data is a string and returns the uppercased version.
    // If data is a number, returns the square of it.
    function processData(data) {
        if (typeof data === "string") {
            return data.toUpperCase();
        }
        else if (typeof data === "number") {
            return data * data;
        }
        else {
            return undefined;
        }
    }
    //   console.log(processData("sohelrana"))
    //   console.log(processData(10));
    //   console.log(processData(null));
    //   console.log(processData(true));
    //   console.log(processData({ value: 10 }));
    //
}
