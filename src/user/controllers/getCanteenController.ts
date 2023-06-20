import Canteen from '../../shared/domain/entities/Canteen';
import DailyMenu from '../../shared/domain/entities/DailyMenu';
import Dishes from '../../shared/domain/entities/Dishes';
import ENTITIES from '../../shared/domain/types/entities';
import Cache from '../../shared/utils/cache';
import path from 'path';
import dayjs from 'dayjs';

export default (req, res) => {
  const user = res.locals.user;
  const id = req.params.id;

  const canteen = Cache.getEntity<Canteen>(ENTITIES.CANTEENS, id);
  if (!canteen) {
    return res.render(path.join(__dirname, '../../shared/interface/views/404'));
  }

  // obtengo platos destacados(menu del dia del comedor)
  const dailyMenu = getDailyMenu(canteen);

  // obtengo menu semanal
  const weeklyMenu = getWeeklyMenu(canteen);

  // obtengo el menu
  const menu = getMenu(canteen);

  res.render(path.join(__dirname, '../interface/views/canteen'), {
    user: user,
    data: {
      canteen: canteen.toJSON(),
      dailyMenu,
      weeklyMenu,
      menu,
    },
    configs: {},
  });
};

const getDailyMenu = (canteen: Canteen) => {
  const dailyMenuObject = canteen.getDailyMenu();
  if (dailyMenuObject) {
    const breakfast = Cache.getEntity<Dishes>(
      ENTITIES.DISHES,
      dailyMenuObject.breakfast,
    ).toJSON();

    const lunch = Cache.getEntity<Dishes>(
      ENTITIES.DISHES,
      dailyMenuObject.lunch,
    ).toJSON();

    const snack = Cache.getEntity<Dishes>(
      ENTITIES.DISHES,
      dailyMenuObject.snack,
    ).toJSON();

    const dishes = {
      breakfast,
      lunch,
      snack,
    };
    return dishes;
  }
  return null;
};

const getWeeklyMenu = (canteen: Canteen) => {
  const days = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
  ];

  const weeklyMenu = canteen.getWeeklyMenu().map((menu: DailyMenu) => {
    const day = dayjs(menu.date).day();
    return {
      ...menu.toJSON(),
      day: days[day],
      breakfast: Cache.getEntity<Dishes>(
        ENTITIES.DISHES,
        menu.breakfast,
      ).toJSON(),
      lunch: Cache.getEntity<Dishes>(ENTITIES.DISHES, menu.lunch).toJSON(),
      snack: Cache.getEntity<Dishes>(ENTITIES.DISHES, menu.snack).toJSON(),
    };
  });

  return weeklyMenu;
};

const getMenu = (canteen: Canteen) => {
  const dishes = Cache.getEntitiesByKeys<Dishes>(ENTITIES.DISHES, canteen.menu);

  return dishes.map((dish) => dish.toJSON());
};
