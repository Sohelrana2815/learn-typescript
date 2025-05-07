{
  // generic constraint with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; // manually

  // keyof for create union type for Vehicle type

  type Owner2 = keyof Vehicle;

  //   const person1: Owner2 = ""
  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Sohel",
    age: 20,
    address: "dhk",
  };

  const car = {
    model: "Toyota 100",
    year: 2020,
  };

  const result1 = getPropertyValue(car, "model");

  //   obj[key]; // = 'Sohel'
  //   obj[key]; // = 20

  //
}
