export default class Dishes {
  constructor(
    private _id: string,
    private _name: string,
    private _price: number,
    private _ingredients: string[],
    private _portions: number,
    private _nutritionalInformation: string
  ) {}

  //getters
  get id() {
    return this._id;
  }
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

  //setters
  set id(id: string) {
    this._id = id;
  }
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

  //methods

  //toJSON
  toJSON(): object {
    return {
      id: this._id,
      name: this._name,
      price: this._price,
      ingredients: this._ingredients,
      nutritionalInformation: this._nutritionalInformation,
    };
  }

  //fromJSON
  static fromJSON(json: any): Dishes {
    return new Dishes(
      json.id,
      json.name,
      json.price,
      json.ingredients,
      json.portions,
      json.nutritionalInformation
    );
  }
}
