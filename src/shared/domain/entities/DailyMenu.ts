import Dishes from "./Dishes";

export default class DailyMenu {
  constructor(
    private _date: Date,
    private _breakfast: Dishes,
    private _lunch: Dishes,
    private _snack: Dishes
  ) {}

  //getters
  get date(): Date {
    return this._date;
  }

  get breakfast(): Dishes {
    return this._breakfast;
  }

  get lunch(): Dishes {
    return this._lunch;
  }

  get snack(): Dishes {
    return this._snack;
  }

  //setters
  set date(date: Date) {
    this._date = date;
  }

  set breakfast(breakfast: Dishes) {
    this._breakfast = breakfast;
  }

  set lunch(lunch: Dishes) {
    this._lunch = lunch;
  }

  set snack(snack: Dishes) {
    this._snack = snack;
  }

  //toJSON
  toJSON(): any {
    return {
      date: this.date,
      breakfast: this.breakfast.toJSON(),
      lunch: this.lunch.toJSON(),
      snack: this.snack.toJSON(),
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
