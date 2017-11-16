// export例1
export function hoge() {
  console.log("boo from example.ts");
}

// export例2
/**
 * @export
 * @class Human
 * @description test用
 */
export class Human {
  private name: string;

  constructor(name: string) {
    this.name = name;
  };

  greet() {
    console.log(`I'm ${this.name}. Hello! from example.js`);
  }
}
