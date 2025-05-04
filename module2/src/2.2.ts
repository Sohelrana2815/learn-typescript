{
  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  type UserWithRole1 = User1 & { role: string }; // Intersection

  interface UserWithRole2 extends User1 {
    role: string;
  }
  //   type RollNumber = number;

  const user1: UserWithRole2 = {
    name: "Sohel",
    age: 15,
    role: "student",
  };
}
