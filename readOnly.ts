// by setting readonly right before the variable name it ensure that, the variable remain  unchanged
type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credCardDetails?: number; // by using question mark after the variable and before the colon, it makes that variable optional form that type.
};

let myUser: User = {
  _id: "1234",
  name: "mollik",
  email: "m@m.com",
  isActive: false,
};

type CardNumber = {
  careNumber: string;
};

type CardDate = {
  cardDate: string;
};

type cardDetails = CardNumber & // in typescript & uses for make (addition or mixing or combine).
  //Like in this example, we are mixing cardNumber and CardDate variables into cardDetails variable;
  CardDate & {
    cvv: number;
  };

// if I need to change my user credential
myUser.email = "alamin";
myUser.isActive = true;
myUser._id = "4135"; // as you can seen when I tried to change the id, it gives me an Error that id is on readonly for this reason I can not change it.
