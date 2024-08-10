const additionByTwo = (num: number): number => {
  return num + 2;
};

const singUp = (
  name: string,
  email: string,
  password: number,
  isPaid: boolean
) => {
  if (isPaid) {
    return console.log({ name, email, isPaid });
  }
  return console.log("result", false);
};

const getValue = (myVal: number) => {
  if (myVal > 5) {
    return true;
  }
  return "Ok its working";
};

const members = ["Tawhid Bhai", "Mollik Bhai", "Tiger Bhai", "Zaman Bhai"];

members.map((member): string => {
  return `name is ${member}`;
});

function consoleError(errMessage: string): void {
  console.log(errMessage);
}

function handleError(errMessage: string): never {
  throw new Error(errMessage);
}

getValue(4);
additionByTwo(2);
singUp("md Al Amin Mollik", "mollik@gmail.com", 123543, false);

export {};
