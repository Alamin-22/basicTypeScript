"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var additionByTwo = function (num) {
    return num + 2;
};
var singUp = function (name, email, password, isPaid) {
    if (isPaid) {
        return console.log({ name: name, email: email, isPaid: isPaid });
    }
    return console.log("result", false);
};
var getValue = function (myVal) {
    if (myVal > 5) {
        return true;
    }
    return "Ok its working";
};
var members = ["Tawhid Bhai", "Mollik Bhai", "Tiger Bhai", "Zaman Bhai"];
members.map(function (member) {
    return "name is ".concat(member);
});
function consoleError(errMessage) {
    console.log(errMessage);
}
function handleError(errMessage) {
    throw new Error(errMessage);
}
getValue(4);
additionByTwo(2);
singUp("md Al Amin Mollik", "mollik@gmail.com", 123543, false);
