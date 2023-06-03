import Canteen from "../domain/entities/Canteen";
import DailyMenu from "../domain/entities/DailyMenu";
import ENTITIES from "../domain/types/entities";
import Cache from "../utils/cache";
import loadDailyMenu from "./loadDailyMenu";
import loadDishes from "./loadDishes";
import loadGroups from "./loadGroups";

export default () => {
  const dailyMenus = loadDailyMenu();
  const dishes = loadDishes();
  const groups = loadGroups();
  const canteenOne = new Canteen(
    1,
    "Canteen One",
    "Address One",
    "Telephone One",
    "Email One",
    groups,
    dishes,
    dailyMenus
  );

  //save canteens
  Cache.saveEntity<Canteen>(
    ENTITIES.CANTEENS,
    `${canteenOne.canteenNumber}`,
    canteenOne
  );
};
