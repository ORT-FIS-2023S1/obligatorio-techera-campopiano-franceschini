import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
dayjs.extend(weekday);
import Canteen from "../shared/domain/entities/Canteen";
import DailyMenu from "../shared/domain/entities/DailyMenu";
import Dishes from "../shared/domain/entities/Dishes";
import Group from "../shared/domain/entities/Group";
import ENTITIES from "../shared/domain/types/entities";
import Cache from "../shared/utils/cache";

describe("Canteen", () => {
  let canteen: Canteen;
  let dailyMenu: DailyMenu;
  let group: Group;
  let dish: Dishes;
  Cache.initialize();

  beforeEach(() => {
    canteen = new Canteen(
      "Nombre cantina",
      "Direccion cantina",
      "123456789",
      "canteen@xd.com",
      [],
      [],
      [],
      "12345"
    );

    dailyMenu = new DailyMenu(
      dayjs().weekday(1).toDate(),
      "Desayuno",
      "Almuerzo",
      "Snack",
      "54321"
    );

    group = new Group("Nombre grupo", "Descripcion grupo", [], "67890");

    dish = new Dishes(
      "Pizza",
      10.99,
      ["Harina", "queso", "tomate"],
      6,
      "200Kcal",
      "urlimagen"
    );

    Cache.saveEntity<Group>(ENTITIES.GROUPS, group);
    Cache.saveEntity<DailyMenu>(ENTITIES.DAILY_MENU, dailyMenu);
    Cache.saveEntity<Dishes>(ENTITIES.DISHES, dish);
  });

  it("should correctly initialize Canteen instance", () => {
    expect(canteen.name).toBe("Nombre cantina");
    expect(canteen.address).toBe("Direccion cantina");
    expect(canteen.telephone).toBe("123456789");
    expect(canteen.email).toBe("canteen@xd.com");
    expect(canteen.menu).toEqual([]);
    expect(canteen.dailyMenus).toEqual([]);
    expect(canteen.groups).toEqual([]);
    expect(canteen.getIdentifier()).toBe("12345");
  });

  it("should set name", () => {
    canteen.name = "Nuevo Nombre cantina";
    expect(canteen.name).toBe("Nuevo Nombre cantina");
  });

  it("should set address", () => {
    canteen.address = "Nueva Direccion cantina";
    expect(canteen.address).toBe("Nueva Direccion cantina");
  });

  it("should set telephone", () => {
    canteen.telephone = "987654321";
    expect(canteen.telephone).toBe("987654321");
  });

  it("should set email", () => {
    canteen.email = "newcanteen@xd.com";
    expect(canteen.email).toBe("newcanteen@xd.com");
  });

  it("should set menu", () => {
    canteen.menu = ["123", "456", "789"];
    expect(canteen.menu).toEqual(["123", "456", "789"]);
  });

  it("should set dailyMenus", () => {
    canteen.dailyMenus = ["111", "222", "333"];
    expect(canteen.dailyMenus).toEqual(["111", "222", "333"]);
  });

  it("should set groups", () => {
    canteen.groups = ["AAA", "BBB", "CCC"];
    expect(canteen.groups).toEqual(["AAA", "BBB", "CCC"]);
  });

  it("should return identifier as id", () => {
    const identifier = canteen.getIdentifier();
    expect(identifier).toBe("12345");
  });

  it("should add dailyMenu", () => {
    canteen.addDailyMenu(dailyMenu.getIdentifier());
    expect(canteen.dailyMenus).toEqual([dailyMenu.getIdentifier()]);
  });
  it("should return DailyMenu", () => {
    canteen.addDailyMenu(dailyMenu.getIdentifier());
    const result = canteen.getDailyMenu();
    expect(result).toBeInstanceOf(DailyMenu);
    expect(result.getIdentifier()).toBe(dailyMenu.getIdentifier());
  });

  it("should add group", () => {
    canteen.addGroup(group.getIdentifier());
    expect(canteen.groups).toEqual([group.getIdentifier()]);
  });

  it("should add dish", () => {
    canteen.addDishe(dish.getIdentifier());
    expect(canteen.menu).toEqual([dish.getIdentifier()]);
  });

  it("should throw error when DailyMenu does not belong to canteen", () => {
    expect(() => {
      canteen.getDailyMenu();
    }).toThrowError("No hay menú del día");
  });

  it("should return Group by id", () => {
    canteen.addGroup(group.getIdentifier());
    const result = canteen.getGroup(group.getIdentifier());
    expect(result).toBeInstanceOf(Group);
    expect(result.getIdentifier()).toBe(group.getIdentifier());
  });

  it("should throw error when Group does not belong to canteen", () => {
    expect(() => {
      canteen.getGroup("XXX");
    }).toThrowError("El group no pertenece a este comedor");
  });

  it("should return Dish by id", () => {
    canteen.addDishe(dish.getIdentifier());
    const result = canteen.getDishe(dish.getIdentifier());
    expect(result).toBeInstanceOf(Dishes);
    expect(result.getIdentifier()).toBe(dish.getIdentifier());
  });

  it("should throw error when Dish does not belong to canteen", () => {
    expect(() => {
      canteen.getDishe("333");
    }).toThrowError("El dishe no pertenece a este comedor");
  });

  it("should return JSON representation", () => {
    const json = canteen.toJSON();
    expect(json).toEqual({
      id: "12345",
      name: "Nombre cantina",
      address: "Direccion cantina",
      telephone: "123456789",
      email: "canteen@xd.com",
      menu: [],
      dailyMenus: [],
      groups: [],
    });
  });

  it("should create Canteen instance from JSON", () => {
    const json = {
      id: "67890",
      name: "Otra cantina",
      address: "Otra direccion",
      telephone: "987654321",
      email: "otracantina@xd.com",
      menu: ["111", "222", "333"],
      dailyMenus: ["555", "666", "777"],
      groups: ["DDD", "EEE", "FFF"],
    };

    const canteen = Canteen.fromJSON(json);

    expect(canteen.name).toBe("Otra cantina");
    expect(canteen.address).toBe("Otra direccion");
    expect(canteen.telephone).toBe("987654321");
    expect(canteen.email).toBe("otracantina@xd.com");
    expect(canteen.menu).toEqual(["111", "222", "333"]);
    expect(canteen.dailyMenus).toEqual(["555", "666", "777"]);
    expect(canteen.groups).toEqual(["DDD", "EEE", "FFF"]);
    expect(canteen.getIdentifier()).toBe("67890");
  });
});
