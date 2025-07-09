const cache = new Map();

function getFromCache(idUnico) {
<<<<<<< HEAD
    return cache.get(idUnico);
}

function setToCache(idUnico, data) {
    cache.set(idUnico, data);
}

module.exports = {
    getFromCache,
    setToCache
};
=======
  return cache.get(idUnico);
}

function setToCache(idUnico, data) {
  cache.set(idUnico, data);
}

module.exports = {
  getFromCache,
  setToCache,
};
>>>>>>> 9f36ec1879030b2c6b5452007a57d8b36fe0b9f6
