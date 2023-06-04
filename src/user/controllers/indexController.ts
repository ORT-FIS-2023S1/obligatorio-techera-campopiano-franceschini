import path from "path";
import Cache from "../../shared/utils/cache";
import ENTITIES from "../../shared/domain/types/entities";
import Diner from "../../shared/domain/entities/Diner";
import Canteen from "../../shared/domain/entities/Canteen";
import DailyMenu from "../../shared/domain/entities/DailyMenu";

export default (req, res) => {
  const user = res.locals.user;
  const diners = user.diners.map((id) => {
    return Cache.getEntity<Diner>(ENTITIES.DINERS, id).toJSON();
  });
  const canteens = user.canteens.map((id) => {
    const canteen = Cache.getEntity<Canteen>(ENTITIES.CANTEENS, id).toJSON();
    const dailyMenu = Cache.getEntity<DailyMenu>(
      ENTITIES.DAILY_MENU,
      canteen.dailyMenus[0]
    ).toJSON();
    return { ...canteen, dailyMenu };
  });

  res.render(path.join(__dirname, "../interface/views/home"), {
    user: user,
    data: {
      diners,
      canteens,
    },
    configs: {},
  });
};
