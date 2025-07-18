{
  // nullable types

  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("There is nothing to search");
    }
  };

  searchName(null);
  // unknown typeof

  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else if (typeof value === "string") {
      const [input, unit] = value.split(" ");
      const convertedSpeed = (parseFloat(input) * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else {
      console.log("wrong input");
    }
  };

  getSpeedInMeterPerSecond(null);

  // never

  const throwError = (msg: string): never => {
    throw new Error(msg);
  };

  throwError("An error occurred.");
}
