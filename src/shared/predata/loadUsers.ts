import Canteen from "../domain/entities/Canteen";
import Diner from "../domain/entities/Diner";
import User from "../domain/entities/User";
import ENTITIES from "../domain/types/entities";
import Cache from "../utils/cache";

export default () => {
  const user = new User("user@user.com", "user", "user");
  const admin = new User("admin@admin.com", "admin", "admin");

  //add canteens
  const canteenOne = Cache.getEntity<Canteen>(ENTITIES.CANTEENS, "1");
  Cache.getEntities<Diner>(ENTITIES.DINERS).forEach((diner) => {
    user.addDiner(diner.getIdentifier());
  });

  user.addCanteen(canteenOne.getIdentifier());

  //save users
  Cache.saveEntity<User>(ENTITIES.USERS, user);
  Cache.saveEntity<User>(ENTITIES.USERS, admin);
};
