{
  // Task 4

  //   function displayValue(value: string | number): void {
  //     console.log(value);
  //   }

  //   displayValue(100);

  //   type HasName = {
  //     name: string;
  //   };
  //   type HasAge = {
  //     age: number;
  //   };

  //   type Person = HasName & HasAge;

  //   const person: Person = {
  //     name: "Sohel",
  //     age: 20,
  //   };

  interface Book {
    title: string;
    author: string;
    pages: number;
  }

  interface Magazine {
    title: string;
    issue: number;
    publisher: string;
  }
  // Union type
  type LibraryHas = Book | Magazine;

  // Intersection
  type Publication = Book & Magazine;

  const bookItem: LibraryHas = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 120,
  };

  const magazineItem: LibraryHas = {
    title: "National Geographic",
    issue: 10,
    publisher: "national Geographic Society",
  };

  // hybrid item

  const hybridItem: Publication = {
    title: "Science today",
    author: "Various",
    pages: 50,
    issue: 10,
    publisher: "Tech",
  };

  console.log(bookItem.title);
  console.log(magazineItem.publisher);
  console.log(hybridItem.title);
  console.log(hybridItem.author);
  console.log(hybridItem.issue);

  //
}
