{
    // Task 6: Spread and Rest Operators, Destructuring
    // Objective: Write a function that uses the rest operator for variable-length arguments.
    // Instructions:
    // Create a function that takes multiple numeric arguments (using the rest operator) and returns the sum of all arguments.
    //   const arr1 = [1, 2, 3];
    //   const arr2 = [...arr1, 4, 5];
    //   const arr3 = [0, ...arr1];
    //   console.log(arr3);
    //   function sum(a: number, b: number, c: number): number {
    //     return a + b + c;
    //   }
    //   const numbers = [1, 2, 3];
    //   const result = sum(...numbers);
    //   console.log(result);
    //   function sum(...numbers) {
    //     return numbers.reduce((acc, num) => acc + num, 0);
    //   }
    //   console.log(sum(1, 2, 3));
    //   console.log(sum(1, 2, 3, 4, 5, 6));
    //   console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));
    // Task 6
    var sum = function () {
        var numbers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numbers[_i] = arguments[_i];
        }
        var result = numbers.reduce(function (acc, num) { return acc + num; }, 0);
        return result;
    };
    console.log(sum(1, 2, 3, 4, 5, 6));
    //
}
