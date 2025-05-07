{
  // conditional type

  type a1 = number;
  type b1 = undefined;

  // x er type nirvor korse a1 er upor
  type x = a1 extends null ? true : false;

  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

  //   type Sheikh = {
  //     bike: string;
  //     car: string;
  //     ship: string;
  //   };

  //   // car ase kina / bike ase kina / ship ase kina / tractor ase kina

  //   type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false;

  //   type HasShip = CheckVehicle<"ship">;

  // key of operator; keyof Sheikh "bike" | "car" | "ship"

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    plan: string;
  };

  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  type HasShip = CheckVehicle<"ship">;

  //
}
