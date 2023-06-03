import dayjs from "dayjs";
import DailyMenu from "../domain/entities/DailyMenu";
import loadDishes from "./loadDishes";

export default () => {
  //--------------------------------------------------------------------------------------------------
  //get dishes
  const dishes = loadDishes();
  const dailyMenus: DailyMenu[] = [];

  let startMenuDate = dayjs();
  for (let i = 0; i < dishes.length; i += 3) {
    const dailyMenu = new DailyMenu(
      startMenuDate.toDate(),
      dishes[i],
      dishes[i + 1],
      dishes[i + 2]
    );
    //save daily menus
    dailyMenus.push(dailyMenu);
    startMenuDate.add(1, "day");
  }

  return dailyMenus;
};
