class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  intro() {
    console.log(`Hi ${this.name}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
}

const a = new Wizard("Yogendra", "Class1");
const b = new Wizard("Soni", "Class2");
console.log(a);
console.log(b);
