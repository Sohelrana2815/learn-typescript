{
  // mapped types

  const arrayOfNumbers: number[] = [1, 2, 3, 4];

  //   const arrayOfStrings: string[] = ["1", "2", "3", "4"];

  const arrayOfStrings: string[] = arrayOfNumbers.map((number) =>
    number.toString()
  );

  console.log(arrayOfStrings);

  type AreaNumber = {
    height: number;
    width: number;
  };

  type Height = AreaNumber["height"]; // look up type

  //   type AreaString = {
  //     height: string;
  //     width: string;
  //   };
  // keyof AreaNumber => "height"| "width"

  // type AreaString = {
  //   [key in "height" | "width"]: string;
  // };

  // T type is receiving : {height:string,width:number}
  // key => T["height"], T["width"]
  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 100,
  };

  //
}
