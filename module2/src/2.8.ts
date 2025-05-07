{
  // promise

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
