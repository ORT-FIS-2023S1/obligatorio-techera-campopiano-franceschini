import {v4 as uuid} from 'uuid';
import Diner from './Diner';
import Dishes from './Dishes';

export default class Order {
  private _id: string;

  constructor(
    private _diner: Diner,
    private _dish: Dishes,
    private _date: Date,
    private _additionalInfo: string,
    private _processed: boolean,
    _id?: string,
  ) {
    !_id ? (this._id = uuid()) : (this._id = _id);
  }

  // Getters
  get id(): string {
    return this._id;
  }

  get diner(): Diner {
    return this._diner;
  }

  get dish(): Dishes {
    return this._dish;
  }

  get date(): Date {
    return this._date;
  }

  get additionalInfo(): string {
    return this._additionalInfo;
  }

  get processed(): boolean {
    return this._processed;
  }

  // Setters
  set diner(diner: Diner) {
    this._diner = diner;
  }

  set dish(dish: Dishes) {
    this._dish = dish;
  }

  set date(date: Date) {
    this._date = date;
  }

  set additionalInfo(additionalInfo: string) {
    this._additionalInfo = additionalInfo;
  }

  set processed(processed: boolean) {
    this._processed = processed;
  }
  getIdentifier(): string {
    return this._id;
  }
  // Methods
  toJSON(): any {
    return {
      id: this._id,
      diner: this._diner.toJSON(),
      dish: this._dish.toJSON(),
      date: this._date.toISOString(),
      additionalInfo: this._additionalInfo,
      processed: this._processed,
    };
  }

  static fromJSON(json: any): Order {
    const diner = Diner.fromJSON(json.diner);
    const dish = Dishes.fromJSON(json.dish);
    const date = new Date(json.date);
    return new Order(
      diner,
      dish,
      date,
      json.additionalInfo,
      json.processed,
      json.id,
    );
  }
}
