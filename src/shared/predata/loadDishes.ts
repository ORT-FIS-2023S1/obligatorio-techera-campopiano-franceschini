import Dishes from "../domain/entities/Dishes";
import ENTITIES from "../domain/types/entities";
import Cache from "../utils/cache";

export default () => {
  //save dishes
  //breakfast

  const coffeWithMilk = new Dishes(
    "Cafe con leche",
    80,
    ["Leche", "cafe", "azucar"],
    1,
    "Proteina y calcio",
    "/temp/cafe.jpg"
  );
  const muffins = new Dishes(
    "Magdalenas",
    100,
    ["Harina", "huevos", "azucar"],
    2,
    "Hidratos de carbono",
    "/temp/cafe.jpg"
  );
  const orangeJuice = new Dishes(
    "Zumo de naranja",
    50,
    ["Naranjas"],
    3,
    "Vitamina C",
    "/temp/cafe.jpg"
  );
  const cookies = new Dishes(
    "Galletas",
    150,
    ["Harina", "huevos", "azucar"],
    4,
    "Hidratos de carbono",
    "/temp/cafe.jpg"
  );
  const donuts = new Dishes(
    "Donuts",
    200,
    ["Harina", "huevos", "azucar"],
    5,
    "Hidratos de carbono",
    "/temp/cafe.jpg"
  );
  //lunches
  const salad = new Dishes(
    "Ensalada",
    200,
    ["Lechuga", "tomate", "atun"],
    6,

    "Vitaminas y proteinas",
    "/temp/cafe.jpg"
  );

  const pasta = new Dishes(
    "Pasta",
    300,
    ["Pasta", "tomate", "atun"],
    7,
    "Hidratos de carbono y proteinas",
    "/temp/cafe.jpg"
  );

  const pizza = new Dishes(
    "Pizza",
    400,
    ["Harina", "tomate", "queso"],
    8,
    "Hidratos de carbono y proteinas",
    "/temp/cafe.jpg"
  );

  const rice = new Dishes(
    "Arroz",
    500,
    ["Arroz", "tomate", "atun"],
    9,
    "Hidratos de carbono y proteinas",
    "/temp/cafe.jpg"
  );

  const meat = new Dishes(
    "Carne",
    600,
    ["Carne", "tomate", "atun"],
    10,
    "Proteinas",
    "/temp/cafe.jpg"
  );

  //snacks
  const chips = new Dishes(
    "Patatas fritas",
    200,
    ["Patatas", "aceite", "sal"],
    11,
    "Hidratos de carbono",
    "/temp/cafe.jpg"
  );

  const chocolate = new Dishes(
    "Chocolate",
    300,
    ["Cacao", "leche", "azucar"],
    12,
    "Hidratos de carbono",
    "/temp/cafe.jpg"
  );

  const iceCream = new Dishes(
    "Helado",
    400,
    ["Leche", "azucar", "huevo"],
    13,
    "Hidratos de carbono",
    "/temp/cafe.jpg"
  );

  const yogurt = new Dishes(
    "Yogur",
    500,
    ["Leche", "azucar", "huevo"],
    14,
    "Hidratos de carbono",
    "/temp/cafe.jpg"
  );

  const fruit = new Dishes(
    "Fruta",
    600,

    ["Fruta"],
    15,
    "Vitaminas",
    "/temp/cafe.jpg"
  );

  //save entities
  Cache.saveEntity<Dishes>(ENTITIES.DISHES, coffeWithMilk);
  Cache.saveEntity<Dishes>(ENTITIES.DISHES, salad);
  Cache.saveEntity<Dishes>(ENTITIES.DISHES, chips);

  Cache.saveEntity<Dishes>(ENTITIES.DISHES, muffins);
  Cache.saveEntity<Dishes>(ENTITIES.DISHES, pasta);
  Cache.saveEntity<Dishes>(ENTITIES.DISHES, chocolate);

  Cache.saveEntity<Dishes>(ENTITIES.DISHES, orangeJuice);
  Cache.saveEntity<Dishes>(ENTITIES.DISHES, pizza);
  Cache.saveEntity<Dishes>(ENTITIES.DISHES, iceCream);

  Cache.saveEntity<Dishes>(ENTITIES.DISHES, cookies);
  Cache.saveEntity<Dishes>(ENTITIES.DISHES, rice);
  Cache.saveEntity<Dishes>(ENTITIES.DISHES, yogurt);

  Cache.saveEntity<Dishes>(ENTITIES.DISHES, donuts);
  Cache.saveEntity<Dishes>(ENTITIES.DISHES, meat);
  Cache.saveEntity<Dishes>(ENTITIES.DISHES, fruit);
};
