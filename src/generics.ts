class StorageContainer<T> {
    private contents: T[]
    
    constructor() {
        this.contents = [];
    }

    addItem(item: T): void {
        this.contents.push(item);
    }

    getItem(idx: number): T | undefined {
        return this.contents[idx]
    }
}

const UserNames = new StorageContainer<string>();
UserNames.addItem("GG")
UserNames.addItem("YOLO")
console.log(UserNames.getItem(1))

const friendsCount = new StorageContainer<number>();
friendsCount.addItem(23);
friendsCount.addItem(54);
console.log(friendsCount.getItem(0))

interface Employees {
    readonly employeeId: number;
    startDate:  Date;

    name: string;
    department: string;
}

const employee: Employees = {
    employeeId: 123,
    startDate: new Date(),
    name: "Vasant",
    department: "Technology",
};

employee.name = "Emma"; // will change name from Vasant to Emma 
// employee.employeeId = 6754;

console.log(employee);