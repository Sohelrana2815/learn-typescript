{
  // generic type

  type GenericArray<T> = Array<T>;

  //   const rollNumbers: number[] = [2, 4, 6, 8];
  const rollNumbers: GenericArray<number> = [2, 4, 6, 8];
  //   const mentors: string[] = ["sohel", "yamin", "juel"];
  const mentors: GenericArray<string> = ["sohel", "yamin", "juel"];
  //   const boolArray: boolean[] = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  interface User {
    name: string;
    age: number;
  }

  const user: GenericArray<User> = [
    {
      name: "Sohel",
      age: 20,
    },
    {
      name: "Rana",
      age: 21,
    },
  ];

  const add = (x: number, y: number) => x + y;
  add(30, 20);

  // generic tuple
  type GenericTuple<X, Y> = [X, Y];

  // String array
  const manush: GenericTuple<string, string> = ["Mr. X", "Ms. Y"];
  const UserWithID: GenericTuple<number, { name: string; email: string }> = [
    123,
    { name: "Sohel", email: "s@gmail.com" },
  ];
}
