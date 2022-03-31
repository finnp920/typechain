class Human {
  public name: string;
  private age: number;
  public gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  getAge() {
    return this.age;
  }
}

const finn = new Human("Finn", 33, "female")

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.getAge()}, you are a ${person.gender}!`;
}

console.log(sayHi(finn));

export {};