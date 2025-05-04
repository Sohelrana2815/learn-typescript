var _a, _b;
{
    // ternary operator || optional chaining || nullish coalescing operator
    var age = 20;
    if (age > 18) {
        console.log("adult");
    }
    else {
        console.log("not adult");
    }
    var isAdult = age >= 18 ? "adult" : "not adult";
    // console.log({ isAdult });
    // nullish coalescing operator
    // null / undefined ---> decision making
    var isAuthenticated = "";
    var result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    var result2 = isAuthenticated ? isAuthenticated : "Guest";
    var user = {
        name: "Sohel",
        address: {
            city: "Dhaka",
            road: "Awesome Road",
            presentAddress: "Cha",
        },
    };
    var permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No permanent address.";
    console.log({ permanentAddress: permanentAddress });
    //
}
