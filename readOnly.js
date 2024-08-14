var myUser = {
    _id: "1234",
    name: "mollik",
    email: "m@m.com",
    isActive: false,
};
// if I need to change my user credential
myUser.email = "alamin";
myUser.isActive = true;
myUser._id = "4135"; // as you can seen when I tried to change the id, it gives me an Error that id is on readonly for this reason I can not change it.
