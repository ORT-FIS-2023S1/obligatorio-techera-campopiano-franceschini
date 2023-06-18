import { v4 as uuid } from "uuid";
import Dishes from "./Dishes";
import Cache from "../../utils/cache";
import ENTITIES from "../types/entities";
export default class DailyMenu {
  private _id: string;
  constructor(
    private _date: Date,
    private _breakfast: string,
    private _lunch: string,
    private _snack: string,
    _id?: string
  ) {
    !_id ? (this._id = uuid()) : (this._id = _id);
  }

  //getters
  get date(): Date {
    return this._date;
  }

  get breakfast(): string {
    return this._breakfast;
  }

  get lunch(): string {
    return this._lunch;
  }

  get snack(): string {
    return this._snack;
  }

  //setters
  set date(date: Date) {
    this._date = date;
  }

  set breakfast(breakfast: string) {
    this._breakfast = breakfast;
  }

  set lunch(lunch: string) {
    this._lunch = lunch;
  }

  set snack(snack: string) {
    this._snack = snack;
  }

  //methods
  getIdentifier(): string {
    return this._id;
  }

  //toJSON
  toJSON(): any {
    return {
      date: this.date,
      breakfast: this.breakfast,
      lunch: this.lunch,
      snack: this.snack,
    };
  }

  //fromJSON

  static fromJSON(json: DailyMenu): DailyMenu {
    const dailyMenu = new DailyMenu(
      json.date,
      json.breakfast,
      json.lunch,
      json.snack
    );
    return dailyMenu;
  }
}
