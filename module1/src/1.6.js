"use strict";
{
    // Learning function
    // Normal function
    // Arrow function
    function add(num1, num2) {
        return num1 + num2;
    }
    add(10, 20);
    ("✅");
    // add(10,'10'); "❌"
    const addArrow = (num1, num2) => num1 + num2;
    // object --> function --> method
    const poorUser = {
        name: "Sohel",
        balance: 0,
        addBalance(balance) {
            return `My new balance is : ${this.balance + balance}`;
        },
    };
    // Map always return an array
    const arr = [10, 20, 30];
    const newArray = arr.map((element) => element * element);
}
