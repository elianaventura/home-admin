class Service {
  static getCoordinates() {
    return fetch('/places');
  }
}

export default Service;
