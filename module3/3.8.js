"use strict";
{
    //  Polymorphism
    class Person {
        getSleep() {
            console.log(`I am sleeping for 8 hours per day`);
        }
    }
    class Student extends Person {
        getSleep() {
            console.log(`I am sleeping for 7 hours per day`);
        }
    }
    class Developer extends Person {
        getSleep() {
            console.log(`I am sleeping for 6 hours per day`);
        }
    }
    const getSleepingHours = (param) => {
        param.getSleep();
    };
    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();
    getSleepingHours(person1);
    getSleepingHours(person2);
    getSleepingHours(person3);
    class Shape {
        getArea() {
            return 0;
        }
    }
    // Circle area : pi * (r * r)
    class Circle extends Shape {
        constructor(radius) {
            super();
            // Initialize
            this.radius = radius;
        }
        getArea() {
            return Math.PI * this.radius * this.radius;
        }
    }
    // Rectangle area: height * width
    class Rectangle extends Shape {
        constructor(height, width) {
            super();
            this.height = height;
            this.width = width;
        }
        getArea() {
            return this.height * this.width;
        }
    }
    const getShapeArea = (param) => {
        console.log(param.getArea());
    };
    const shape1 = new Shape();
    const circleArea1 = new Circle(10);
    const rectangleArea1 = new Rectangle(10, 20);
    getShapeArea(shape1);
    getShapeArea(circleArea1);
    getShapeArea(rectangleArea1);
    //
}
