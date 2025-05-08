{
  // Task 13: Generics with Functions and
  //  Interfaces

  // Objective: Use generics to handle different types.

  // Instructions:

  // Create a generic function that:
  // Accepts an array of any type.
  // Returns a new array with duplicate values removed.

  // Method 1
  function uniqueArray<T>(arr: T[]): T[] {
    // 1) create a set from the array (duplicates are discarded)
    const set = new Set<T>(arr);
    // 2) Spread the set's values into a new array and return it
    return [...set];
  }
  const nums = [1, 2, 2, 3, 1];
  const uniqNums = uniqueArray(nums);
  // Method 2

  //
}
