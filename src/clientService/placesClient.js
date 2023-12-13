class Service {
  static getCoordinates() {
    return fetch('/api/places');
  }
}

export default Service;
