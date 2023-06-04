import Canteen from "../domain/entities/Canteen";
import DailyMenu from "../domain/entities/DailyMenu";
import Dishes from "../domain/entities/Dishes";
import Group from "../domain/entities/Group";
import ENTITIES from "../domain/types/entities";
import Cache from "../utils/cache";

export default () => {
  const groups = Cache.getEntities<Group>(ENTITIES.GROUPS);
  const dishes = Cache.getEntities<Dishes>(ENTITIES.DISHES);
  const dailyMenus = Cache.getEntities<DailyMenu>(ENTITIES.DAILY_MENU);

  const canteenOne = new Canteen(
    "Canteen One",
    "Address One",
    "Telephone One",
    "Email One",
    groups.map((group) => group.getIdentifier()),
    dishes.map((dish) => dish.getIdentifier()),
    dailyMenus.map((dailyMenu) => dailyMenu.getIdentifier()),
    "1"
  );

  //save canteens
  Cache.saveEntity<Canteen>(ENTITIES.CANTEENS, canteenOne);
};
