import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
dayjs.extend(weekday);
import DailyMenu from "../domain/entities/DailyMenu";
import Cache from "../utils/cache";
import ENTITIES from "../domain/types/entities";

export default () => {
  //--------------------------------------------------------------------------------------------------
  //get dishes
  const dishes = Cache.getEntities<DailyMenu>(ENTITIES.DISHES);

  let startMenuDate = dayjs().weekday(1);
  for (let i = 0; i < dishes.length; i += 3) {
    const dailyMenu = new DailyMenu(
      startMenuDate.toDate(),
      dishes[i].getIdentifier(),
      dishes[i + 1].getIdentifier(),
      dishes[i + 2].getIdentifier()
    );
    //save daily menus
    Cache.saveEntity<DailyMenu>(ENTITIES.DAILY_MENU, dailyMenu);
    startMenuDate = startMenuDate.add(1, "day");
  }
};
