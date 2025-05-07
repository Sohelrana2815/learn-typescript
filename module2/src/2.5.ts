{
  // function with generics

  const createArray = (param: string): string[] => {
    return [param];
  };

  // It will take T type and return T type array

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const result1 = createArray("Bangladesh");

  // const resultWithGeneric = createArrayWithGeneric<string>("Bangladesh");
  const resultWithGeneric = createArrayWithGeneric<boolean>(true);

  type User = {
    id: number;
    name: string;
  };

  const resGenericObj = createArrayWithGeneric<User>({
    id: 1,
    name: "Rana",
  });

  // Array tuple

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const resTuple1 = createArrayWithTuple<string, number>("Bangladesh", 10);

  type Country = {
    name: string;
  };

  const resTuple2 = createArrayWithTuple<string, Country>("Bangladesh", {
    name: "Asia",
  });

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";

    return {
      ...student,
      course,
    };
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
