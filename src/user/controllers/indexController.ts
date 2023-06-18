import path from "path";
import Cache from "../../shared/utils/cache";
import ENTITIES from "../../shared/domain/types/entities";
import Diner from "../../shared/domain/entities/Diner";
import Canteen from "../../shared/domain/entities/Canteen";
import Dishes from "../../shared/domain/entities/Dishes";

export default (req, res) => {
  const user = res.locals.user;
  const diners = user.diners.map((id) => {
    return Cache.getEntity<Diner>(ENTITIES.DINERS, id).toJSON();
  });
  const canteens: Canteen[] = user.canteens.map((id) =>
    Cache.getEntity<Canteen>(ENTITIES.CANTEENS, id)
  );

  //obtengo platos destacados(menu del dia de cada comedor)
  const featuredDishes = getfeaturedDishes(canteens);

  res.render(path.join(__dirname, "../interface/views/home"), {
    user: user,
    data: {
      diners,
      canteens: canteens.map((canteen) => canteen.toJSON()),
      featuredDishes,
    },
    configs: {},
  });
};

const getfeaturedDishes = (canteens: Canteen[]) => {
  const featuredDishes = [];

  canteens.forEach((canteen) => {
    const dailyMenuObject = canteen.getDailyMenu();
    if (dailyMenuObject) {
      const breakfast = Cache.getEntity<Dishes>(
        ENTITIES.DISHES,
        dailyMenuObject.breakfast
      ).toJSON();

      const lunch = Cache.getEntity<Dishes>(
        ENTITIES.DISHES,
        dailyMenuObject.lunch
      ).toJSON();

      const snack = Cache.getEntity<Dishes>(
        ENTITIES.DISHES,
        dailyMenuObject.snack
      ).toJSON();

      const dishes = {
        canteenName: canteen.name,
        breakfast,
        lunch,
        snack,
      };
      featuredDishes.push(dishes);
    }
  });

  return featuredDishes;
};
