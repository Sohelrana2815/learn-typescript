{
  // promise

  // simulate

  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "something";
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  // calling the createPromise function

  const showData = async (): Promise<string> => {
    const data: string = await createPromise();
    return data;
    // console.log("Data is awesome:", data);
  };
  showData();

  //
}
