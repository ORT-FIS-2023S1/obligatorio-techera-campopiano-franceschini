import dayjs from "dayjs";
import DailyMenu from "../domain/entities/DailyMenu";
import Cache from "../utils/cache";
import ENTITIES from "../domain/types/entities";

export default () => {
  //--------------------------------------------------------------------------------------------------
  //get dishes
  const dishes = Cache.getEntities<DailyMenu>(ENTITIES.DISHES);

  let startMenuDate = dayjs();
  for (let i = 0; i < dishes.length; i += 3) {
    const dailyMenu = new DailyMenu(
      startMenuDate.toDate(),
      dishes[i].getIdentifier(),
      dishes[i + 1].getIdentifier(),
      dishes[i + 2].getIdentifier()
    );
    //save daily menus
    Cache.saveEntity<DailyMenu>(ENTITIES.DAILY_MENU, dailyMenu);
    startMenuDate.add(1, "day");
  }
};
