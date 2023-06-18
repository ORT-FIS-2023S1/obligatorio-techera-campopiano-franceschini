import { v4 as uuid } from "uuid";
import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
dayjs.extend(weekOfYear);

import Cache from "../../utils/cache";
import ENTITIES from "../types/entities";
import DailyMenu from "./DailyMenu";
import Dishes from "./Dishes";
import Group from "./Group";

export default class Canteen {
  private _id: string;
  constructor(
    private _name: string,
    private _address: string,
    private _telephone: string,
    private _email: string,
    private _groups: string[] = [],
    private _menu: string[] = [],
    private _dailyMenus: string[] = [],
    _id?: string
  ) {
    !_id ? (this._id = uuid()) : (this._id = _id);
  }

  //getters

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

  get menu(): string[] {
    return this._menu;
  }

  get dailyMenus(): string[] {
    return this._dailyMenus;
  }

  get groups(): string[] {
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

  set menu(menu: string[]) {
    this._menu = menu;
  }

  set dailyMenus(dailyMenus: string[]) {
    this._dailyMenus = dailyMenus;
  }

  set groups(groups: string[]) {
    this._groups = groups;
  }

  //methods
  getIdentifier(): string {
    return this._id;
  }

  getDailyMenu(isoDay?: number): DailyMenu {
    let inputDate = isoDay ? dayjs().weekday(isoDay) : dayjs();
    if (inputDate.day() === 0 || inputDate.day() === 6) {
      inputDate = inputDate.day(1);
    }
    if (this.dailyMenus.length === 0) return null;
    const dailyMenus = Cache.getEntitiesByKeys<DailyMenu>(
      ENTITIES.DAILY_MENU,
      this._dailyMenus
    );

    const menu = dailyMenus.find((menu) =>
      dayjs(menu.date, "YYYY-MM-DD").isSame(inputDate, "day")
    );

    return menu;
  }

  getWeeklyMenu(): DailyMenu[] {
    const dailyMenus = Cache.getEntitiesByKeys<DailyMenu>(
      ENTITIES.DAILY_MENU,
      this._dailyMenus
    );

    const inputWeek = dayjs().week();
    const inputYear = dayjs().year();

    const menus = dailyMenus.filter((menu) => {
      const menuDate = dayjs(menu.date);
      return menuDate.week() === inputWeek && menuDate.year() === inputYear;
    });

    return menus;
  }

  getGroup(id: string): Group {
    //verifico si el group pertenece a este comedor
    if (!this.groups.includes(id))
      throw new Error("El group no pertenece a este comedor");

    const group = Cache.getEntity<Group>(ENTITIES.GROUPS, id);

    return group;
  }

  getDishe(id: string): Dishes {
    //verifico si el dishe pertenece a este comedor
    if (!this.menu.includes(id))
      throw new Error("El dishe no pertenece a este comedor");

    const dishe = Cache.getEntity<Dishes>(ENTITIES.DISHES, id);

    return dishe;
  }

  addDailyMenu(id: string): void {
    this.dailyMenus.push(id);
  }

  addGroup(id: string): void {
    this.groups.push(id);
  }

  removeGroup(groupId: string): void {
    const groupIndex = this.groups.indexOf(groupId);
    if (groupIndex !== -1) {
      this.groups.splice(groupIndex, 1);
    }
  }

  addDishe(id: string): void {
    this.menu.push(id);
  }

  //toJSON
  toJSON(): any {
    return {
      id: this._id,
      name: this.name,
      address: this.address,
      telephone: this.telephone,
      email: this.email,
      menu: this.menu,
      dailyMenus: this.dailyMenus,
      groups: this.groups,
    };
  }

  //fromJSON
  static fromJSON(json: any): Canteen {
    const canteen = new Canteen(
      json.name,
      json.address,
      json.telephone,
      json.email,
      json.groups,
      json.menu,
      json.dailyMenus,
      json.id
    );
    return canteen;
  }
}
