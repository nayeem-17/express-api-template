import cache from 'node-cache';
const myCache = new cache({
  deleteOnExpire: true,
  stdTTL: 5,
});

const createCache = (key: string, data: any) => {
  try {
    if (key != null && data != null) myCache.set(key, data);
    return true;
  } catch (error) {
    return false;
  }
};

const getCache = (key: string) => {
  try {
    if (key != null) {
      const data = myCache.get(key);
      if (data != null) return data;
    }
  } catch (error) {
    return null;
  }
};

const deleteAll = () => {
  try {
    myCache.flushAll();
  } catch (error) {
    return false;
  }
};

const stats = () => {
  return { stats: myCache.getStats() };
};

export { createCache, getCache, deleteAll, stats };
