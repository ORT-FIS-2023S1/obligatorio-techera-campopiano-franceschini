import Diner from "../shared/domain/entities/Diner";

describe("Diner", () => {
  let diner: Diner;

  beforeEach(() => {
    diner = new Diner("Juan", "Perez", "1");
  });

  it("should correctly initialize Diner instance", () => {
    expect(diner.name).toBe("Juan");
    expect(diner.surname).toBe("Perez");
    expect(diner.getIdentifier()).toBe("1");
  });

  it("should set name", () => {
    diner.name = "Pedro";
    expect(diner.name).toBe("Pedro");
  });

  it("should set surname", () => {
    diner.surname = "Rodriguez";
    expect(diner.surname).toBe("Rodriguez");
  });

  it("should return identifier as id", () => {
    const identifier = diner.getIdentifier();
    expect(identifier).toBe("1");
  });

  it("should return JSON representation", () => {
    const json = diner.toJSON();
    expect(json).toEqual({
      id: "1",
      name: "Juan",
      surname: "Perez",
    });
  });

  it("should create Diner from JSON", () => {
    const json = {
      id: "1",
      name: "Juan",
      surname: "Perez",
    };
    const diner = Diner.fromJSON(json);
    expect(diner).toBeInstanceOf(Diner);
    expect(diner.name).toBe("Juan");
    expect(diner.surname).toBe("Perez");
    expect(diner.getIdentifier()).toBe("1");
  });
});
