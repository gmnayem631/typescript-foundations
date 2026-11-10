class Employee {
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

  calculatePay() {
    return this.baseSalary;
  }
}

class Manager extends Employee {
  teamMemberCount: number;

  constructor(name: string, _baseSalary: number, teamMemberCount: number) {
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
// console.log(manager.describe());
