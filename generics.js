"use strict";
class StorageContainer {
    constructor() {
        this.contents = [];
    }
    addItem(item) {
        this.contents.push(item);
    }
    getItem(idx) {
        return this.contents[idx];
    }
}
const UserNames = new StorageContainer();
UserNames.addItem("GG");
UserNames.addItem("YOLO");
console.log(UserNames.getItem(1));
const friendsCount = new StorageContainer();
friendsCount.addItem(23);
friendsCount.addItem(54);
console.log(friendsCount.getItem(0));
const employee = {
    employeeId: 123,
    startDate: new Date(),
    name: "Vasant",
    department: "Technology",
};
employee.name = "Emma";
console.log(employee);
