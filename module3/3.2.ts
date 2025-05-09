{
  // oop - inheritance

  class Person {
    // Common property from Student and Teacher
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }
  }

  // Student class

  // I will get all the common properties form Parent class

  class Student extends Person {
    id: number;
    constructor(id: number, name: string, age: number, address: string) {
      super(name, age, address);
      this.id = id;
    }
  }

  const student1 = new Student(1, "Yamin", 20, "Dhaka");

//   student1.
  // Teacher class
  class Teacher extends Person {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numOfClass: number) {
      console.log(`${this.name} will take ${numOfClass} classes`);
    }
  }

  const teacher1 = new Teacher("Y", 30, "Dhaka", "Professor");

  //
}
