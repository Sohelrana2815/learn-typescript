{
  // utility types

  // Pick

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type NameAge = Pick<Person, "name" | "age">;

  // Omit
  type ContactInfo = Omit<Person, "name" | "age">;

  // Required
  type PersonRequired = Required<Person>;

  // Partial
  type PersonPartial = Partial<Person>;

  // ReadOnly

  type PersonReadOnly = Readonly<Person>;

  const person1: PersonReadOnly = {
    name: "Mr.Y",
    age: 20,
    contactNo: "017",
  };

  // person1.name = "Ms.X";

  // Record

  // type MyObj = {
  //   a: string;
  //   b: string;
  // };

  type MyObj = Record<string, number>;

  // const EmptyObj: {} = {};
  const EmptyObj: Record<string, unknown> = {};

  // const obj1: MyObj = {
  //   a: "aa",
  //   b: "bb",
  //   c: "cc",
  //   d: "dd",
  // };

  //
}
