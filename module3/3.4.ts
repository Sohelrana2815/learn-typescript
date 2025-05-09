{
  // instanceof guard

  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log("I am making sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    // Method only for dog

    makeBark() {
      console.log("Dog is barking");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    // Method only for cat

    makeMeaw() {
      console.log("Cat make meaw meaw sound.");
    }
  }

  // Smart way to handle this instanceof using function

  const isDog = (animal: Animal) => {
    return animal instanceof Dog;
  };

  const isCat = (animal: Animal) => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  };

  // Instance of Dog
  const dog = new Dog("Dog Bhai", "Dog");
  // Instance of Dog
  const cat = new Cat("Cat Bhai", "Cat");
  // dog.
  // cat.
  getAnimal(cat);

  //
}
