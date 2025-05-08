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

  async function main() {
    const user = await fetchUserData();
    return user;
  }

  main();
  //
}
