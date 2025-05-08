"use strict";
{
    function describeAdmin(user) {
        return `Admin User: Name - ${user.name}, Email - ${user.email}, Admin Level - ${user.adminLevel} `;
    }
    const admin1 = {
        name: "Sohel",
        email: "s@gmail.com",
        adminLevel: 5,
    };
    console.log(describeAdmin(admin1));
    //
}
