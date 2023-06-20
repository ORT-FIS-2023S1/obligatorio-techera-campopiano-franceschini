import Canteen from '../domain/entities/Canteen';
import DailyMenu from '../domain/entities/DailyMenu';
import Dishes from '../domain/entities/Dishes';
import Group from '../domain/entities/Group';
import ENTITIES from '../domain/types/entities';
import Cache from '../utils/cache';

export default () => {
  const groups = Cache.getEntities<Group>(ENTITIES.GROUPS);
  const dishes = Cache.getEntities<Dishes>(ENTITIES.DISHES);
  const dailyMenus = Cache.getEntities<DailyMenu>(ENTITIES.DAILY_MENU);

  const canteenOne = new Canteen(
    'Colegio Francisco Espínola',
    'Dr. Horacio Garcia Lagos, Paso Carrasco, Canelones, Uruguay',
    '2604 6988',
    'info@franciscoespinola.edu.uy',
    groups.map((group) => group.getIdentifier()),
    dishes.map((dish) => dish.getIdentifier()),
    dailyMenus.map((dailyMenu) => dailyMenu.getIdentifier()),
    '1',
  );

  const canteenTwo = new Canteen(
    'Colegio y Liceo Hans Christian Andersen',
    'Av. Millán 4392, 12900 Montevideo, Departamento de Montevideo',
    '2355 0928',
    'consultas@hca.com.uy',
    [],
    [],
    [],
    '2',
  );

  // save canteens
  Cache.saveEntity<Canteen>(ENTITIES.CANTEENS, canteenOne);
  Cache.saveEntity<Canteen>(ENTITIES.CANTEENS, canteenTwo);
};
