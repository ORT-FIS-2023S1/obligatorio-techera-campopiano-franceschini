export default class User {
  constructor(
    private _email: string,
    private _password: string,
    private _role: string,
    private _diners: string[],
    private _canteens: string[],
    private _token: string
  ) {}

  //getters
  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }

  get tole(): string {
    return this._role;
  }

  get diners(): string[] {
    return this._diners;
  }

  get canteens(): string[] {
    return this._canteens;
  }

  get token(): string {
    return this._token;
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

  set token(token: string) {
    this._token = token;
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
      password: this._password,
      role: this._role,
      diners: this._diners,
      canteens: this._canteens,
      token: this._token,
    };
  }

  //fromJSON
  static fromJSON(json: any): User {
    const user = new User(
      json.email,
      json.password,
      json.role,
      json.diners,
      json.canteens,
      json.token
    );
    return user;
  }
}
