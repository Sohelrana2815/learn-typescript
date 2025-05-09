{
  //
  type User = {
    name: string;
    age: number;
  };

  async function fetchUserData(): Promise<User> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const userData: User = {
          name: "John Doe",
          age: 30,
        };
        resolve(userData);
      }, 1000); // ১ সেকেন্ডের ডিলে
    });
  }

  async function main(): Promise<User> {
    const user: User = await fetchUserData();
    return user;
  }
  const showData = main();

  console.log(showData);

  //
}
