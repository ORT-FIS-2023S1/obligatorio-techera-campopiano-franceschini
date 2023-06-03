import Canteen from "./Canteen";
import Diner from "./Diner";

export default class User {
  constructor(
    private _email: string,
    private _password: string,
    private _role: string,
    private _diners: Diner[] = [],
    private _canteens: Canteen[] = []
  ) {}

  //getters
  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }

  get role(): string {
    return this._role;
  }

  get diners(): Diner[] {
    return this._diners;
  }

  get canteens(): Canteen[] {
    return this._canteens;
  }

  //setters

  set email(email: string) {
    this._email = email;
  }

  set password(password: string) {
    this._password = password;
  }

  set role(role: string) {
    this._role = role;
  }

  set diners(Diner: Diner[]) {
    this._diners = Diner;
  }

  set canteens(canteens: Canteen[]) {
    this._canteens = canteens;
  }

  //methods
  addDiner(diner: Diner): void {
    this._diners.push(diner);
  }

  addCanteen(canteen: Canteen): void {
    this._canteens.push(canteen);
  }

  removeDiner(diner: Diner): void {
    this._diners = this._diners.filter(
      (d) => d.dinerNumber !== diner.dinerNumber
    );
  }

  removeCanteen(canteen: Canteen): void {
    this._canteens = this._canteens.filter(
      (c) => c.canteenNumber !== canteen.canteenNumber
    );
  }

  //toJSON
  toJSON(): object {
    return {
      email: this.email,
      role: this.role,
      diner: this.diners.map((diner) => diner.toJSON()),
      canteens: this.canteens.map((canteen) => canteen.toJSON()),
    };
  }

  //fromJSON
  static fromJSON(json: any): User {
    const user = new User(
      json.email,
      json.password,
      json.role,
      json.diner,
      json.canteens
    );
    return user;
  }
}
