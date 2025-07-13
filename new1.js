"use strict";
// const printID = (id: number | string) => {
//     console.log("ID: " + id);
// };
const printID = (id) => {
    console.log("ID: " + id);
};
printID(123);
const signContract = (employee) => {
    console.log("Contract signed by " + employee.name + " with email: " + employee.email);
};
signContract({
    name: "Vasant",
    creditScore: 800,
    id: 44,
    email: "staff@company.com",
});
// enums
var LoginError;
(function (LoginError) {
    LoginError["unauthorized"] = "unauthorized";
    LoginError["NoUser"] = "User doesnt exist";
    LoginError["WrongCredentials"] = "Wrong Credentials";
    LoginError["Internal"] = "internal";
})(LoginError || (LoginError = {}));
const printErrorMsg = (error) => {
    if (error === LoginError.unauthorized) {
        console.log("User not authorized");
    }
    else if (error === LoginError.NoUser) {
        console.log("No such user exists");
    }
    else if (error === LoginError.WrongCredentials) {
        console.log("Invalid username or password");
    }
    else if (error === LoginError.Internal) {
        console.log("Something went wrong on our side. Try again later.");
    }
    else {
        console.log("Unknown error");
    }
};
printErrorMsg(LoginError.NoUser);
