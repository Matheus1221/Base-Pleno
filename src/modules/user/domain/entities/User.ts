export class User {
  constructor(public name: string, public age: number) {}
  isAdult(): boolean {
    return this.age >= 18;
  }
}
