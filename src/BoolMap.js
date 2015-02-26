class BoolMap {
  set(key, value) {
    this[key] = value;
  }
  setAll(value) {
    this.keys().forEach(key => this.set(key, value));
  }
  get(key) {
    return this[key];
  }
  toggle(key) {
    this[key] = !this[key];
  }
  toggleAll() {
    this.keys().forEach(this.toggle.bind(this));
  }
  isTrue(key) {
    return !!this[key];
  }
  isAnyTrue() {
    return this.keys().some(key => !!this[key]);
  };
  isAnyFalse() {
    return this.keys().some(key =>!this[key]);
  }
  isAllTrue() {
    return this.keys().every(key =>!!this[key]);
  };
  isAllFalse() {
    return this.keys().every(key =>!this[key]);
  }
  keys() {
    return Object.keys(this);
  }
  trueKeys() {
    return Object.keys(this).filter(key => this[key]);
  }
  falseKeys() {
    return Object.keys(this).filter(key =>!this[key]);
  }
}

export default BoolMap;
