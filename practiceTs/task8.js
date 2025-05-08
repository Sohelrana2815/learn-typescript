{
    function describeAdmin(user) {
        return "Admin User: Name - ".concat(user.name, ", Email - ").concat(user.email, ", Admin Level - ").concat(user.adminLevel, " ");
    }
    var admin1 = {
        name: "Sohel",
        email: "s@gmail.com",
        adminLevel: 5,
    };
    console.log(describeAdmin(admin1));
    //
}
