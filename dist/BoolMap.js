"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var BoolMap = (function () {
  function BoolMap() {
    _classCallCheck(this, BoolMap);
  }

  _prototypeProperties(BoolMap, null, {
    set: {
      value: function set(key, value) {
        this[key] = value;
      },
      writable: true,
      configurable: true
    },
    setAll: {
      value: function setAll(value) {
        var _this = this;

        this.keys().forEach(function (key) {
          return _this.set(key, value);
        });
      },
      writable: true,
      configurable: true
    },
    get: {
      value: function get(key) {
        return this[key];
      },
      writable: true,
      configurable: true
    },
    toggle: {
      value: function toggle(key) {
        this[key] = !this[key];
      },
      writable: true,
      configurable: true
    },
    toggleAll: {
      value: function toggleAll() {
        this.keys().forEach(this.toggle.bind(this));
      },
      writable: true,
      configurable: true
    },
    isTrue: {
      value: function isTrue(key) {
        return !!this[key];
      },
      writable: true,
      configurable: true
    },
    isFalse: {
      value: function isFalse(key) {
        return !this[key];
      },
      writable: true,
      configurable: true
    },
    isAnyTrue: {
      value: function isAnyTrue() {
        var _this = this;

        return this.keys().some(function (key) {
          return !!_this[key];
        });
      },
      writable: true,
      configurable: true
    },
    isAnyFalse: {
      value: function isAnyFalse() {
        var _this = this;

        return this.keys().some(function (key) {
          return !_this[key];
        });
      },
      writable: true,
      configurable: true
    },
    isAllTrue: {
      value: function isAllTrue() {
        var _this = this;

        return this.keys().every(function (key) {
          return !!_this[key];
        });
      },
      writable: true,
      configurable: true
    },
    isAllFalse: {
      value: function isAllFalse() {
        var _this = this;

        return this.keys().every(function (key) {
          return !_this[key];
        });
      },
      writable: true,
      configurable: true
    },
    keys: {
      value: function keys() {
        return Object.keys(this);
      },
      writable: true,
      configurable: true
    },
    trueKeys: {
      value: function trueKeys() {
        var _this = this;

        return Object.keys(this).filter(function (key) {
          return _this[key];
        });
      },
      writable: true,
      configurable: true
    },
    falseKeys: {
      value: function falseKeys() {
        var _this = this;

        return Object.keys(this).filter(function (key) {
          return !_this[key];
        });
      },
      writable: true,
      configurable: true
    }
  });

  return BoolMap;
})();

module.exports = BoolMap;
//# sourceMappingURL=BoolMap.js.map