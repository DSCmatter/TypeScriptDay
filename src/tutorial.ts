// console.log('hello')

// let id = 5;

// let names = 'vasant';

// let isPublished = true;

// let ids: number[] = [1,2,3,4]
// console.log(typeof(ids))


const concatenateValues = (a: string, b: string): string => {
    return a + b
}

console.log(concatenateValues("Hello ", "World"));
console.log(concatenateValues("5", "10")); // 510, 15


interface userInterface {
    id: number,
    names: string,
    age?: number,
    greet(message: string): void
}

let names: string
const user: userInterface = {
    id: 2,
    names: 'Vasant',
    greet(message) {
        console.log(message)
    },
};

user.greet('hello')

if (!user.age) {
    console.log("There's no age of the user.")
} else {
    console.log(user.age)
}

function greeting(message: string): void {
    console.log('hello stupid');
}

greeting('')