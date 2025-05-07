{
  // promise

  type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };

  const getToDo = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const data = await response.json();
      console.log("ToDo data:", data);
      return data;
    } catch (error) {
      console.log("failed to load ToDo:", error);
    }
  };
  getToDo();

  // simulate

  type Something = {
    something: string;
  };

  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "something" };
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  // calling the createPromise function

  const showData = async (): Promise<Something> => {
    const data: Something = await createPromise();
    return data;
    // console.log("Data is awesome:", data);
  };
  showData();

  //
}
