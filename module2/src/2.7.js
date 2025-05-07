"use strict";
{
    //   const person1: Owner2 = ""
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: "Sohel",
        age: 20,
        address: "dhk",
    };
    const car = {
        model: "Toyota 100",
        year: 2020,
    };
    const result1 = getPropertyValue(car, "model");
    //   obj[key]; // = 'Sohel'
    //   obj[key]; // = 20
    //
}
