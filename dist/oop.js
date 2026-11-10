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
}
class Manager extends Employee {
    teamMemberCount;
    constructor(name, _baseSalary, teamMemberCount) {
        super(name, _baseSalary);
        this.teamMemberCount = teamMemberCount;
    }
}
const employee1 = new Employee("Sean", 20000);
// employee1.salary = 23000;
console.log(employee1.baseSalary);
const manager = new Manager("Mark", 30000, 12);
console.log(manager);
export {};
