function extractLatLong(geometriaWkt) {
<<<<<<< HEAD
    const match = geometriaWkt.match(/^POINT\s*\(\s*([-\d.]+)\s+([-\d.]+)\s*\)$/);
    if (match) {
        return {
            longitude: parseFloat(match[1]),
            latitude: parseFloat(match[2]),
        };
    }
    return null;
}

module.exports = {
    extractLatLong,
};
=======
  const match = geometriaWkt.match(/^POINT\s*\(\s*([-\d.]+)\s+([-\d.]+)\s*\)$/);
  if (match) {
    return {
      longitude: parseFloat(match[1]),
      latitude: parseFloat(match[2]),
    };
  }
  return null;
}

module.exports = {
  extractLatLong,
};
>>>>>>> 9f36ec1879030b2c6b5452007a57d8b36fe0b9f6
