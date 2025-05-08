{
    //  Functions, Optional and literal types
    function userInfo(name, age, role) {
        console.log("name: ".concat(name));
        console.log("age: ".concat(age));
        if (role) {
            console.log("role: ".concat(role));
        }
        else {
            console.log("Role not provided");
        }
    }
    userInfo("Rana", 15, "admin");
    userInfo("yamin", 10, "user");
    userInfo("sohel", 20);
    //
}
