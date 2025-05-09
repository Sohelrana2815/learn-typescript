"use strict";
// Destructuring
{
    // Object destructuring
    const user = {
        id: 727,
        name: {
            firstName: "Sohel",
            middleName: "Rana",
            lastName: "Moon",
        },
        contactNo: "0190000000",
        address: "Uganda",
    };
    // Destructuring
    const { contactNo, name: { middleName }, } = user;
    // Array destructuring
    const myFriends = ["chandler", "joey", "ross", "rachel", "monica", "phoebe"];
    const [, , bestFriend, ...rest] = myFriends;
}
