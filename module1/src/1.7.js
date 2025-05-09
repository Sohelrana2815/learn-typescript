"use strict";
{
    // spread operator
    // destructuring
    // rest operator
    // learn spread operator
    const bros1 = ["Mir", "Mim", "Rana"];
    const bros2 = ["Samiul", "Selim", "khan"];
    bros1.push(...bros2);
    const mentors1 = {
        typescript: "Mezba",
        redux: "Mir",
        dbms: "Mizan",
    };
    const mentors2 = {
        prisma: "Firoz",
        next: "Tonmoy",
        cloud: "Nahid",
    };
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    // Learn rest operator
    // const greetFriends = (friend1: string, friend2: string, friend3: string) => {
    //   console.log(`Hi ${friend1} ${friend2} ${friend3}`);
    // };
    // greetFriends("Abul", "kabul", "sabul", "ubul", "lubul");
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends("Abul", "kabul", "sabul", "ubul", "lubul", "mokbul");
}
