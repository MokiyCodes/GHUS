// Simple cache
const _cache = {}
const cache = (cacheID,defaultCb,...cbParams)=>{
  _cache[cacheID]=_cache[cacheID] ?? (defaultCb ?? ()=>void 0)(...cbParams);
  return _cache[cacheID];
}
cache.raw = _cache;
cache.get = (cacheID)=>_cache[cacheID]
cache.set = (cacheID,value)=>_cache[cacheID]=value
