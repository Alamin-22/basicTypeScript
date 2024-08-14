// const supperHeros = []; // if we call write an empty array like js then it automatically sets the type to the never which means you will not able to do anything with this array

// supperHeros.push("alamin"); // as you can see I am not able to push string into my array,
// to avoid this case in TS we have to set the type of that array before writing it like below

const supperHeros: string[] = []; // this is how we can set the type of that array
const HeroPower: number[] = [];
const newSystemArray: Array<number> = []; //we can set the type of array like this

type User = {
  name: string;
  isActive: boolean;
};

const allUsers: User[] = []; // this type means I am defining the structure of the object that is gonna push into Array. Without maintain the object structure noo one can set inside this array.

supperHeros.push("Mollik");
HeroPower.push(2);

allUsers.push({ name: "", isActive: true });

export {};
