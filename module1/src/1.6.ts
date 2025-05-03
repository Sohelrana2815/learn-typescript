{
  // Learning function
  // Normal function
  // Arrow function
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  add(10, 20);
  ("✅");
  // add(10,'10'); "❌"
  const addArrow = (num1: number, num2: number): number => num1 + num2;

  // object --> function --> method

  const poorUser = {
    name: "Sohel",
    balance: 0,
    addBalance(balance: number): string {
      return `My new balance is : ${this.balance + balance}`;
    },
  };

  // Map always return an array

  const arr: number[] = [10, 20, 30];

  const newArray: number[] = arr.map(
    (element: number): number => element * element
  );
}
