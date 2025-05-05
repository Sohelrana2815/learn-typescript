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
  type RollNumber = number;

  // js --> object , array -> object function -> object

  type Roll1 = number[];

  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber1: Roll2 = [1, 2, 3];
  // 0 1 2 // -> number type

  const user1: UserWithRole2 = {
    name: "Sohel",
    age: 15,
    role: "student",
  };

  type Add1 = (num1: number, num2: number) => number;

  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add: Add2 = (num1, num2) => num1 + num2;
}
