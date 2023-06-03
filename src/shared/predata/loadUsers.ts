import Canteen from "../domain/entities/Canteen";
import User from "../domain/entities/User";
import ENTITIES from "../domain/types/entities";
import Cache from "../utils/cache";

export default () => {
  const user = new User("user@user.com", "user", "user");
  const admin = new User("admin@admin.com", "admin", "admin");

  //add canteens
  const canteenOne = Cache.getEntity<Canteen>(ENTITIES.CANTEENS, "1");
  const dinersCanteenOne = canteenOne.groups[0].members;

  dinersCanteenOne.forEach((diner) => {
    user.addDiner(diner);
  });
  user.addCanteen(canteenOne);

  //save users
  Cache.saveEntity<User>(ENTITIES.USERS, user.email, user);
  Cache.saveEntity<User>(ENTITIES.USERS, admin.email, admin);
};
