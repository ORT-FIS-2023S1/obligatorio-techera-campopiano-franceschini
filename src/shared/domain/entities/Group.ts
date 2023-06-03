import Diner from "./Diner";

export default class Group {
  constructor(
    private _name: string,
    private _description: string,
    private _members: Diner[]
  ) {}

  //getter
  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get members(): Diner[] {
    return this._members;
  }

  //setter
  set name(name: string) {
    this._name = name;
  }

  set description(description: string) {
    this._description = description;
  }

  set members(members: Diner[]) {
    this._members = members;
  }

  //methods
  addMember(diner: Diner): void {
    this._members.push(diner);
  }

  removeMember(diner: Diner): void {
    this._members = this._members.filter(
      (dinerInGroup) => dinerInGroup.dinerNumber !== diner.dinerNumber
    );
  }

  //toJSON
  toJSON(): any {
    return {
      name: this.name,
      description: this.description,
      members: this.members.map((member) => member.toJSON()),
    };
  }

  //fromJSON
  static fromJSON(groupJSON: any): Group {
    const group = new Group(
      groupJSON.name,
      groupJSON.description,
      groupJSON.members
    );
    return group;
  }
}
