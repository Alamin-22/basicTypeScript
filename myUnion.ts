let score: number | string = 44; // by using OR( | ) we can make it like js condition,

score = "mollik"; // as you can see I can set a string to the score variable because i set two type for score variables

score = 60;

type User = {
  name: string;
  id: number;
};
type Admin = {
  username: string;
  id: number;
};
// inj Js we have to use or( || ) like this. But in typeScript we have to use single or sign ( | )
let alamin: User | Admin = { name: "mollik", id: 51 };

alamin = { username: "mollik", id: 123 };

// in this provided code I have added A condition for the type. either number neither  string.
function getDBId(id: number | string) {
  console.log("DB id is = ", id);
}

getDBId(5); // i can pass number as an arguments
getDBId("mollik"); // also i can pass string as an arguments

// but if i want to do something extra on with this function then I have to check the type using if else otherwise it might generate some issue because of its type

export {};
