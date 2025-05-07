"use strict";
{
    // function with generics
    const createArray = (param) => {
        return [param];
    };
    // It will take T type and return T type array
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const result1 = createArray("Bangladesh");
    // const resultWithGeneric = createArrayWithGeneric<string>("Bangladesh");
    const resultWithGeneric = createArrayWithGeneric(true);
    const resGenericObj = createArrayWithGeneric({
        id: 1,
        name: "Rana",
    });
    // Array tuple
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const resTuple1 = createArrayWithTuple("Bangladesh", 10);
    const resTuple2 = createArrayWithTuple("Bangladesh", {
        name: "Asia",
    });
    const addCourseToStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({
        name: "Mr. X",
        email: "x@gmail.com",
        devType: "NLWD",
    });
    const student2 = addCourseToStudent({
        name: "Mr. Y",
        email: "y@gmail.com",
        hasWatch: "Apple watch",
    });
}
