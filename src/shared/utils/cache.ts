import NodeCache from "node-cache";
import ENTITIES from "../domain/types/entities";

//create a singelton cache class
export default class Cache {
  private static cache: NodeCache;

  private constructor() {
    Cache.cache = new NodeCache();
    Cache.cache.on("set", (key, value) =>
      console.log(`Entity ${key} saved`, Cache.cache.keys())
    );
  }

  public static initialize() {
    if (!Cache.cache) {
      new Cache();
    }
  }

  public static saveEntity<T>(entityName: ENTITIES, value: T | any) {
    let entityMap;
    if (Cache.cache.has(entityName)) {
      //save data
      entityMap = Cache.cache.get(entityName);
    } else {
      //save the entity into cache
      entityMap = new Map<string, T>();
    }
    entityMap.set(value.getIdentifier(), value);
    Cache.cache.set(entityName, entityMap);
  }

  public static updateEntity<T>(entityName: ENTITIES, value: T | any) {
    if (Cache.cache.has(entityName)) {
      const entityMap: Map<string, T> = Cache.cache.get(entityName);
      entityMap.set(value.getIdentifier(), value);
      Cache.cache.set(entityName, entityMap);
    }
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
    return [];
  }
  public static getEntitiesByKeys<T>(
    entityName: ENTITIES,
    keys: string[]
  ): T[] {
    if (Cache.cache.has(entityName)) {
      const entityMap: Map<string, T> = Cache.cache.get(entityName);
      const entities: T[] = Array.from(entityMap.values());
      return entities.filter((entity: any) =>
        keys.includes(entity.getIdentifier())
      );
    }
    return [];
  }
}
