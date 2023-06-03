export default class Dishes {
  constructor(
    private _name: string,
    private _price: number,
    private _ingredients: string[] = [],
    private _portions: number,
    private _nutritionalInformation: string,
    private _photo: string
  ) {}

  //getters
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

  get photo(): string {
    return this._photo;
  }

  //setters
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

  set photo(photo: string) {
    this._photo = photo;
  }

  //methods

  //toJSON
  toJSON(): object {
    return {
      name: this.name,
      price: this.price,
      ingredients: this.ingredients,
      nutritionalInformation: this.nutritionalInformation,
      photo: this.photo,
    };
  }

  //fromJSON
  static fromJSON(json: any): Dishes {
    return new Dishes(
      json.name,
      json.price,
      json.ingredients,
      json.portions,
      json.nutritionalInformation,
      json.photo
    );
  }
}
