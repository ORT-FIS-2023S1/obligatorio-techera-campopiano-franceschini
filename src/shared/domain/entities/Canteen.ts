import DailyMenu from "./DailyMenu";
import Dishes from "./Dishes";
import Group from "./Group";

export default class Canteen {
  constructor(
    private _canteenNumber: number,
    private _name: string,
    private _address: string,
    private _telephone: string,
    private _email: string,
    private _groups: Group[] = [],
    private _menu: Dishes[] = [],
    private _dailyMenus: DailyMenu[] = []
  ) {}

  //getters
  get canteenNumber(): number {
    return this._canteenNumber;
  }

  get name(): string {
    return this._name;
  }

  get address(): string {
    return this._address;
  }

  get telephone(): string {
    return this._telephone;
  }

  get email(): string {
    return this._email;
  }

  get menu(): Dishes[] {
    return this._menu;
  }

  get dailyMenus(): DailyMenu[] {
    return this._dailyMenus;
  }

  get groups(): Group[] {
    return this._groups;
  }

  //setters
  set name(name: string) {
    this._name = name;
  }

  set address(address: string) {
    this._address = address;
  }

  set telephone(telephone: string) {
    this._telephone = telephone;
  }

  set email(email: string) {
    this._email = email;
  }

  set menu(menu: Dishes[]) {
    this._menu = menu;
  }

  set dailyMenus(dailyMenus: DailyMenu[]) {
    this._dailyMenus = dailyMenus;
  }

  set groups(groups: Group[]) {
    this._groups = groups;
  }

  //toJSON
  toJSON(): any {
    return {
      canteenNumber: this.canteenNumber,
      name: this.name,
      address: this.address,
      telephone: this.telephone,
      email: this.email,
      menu: this.menu.map((dish) => dish.toJSON()),
      dailyMenus: this.dailyMenus.map((dailyMenu) => dailyMenu.toJSON()),
      groups: this.groups.map((group) => group.toJSON()),
    };
  }

  //fromJSON
  static fromJSON(json: any): Canteen {
    const canteen = new Canteen(
      json.canteenNumber,
      json.name,
      json.address,
      json.telephone,
      json.email,
      json.menu,
      json.dailyMenus,
      json.groups
    );

    return canteen;
  }
}
