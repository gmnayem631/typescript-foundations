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
const employee1 = new Employee("Sean", 20000);
// employee1.salary = 23000;
console.log(employee1.baseSalary);
export {};
