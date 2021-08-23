class Emoji {
  private _prev: string;

  constructor(public _icon: string) {}

  get icon() {
    return this._icon;
  }

  get prev() {
    return this._prev;
  }

  change(val: string) {
    this._prev = this._icon;
    this._icon = val;
  }
}

const sun = new Emoji("sun");

//static method

class EmojiStatic {
  static addOneTo(val) {
    return 1 + val;
  }
}

class Human {
  constructor(public name: string) {}

  sayHi() {
    return `hello, ${this.name}`;
  }
}

const patrick = new Human(`Patrick Mullot`);

console.log(patrick.sayHi());

class SuperHuman extends Human {
  heroName: string;
  constructor(name) {
    super(name);
    this.heroName = `HERO ${name}`;
  }

  superpower() {
    return `${this.heroName} hits jumpers`;
  }
}

const steph = new SuperHuman("Steph Curry");

console.log(steph.sayHi());

const hasName = (name) => {
  return { name };
};

const canSayHi = (name) => {
  return {
    sayHi: () => `Hello, ${name}`,
  };
};

const Person = function(name){
  return {
    ...hasName(name),
    ...canSayHi(name)
  }
}

const person = Person("Jeff")
console.log(person.sayHi())