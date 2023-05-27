import NodeCache from "node-cache";
import User from "../shared/domain/User";

//create a singelton cache class
export default class Cache {
  private static cache: NodeCache;

  private constructor() {
    Cache.cache = new NodeCache();
    //Dedault data
    this.loadDefaultData();
  }

  public static getInstance(): NodeCache {
    if (!Cache.cache) {
      new Cache();
    }
    return Cache.cache;
  }

  private loadDefaultData() {
    const user = new User("user@user.com", "user", "user");
    const admin = new User("admin@admin.com", "admin", "admin");

    //save default data
    Cache.cache.set(user.email, user);
    Cache.cache.set(admin.email, admin);
  }
}
