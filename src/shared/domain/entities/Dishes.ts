import {v4 as uuid} from 'uuid';
export default class Dishes {
  private _id: string;
  constructor(
    private _name: string,
    private _price: number,
    private _ingredients: string[],
    private _portions: number,
    private _nutritionalInformation: string,
    private _imageURL: string,
    _id?: string,
  ) {
    !_id ? (this._id = uuid()) : (this._id = _id);
  }

  // getters
  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }

  get ingredients(): string[] {
    return this._ingredients;
  }

  get portions(): number {
    return this._portions;
  }

  get nutritionalInformation(): string {
    return this._nutritionalInformation;
  }

  get imageURL(): string {
    return this._imageURL;
  }

  // setters
  set name(name: string) {
    this._name = name;
  }

  set price(price: number) {
    this._price = price;
  }

  set ingredients(ingredients: string[]) {
    this._ingredients = ingredients;
  }

  set portions(portions: number) {
    this._portions = portions;
  }

  set nutritionalInformation(nutritionalInformation: string) {
    this._nutritionalInformation = nutritionalInformation;
  }

  set imageURL(imageUrl: string) {
    this._imageURL = imageUrl;
  }
  // methods

  getIdentifier(): string {
    return this._id;
  }
  // toJSON
  toJSON(): object {
    return {
      name: this._name,
      price: this._price,
      ingredients: this._ingredients,
      portions: this.portions,
      nutritionalInformation: this._nutritionalInformation,
      imageURL: this._imageURL,
    };
  }

  // fromJSON
  static fromJSON(json: any): Dishes {
    return new Dishes(
      json.name,
      json.price,
      json.ingredients,
      json.portions,
      json.nutritionalInformation,
      json.imageUrl,
    );
  }
}
