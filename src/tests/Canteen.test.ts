import Canteen from "../shared/domain/entities/Canteen";
import DailyMenu from "../shared/domain/entities/DailyMenu";
import Dishes from "../shared/domain/entities/Dishes";
import Group from "../shared/domain/entities/Group";

describe("Canteen", () => {
  let canteen: Canteen;
  let dailyMenu: DailyMenu;
  let group: Group;
  let dish: Dishes;

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
      new Date(),
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
    canteen.addDailyMenu("555");
    expect(canteen.dailyMenus).toEqual(["555"]);
  });

  it("should add group", () => {
    canteen.addGroup("DDD");
    expect(canteen.groups).toEqual(["DDD"]);
  });

  it("should add dish", () => {
    canteen.addDishe("222");
    expect(canteen.menu).toEqual(["222"]);
  });

  // it('should return DailyMenu by id', () => {
  //   canteen.addDailyMenu(dailyMenu.getIdentifier());
  //   const result = canteen.getDailyMenu(dailyMenu.getIdentifier());
  //   expect(result).toBeInstanceOf(DailyMenu);
  //   expect(result.getIdentifier()).toBe(dailyMenu.getIdentifier());
  // });

  it("should throw error when DailyMenu does not belong to canteen", () => {
    expect(() => {
      canteen.getDailyMenu("999");
    }).toThrowError("El dailyMenu no pertenece a este comedor");
  });

  // it('should return Group by id', () => {
  //   canteen.addGroup(group.getIdentifier());
  //   const result = canteen.getGroupd(group.getIdentifier());
  //   expect(result).toBeInstanceOf(Group);
  //   expect(result.getIdentifier()).toBe(group.getIdentifier());
  // });

  it("should throw error when Group does not belong to canteen", () => {
    expect(() => {
      canteen.getGroupd("XXX");
    }).toThrowError("El group no pertenece a este comedor");
  });

  // it('should return Dish by id', () => {
  //   canteen.addDishe(dish.getIdentifier());
  //   const result = canteen.getDishe(dish.getIdentifier());
  //   expect(result).toBeInstanceOf(Dishes);
  //   expect(result.getIdentifier()).toBe(dish.getIdentifier());
  // });

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

  // it('should create Canteen instance from JSON', () => {
  //   const json = {
  //     id: '67890',
  //     address: 'Nueva Direccion cantina',
  //     telephone: '987654321',
  //     email: 'nuevacanteen@xd.com',
  //     menu: ['111', '222', '333'],
  //     dailyMenus: ['444', '555', '666'],
  //     groups: ['EEE', 'FFF', 'GGG'],
  //   };
  //   const newCanteen = Canteen.fromJSON(json);
  //   //expect(newCanteen.getIdentifier()).not.toBeUndefined();
  //   expect(newCanteen.name).toBe(json.id);
  //   expect(newCanteen.address).toBe(json.address);
  //   expect(newCanteen.telephone).toBe(json.telephone);
  //   expect(newCanteen.email).toBe(json.email);
  //   expect(newCanteen.menu).toEqual(json.menu);
  //   expect(newCanteen.dailyMenus).toEqual(json.dailyMenus);
  //   expect(newCanteen.groups).toEqual(json.groups);
  // });
});
