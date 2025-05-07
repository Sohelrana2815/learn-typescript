"use strict";
{
    // constraints
    // constraints common types
    const addCourseToStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({
        id: 1,
        name: "Sohel",
        email: "x@gmail.com",
        premium: "Yes",
        devType: "NLWD",
    });
    const student2 = addCourseToStudent({
        id: 2,
        name: "Mr. Y",
        email: "y@gmail.com",
        hasWatch: "Apple watch",
    });
    //
}
