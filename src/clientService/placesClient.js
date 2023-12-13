class Service {
  static getCoordinates(address) {
    return fetch(`/api/places?q=${encodeURIComponent(address)}`);
  }
}

export default Service;
