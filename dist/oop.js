class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    get baseSalary() {
        return this._baseSalary;
    }
    describe() {
        return `${this.name} earns ${this.baseSalary}`;
    }
    calculatePay() {
        return this.baseSalary;
    }
}
class Manager extends Employee {
    teamMemberCount;
    constructor(name, _baseSalary, teamMemberCount) {
        super(name, _baseSalary);
        this.teamMemberCount = teamMemberCount;
    }
    describeWork() {
        return `${this.name} manages ${this.teamMemberCount} people`;
    }
}
const employee1 = new Employee("Sean", 20000);
// console.log(employee1.calculatePay());
const manager = new Manager("Mark", 30000, 12);
export {};
// console.log(manager.describe());
