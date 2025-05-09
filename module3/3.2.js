"use strict";
{
    // oop - inheritance
    class Person {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfHours) {
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }
    }
    // Student class
    // I will get all the common properties form Parent class
    class Student extends Person {
        constructor(id, name, age, address) {
            super(name, age, address);
            this.id = id;
        }
    }
    const student1 = new Student(1, "Yamin", 20, "Dhaka");
    //   student1.
    // Teacher class
    class Teacher extends Person {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
        takeClass(numOfClass) {
            console.log(`${this.name} will take ${numOfClass} classes`);
        }
    }
    const teacher1 = new Teacher("Y", 30, "Dhaka", "Professor");
    //
}
