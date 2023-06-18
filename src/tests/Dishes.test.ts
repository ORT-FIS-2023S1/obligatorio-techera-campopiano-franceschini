import Dishes from "../shared/domain/entities/Dishes";

describe("Dishes", () => {
  it("should create a Dishes instance", () => {
    const dish = new Dishes(
      "Pizza",
      12.99,
      ["Harina", "Queso", "Salsa de tomate", "Bacon"],
      8,
      "Calorías: 250 por porción",
      "urlimagen"
    );

    expect(dish).toBeInstanceOf(Dishes);
    expect(dish.name).toBe("Pizza");
    expect(dish.price).toBe(12.99);
    expect(dish.ingredients).toEqual([
      "Harina",
      "Queso",
      "Salsa de tomate",
      "Bacon",
    ]);
    expect(dish.portions).toBe(8);
    expect(dish.nutritionalInformation).toBe("Calorías: 250 por porción");
    expect(dish.imageURL).toBe("urlimagen");
  });

  it("should generate a unique identifier if not provided", () => {
    const dish = new Dishes(
      "Burger",
      8.99,
      ["Pan", "Carne", "Queso", "Lechuga"],
      1,
      "Calorías: 500",
      "urlimagen"
    );

    expect(dish.getIdentifier()).toBeDefined();
    expect(typeof dish.getIdentifier()).toBe("string");
  });

  it("should return JSON representation", () => {
    const dish = new Dishes(
      "Ensalada",
      6.99,
      ["Lechuga", "Tomate", "Pepino", "Cebolla"],
      1,
      "Calorías: 150",
      "urlimagen"
    );

    const json = dish.toJSON();

    expect(json).toEqual({
      name: "Ensalada",
      price: 6.99,
      ingredients: ["Lechuga", "Tomate", "Pepino", "Cebolla"],
      portions: 1,
      nutritionalInformation: "Calorías: 150",
      imageURL: "urlimagen",
    });
  });

  it("should create Dishes instance from JSON", () => {
    const json = {
      name: "Pasta",
      price: 9.99,
      ingredients: ["Pasta", "Salsa de tomate", "Parmesano"],
      portions: 2,
      nutritionalInformation: "Calorías: 300 por porción",
      imageURL: "urlimagen",
    };

    const dish = Dishes.fromJSON(json);

    expect(dish).toBeInstanceOf(Dishes);
    expect(dish.name).toBe("Pasta");
    expect(dish.price).toBe(9.99);
    expect(dish.ingredients).toEqual(["Pasta", "Salsa de tomate", "Parmesano"]);
    expect(dish.portions).toBe(2);
    expect(dish.nutritionalInformation).toBe("Calorías: 300 por porción");
  });
});
