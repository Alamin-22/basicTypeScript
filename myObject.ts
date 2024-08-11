const user = {
  name: "md alamin Mollik",
  email: "xyz@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

// this line is giving me an Error Because Email type is not Defined into the function
// createUser({ name: "Md AL Amin Mollik", isPaid: false, email: "x@y.com" });

// but if we pass unknown property from an extra object it will accept it without any error. This is Type Script Wired behavior

let userInfo = { name: "Md AL Amin Mollik", isPaid: false, email: "x@y.com" };

createUser(userInfo);

function createCourse(): { name: string; price: number } {
  return { name: "TypeScript", price: 5 };
}

export {};
