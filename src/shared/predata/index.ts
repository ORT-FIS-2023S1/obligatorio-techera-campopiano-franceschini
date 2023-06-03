import loadCanteens from "./loadCanteens";
import loadDailyMenu from "./loadDailyMenu";
import loadDiners from "./loadDiners";
import loadDishes from "./loadDishes";
import loadUsers from "./loadUsers";

export default () => {
  //la predata se tiene que cargar en este orden!
  loadCanteens();
  loadUsers();
};
