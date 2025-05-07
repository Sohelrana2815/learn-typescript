"use strict";
{
    // mapped types
    const arrayOfNumbers = [1, 2, 3, 4];
    //   const arrayOfStrings: string[] = ["1", "2", "3", "4"];
    const arrayOfStrings = arrayOfNumbers.map((number) => number.toString());
    console.log(arrayOfStrings);
    //
}
