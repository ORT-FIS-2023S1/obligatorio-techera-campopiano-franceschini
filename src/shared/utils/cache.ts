import NodeCache from "node-cache";
import User from "../domain/entities/User";
import ENTITIES from "../domain/types/entities";

//create a singelton cache class
export default class Cache {
  private static cache: NodeCache;

  private constructor() {
    Cache.cache = new NodeCache();
    Cache.cache.on("set", (key, value) =>
      console.log(`Entities Updates`, Cache.cache.keys())
    );
    //Dedault data
    this.loadDefaultData();
  }

  /*
  public static getInstance(): NodeCache {
    if (!Cache.cache) {
      new Cache();
    }
    return Cache.cache;
  }
  */

  public static initialize() {
    if (!Cache.cache) {
      new Cache();
    }
  }

  public static saveEntity<T>(entityName: ENTITIES, key: string, value: T) {
    let entityMap;
    if (Cache.cache.has(entityName)) {
      //save data
      entityMap = Cache.cache.get(entityName);
    } else {
      //save the entity into cache
      entityMap = new Map<string, T>();
    }
    entityMap.set(key, value);
    Cache.cache.set(entityName, entityMap);
  }

  public static getEntity<T>(entityName: ENTITIES, key: string): T {
    if (Cache.cache.has(entityName)) {
      const entityMap: Map<string, T> = Cache.cache.get(entityName);
      return entityMap.get(key);
    }
    return null;
  }

  public static getEntities<T>(entityName: ENTITIES): T[] {
    if (Cache.cache.has(entityName)) {
      const entityMap: Map<string, T> = Cache.cache.get(entityName);
      return Array.from(entityMap.values());
    }
    return null;
  }

  private loadDefaultData() {
    const user = new User("user@user.com", "user", "user");
    const admin = new User("admin@admin.com", "admin", "admin");

    Cache.saveEntity<User>(ENTITIES.USERS, user.email, user);
    Cache.saveEntity<User>(ENTITIES.USERS, admin.email, admin);
  }
}
