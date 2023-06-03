export default class Diner {
  constructor(
    private _dinerNumber: number,
    private _name: string,
    private _surname: string
  ) {}

  //getters
  get dinerNumber(): number {
    return this._dinerNumber;
  }

  get name(): string {
    return this._name;
  }

  get surname(): string {
    return this._surname;
  }

  //setters
  set name(name: string) {
    this._name = name;
  }

  set surname(surname: string) {
    this._surname = surname;
  }

  //toJSON
  toJSON(): any {
    return {
      dinerNumber: this.dinerNumber,
      name: this.name,
      surname: this.surname,
    };
  }

  //fromJSON
  static fromJSON(json: any): Diner {
    const object = new Diner(json.dinerNumber, json.name, json.surname);
    return object;
  }
}
