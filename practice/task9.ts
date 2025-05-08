{
  // Task 9: Optional Chaining

  // Objective: Use optional chaining with nested objects.
  // Instructions:
  // Write a function getEmployeeCity(employee) that safely retrieves the city of an employee from a nested object using optional chaining.

  function getEmployeeCity(employee: any): string {
    const city = employee?.address?.city;
    return city;
  }

  // Has address property and value as well

  const employee1 = {
    name: "Sohel",
    address: {
      city: "Dhaka",
    },
  };

  const employee2 = {
    name: "Rana",
  };

  const employee3 = {
    name: "Moon",
    address: {},
  };

  console.log(getEmployeeCity(employee1));
  console.log(getEmployeeCity(employee2));
  console.log(getEmployeeCity(employee3));
  //
}
