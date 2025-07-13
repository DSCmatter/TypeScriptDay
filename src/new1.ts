type IDfieldType = string | number;

// const printID = (id: number | string) => {
//     console.log("ID: " + id);
// };

const printID = (id: IDfieldType) => {
  console.log("ID: " + id);
};

printID(123);

interface BusinessPartner {
  name: string;
  creditScore: number;
}

interface UserIdentity {
  id: number;
  email: string;
}

type Employee = BusinessPartner & UserIdentity;

const signContract = (employee: Employee): void => {
  console.log(
    "Contract signed by " + employee.name + " with email: " + employee.email
  );
};

signContract({
  name: "Vasant",
  creditScore: 800,
  id: 44,
  email: "staff@company.com",
});


// enums

enum LoginError {
    unauthorized = 'unauthorized',
    NoUser = 'User doesnt exist',
    WrongCredentials = 'Wrong Credentials',
    Internal = 'internal',
}

const printErrorMsg = (error: LoginError): void => {
    if (error === LoginError.unauthorized) {
        console.log("User not authorized");
    } else if (error === LoginError.NoUser) {
        console.log("No such user exists");
    } else if (error === LoginError.WrongCredentials) {
        console.log("Invalid username or password");
    } else if (error === LoginError.Internal) {
        console.log("Something went wrong on our side. Try again later.");
    } else {
        console.log("Unknown error");
    }
};

printErrorMsg(LoginError.NoUser);