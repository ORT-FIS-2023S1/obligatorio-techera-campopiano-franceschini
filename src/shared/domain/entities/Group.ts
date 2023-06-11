import { v4 as uuid } from "uuid";
import Cache from "../../utils/cache";
import ENTITIES from "../types/entities";
import Diner from "./Diner";

export default class Group {
  private _id: string;
  constructor(
    private _name: string,
    private _description: string,
    private _members: string[],
    _id?: string
  ) {
    //generate id
    !_id ? (this._id = uuid()) : (this._id = _id);
  }

  //getter
  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get members(): string[] {
    return this._members;
  }

  //setter
  set name(name: string) {
    this._name = name;
  }

  set description(description: string) {
    this._description = description;
  }

  set members(members: string[]) {
    this._members = members;
  }

  //methods

  getIdentifier(): string {
    return this._id;
  }

  addMember(diner: string): void {
    this._members.push(diner);
  }

  removeMember(id: string): void {
    this._members = this._members.filter((member) => member !== id);
  }

  getMembers(): Diner[] {
    return Cache.getEntitiesByKeys<Diner>(ENTITIES.DINERS, this._members);
  }

  //toJSON
  toJSON(): any {
    return {
      name: this.name,
      description: this.description,
      members: this.members,
    };
  }

  //fromJSON
  static fromJSON(groupJSON: any): Group {
    const group = new Group(
      groupJSON.id,
      groupJSON.name,
      groupJSON.description,
      groupJSON.members
    );
    return group;
  }
}
