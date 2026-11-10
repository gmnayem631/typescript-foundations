class Employee {
  constructor(
    public name: string,
    private _baseSalary: number,
  ) {}

  get baseSalary(): number {
    return this._baseSalary;
  }
}

class Manager extends Employee {
  teamMemberCount: number;

  constructor(name: string, _baseSalary: number, teamMemberCount: number) {
    super(name, _baseSalary);
    this.teamMemberCount = teamMemberCount;
  }
}

const employee1 = new Employee("Sean", 20000);

// employee1.salary = 23000;

console.log(employee1.baseSalary);

const manager = new Manager("Mark", 30000, 12);
console.log(manager);
