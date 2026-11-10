abstract class Employee {
  constructor(
    public name: string,
    private _baseSalary: number,
  ) {}

  get baseSalary(): number {
    return this._baseSalary;
  }

  describe() {
    return `${this.name} earns ${this.baseSalary}`;
  }

  abstract calculatePay(): number;
}

class Developer extends Employee {
  calculatePay() {
    return this.baseSalary + 4000;
  }
}
