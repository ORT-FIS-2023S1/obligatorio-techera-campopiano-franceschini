export default class User {
  constructor(
    private _email: string,
    private _password: string,
    private _role: string,
    private _diners: string[] = [],
    private _canteens: string[] = []
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

  get diners(): string[] {
    return this._diners;
  }

  get canteens(): string[] {
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

  set diners(diners: string[]) {
    this._diners = diners;
  }

  set canteens(canteens: string[]) {
    this._canteens = canteens;
  }

  //methods
  //add diners
  addDiner(diner: string): void {
    this._diners.push(diner);
  }

  //add canteens
  addCanteen(canteen: string): void {
    this._canteens.push(canteen);
  }

  //remove diners
  removeDiner(diner: string): void {
    this._diners = this._diners.filter((d) => d !== diner);
  }

  //remove canteens
  removeCanteen(canteen: string): void {
    this._canteens = this._canteens.filter((c) => c !== canteen);
  }

  //toJSON
  toJSON(): object {
    return {
      email: this._email,
      role: this._role,
      diners: this._diners,
      canteens: this._canteens,
    };
  }

  //fromJSON
  static fromJSON(json: any): User {
    const user = new User(
      json.email,
      json.password,
      json.role,
      json.diners,
      json.canteens
    );
    return user;
  }
}
