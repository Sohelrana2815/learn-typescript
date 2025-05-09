{
  // oop - class

  class Animal1 {
    constructor(public name: string, public age: number) {}

    info() {
      console.log(`Name is ${this.name} and age ${this.age}`);
    }
  }

  const tiger = new Animal1("Halum", 15);
  const eagle = new Animal1("hassai", 8);

  tiger.info();
  eagle.info();

  class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;

    // Parameter properties

    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      //   this.name = name;
      //   this.species = species;
      //   this.sound = sound;
    }

    makeSound() {
      console.log(`The ${this.species} says ${this.sound}`);
    }
  }

  const dog = new Animal("German Shepard Bhai", "dog", "Ghew Ghew");

  const cat = new Animal("Parsian bhai", "cat", "meaw meaw");

  dog.makeSound();
  cat.makeSound();

  //
}
