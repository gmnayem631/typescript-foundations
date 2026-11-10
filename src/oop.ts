class Employee {
  constructor(
    public name: string,
    private _baseSalary: number,
  ) {}

  get baseSalary(): number {
    return this._baseSalary;
  }
}

const employee1 = new Employee("Sean", 20000);

// employee1.salary = 23000;

console.log(employee1.baseSalary);
