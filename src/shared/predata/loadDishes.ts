/* eslint-disable max-len */
import Dishes from '../domain/entities/Dishes';
import ENTITIES from '../domain/types/entities';
import Cache from '../utils/cache';

export default () => {
  // save dishes
  // breakfast

  const coffeWithMilk = new Dishes(
    'Cafe con leche',
    80,
    ['Leche', 'cafe', 'azucar'],
    1,
    'Proteina y calcio',
    '/temp/cafe.jpg',
  );
  const muffins = new Dishes(
    'Magdalenas',
    100,
    ['Harina', 'huevos', 'azucar'],
    2,
    'Hidratos de carbono',
    '/temp/muffins.jpg',
  );
  const orangeJuice = new Dishes(
    'Zumo de naranja',
    50,
    ['Naranjas'],
    3,
    'Vitamina C',
    '/temp/vaso-jugo-naranja-colocado-madera.jpg',
  );
  const cookies = new Dishes(
    'Galletas',
    150,
    ['Harina', 'huevos', 'azucar'],
    4,
    'Hidratos de carbono',
    '/temp/cookies.jpg',
  );
  const donuts = new Dishes(
    'Donuts',
    200,
    ['Harina', 'huevos', 'azucar'],
    5,
    'Hidratos de carbono',
    'https://canalcocina.es/medias/images/0001083606QuiqueAlCuboT02E021HDonuts-de-galletasCLEAN01.jpg',
  );
  // lunches
  const salad = new Dishes(
    'Ensalada',
    200,
    ['Lechuga', 'tomate', 'atun'],
    6,

    'Vitaminas y proteinas',
    'https://saboreaunohoy.com/wp-content/uploads/Love-One-Today-featured-avocado-recipe-Springtime-Cobb-Salad-with-Avocado-Dijon-Dressing.jpg',
  );

  const pasta = new Dishes(
    'Pasta',
    300,
    ['Pasta', 'tomate', 'atun'],
    7,
    'Hidratos de carbono y proteinas',
    'https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Spinach-Tomato-Pasta-bowl-500x500.jpg',
  );

  const pizza = new Dishes(
    'Pizza',
    400,
    ['Harina', 'tomate', 'queso'],
    8,
    'Hidratos de carbono y proteinas',
    'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg',
  );

  const rice = new Dishes(
    'Arroz',
    500,
    ['Arroz', 'tomate', 'atun'],
    9,
    'Hidratos de carbono y proteinas',
    'https://images.aws.nestle.recipes/original/cc1ed7245ed521b41e14c8c7ca0fa9f8_foto_arroz.jpg',
  );

  const meat = new Dishes(
    'Carne',
    600,
    ['Carne', 'tomate', 'atun'],
    10,
    'Proteinas',
    'https://cdn.aarp.net/content/dam/aarp/health/healthy-living/2019/10/1140-rib-eye-steak-esp.imgcache.rev.web.1000.575.jpg',
  );

  // snacks
  const chips = new Dishes(
    'Patatas fritas',
    200,
    ['Patatas', 'aceite', 'sal'],
    11,
    'Hidratos de carbono',
    'https://comidaschilenas.com/wp-content/uploads/2020/01/Receta-de-papas-fritas-perfectas.jpg',
  );

  const chocolate = new Dishes(
    'Chocolate',
    300,
    ['Cacao', 'leche', 'azucar'],
    12,
    'Hidratos de carbono',
    'https://t1.uc.ltmcdn.com/es/posts/4/4/5/como_hacer_bombones_de_chocolate_23544_600.webp',
  );

  const iceCream = new Dishes(
    'Helado',
    400,
    ['Leche', 'azucar', 'huevo'],
    13,
    'Hidratos de carbono',
    'https://recetinas.com/wp-content/uploads/2021/06/helado-de-frutas-rojas-y-yogur.jpg',
  );

  const yogurt = new Dishes(
    'Yogur',
    500,
    ['Leche', 'azucar', 'huevo'],
    14,
    'Hidratos de carbono',
    'https://assets.unileversolutions.com/recipes-v2/236472.jpg',
  );

  const fruit = new Dishes(
    'Fruta',
    600,

    ['Fruta'],
    15,
    'Vitaminas',
    'https://www.fisenf.com/wp-content/uploads/2015/11/frutas-y-frutos-secos.jpg',
  );

  // save entities
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
