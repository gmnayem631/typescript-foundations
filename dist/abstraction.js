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
}
class Developer extends Employee {
    calculatePay() {
        return this.baseSalary + 4000;
    }
}
export {};
