import {v4 as uuid} from 'uuid';
export default class Diner {
  private _id?: string;
  constructor(private _name: string, private _surname: string, _id?: string) {
    !_id ? (this._id = uuid()) : (this._id = _id);
  }

  // getters

  get name(): string {
    return this._name;
  }

  get surname(): string {
    return this._surname;
  }

  // setters
  set name(name: string) {
    this._name = name;
  }

  set surname(surname: string) {
    this._surname = surname;
  }

  // methods

  getIdentifier(): string {
    return this._id;
  }

  // toJSON
  toJSON(): any {
    return {
      id: this._id,
      name: this.name,
      surname: this.surname,
    };
  }

  // fromJSON
  static fromJSON(json: any): Diner {
    const object = new Diner(json.name, json.surname, json.id);
    return object;
  }
}
