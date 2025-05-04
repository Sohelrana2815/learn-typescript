{
  // Type Alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "Sohel",
    age: 20,
    gender: "Male",
    contactNo: "019000000",
    address: "Cha",
  };

  const student2: Student = {
    name: "Rana",
    age: 20,
    gender: "male",
    address: "dhk",
  };

  const student3: Student = {
    name: "Moon",
    age: 20,
    gender: "male",
    address: "savar",
  };

  type UserName = string;
  type IsAdmin = boolean;
  type Add = (num1: number, num2: number) => number;

  const userName: UserName = "Sohel Rana";
  const isAdmin: IsAdmin = true;

  const add: Add = (num1, num2) => num1 + num2;
}
