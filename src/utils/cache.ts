import cache from 'node-cache';
class Cache {
  private cache: cache;
  constructor() {
    this.cache = new cache({
      deleteOnExpire: true,
      stdTTL: 5,
    });
  }
  public createCache = (key: string, data: any) => {
    try {
      if (key != null && data != null) this.cache.set(key, data);
      return true;
    } catch (error) {
      return false;
    }
  };

  public getCache = (key: string) => {
    try {
      if (key != null) {
        const data = this.cache.get(key);
        if (data != null) return data;
      }
    } catch (error) {
      return null;
    }
  };

  public deleteAll = () => {
    try {
      this.cache.flushAll();
    } catch (error) {
      return false;
    }
  };

  public stats = () => {
    return { stats: this.cache.getStats() };
  };
}

export default Cache;
