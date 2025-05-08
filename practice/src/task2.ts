{
  //  Functions, Optional and literal types

  function userInfo(
    name: string,
    age: number,
    role?: "admin" | "user" | "guest"
  ): void {
    console.log(`name: ${name}`);
    console.log(`age: ${age}`);
    if (role) {
      console.log(`role: ${role}`);
    } else {
      console.log("Role not provided");
    }
  }
  userInfo("Rana", 15, "admin");
  userInfo("yamin", 10, "user");
  userInfo("sohel", 20);

  //
}
