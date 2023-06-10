import loadCanteens from "./loadCanteens";
import loadDailyMenu from "./loadDailyMenu";
import loadDiners from "./loadDiners";
import loadDishes from "./loadDishes";
import loadGroups from "./loadGroups";
import loadUsers from "./loadUsers";

export default () => {
  //la predata se tiene que cargar en este orden!
  loadCanteens();
  loadDiners();
  loadDishes();
  loadGroups();
  loadDailyMenu();
  loadUsers();
};
