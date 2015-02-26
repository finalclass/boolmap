var BoolMap = require('../dist/BoolMap');

describe('BoolMap', function () {

  var map;

  beforeEach(function () {
    map = new BoolMap();
  });

  it('sets the value', function () {
    map.set('abc', true);
    expect(map['abc']).toBe(true);
  });

  it('sets all the values', function () {
    map.set('1', false);
    map.set('2', false);
    map.setAll(true);
    expect(map['1']).toBe(true);
    expect(map['2']).toBe(true);
  });

  it('gets the value', function () {
    map.set('1', true);
    expect(map.get('1')).toBe(true);
  });

  it('toggles the value', function () {
    map.set('1', true);
    map.toggle('1');
    expect(map.get('1')).toBe(false);
  });

  it('toggles all values', function () {
    map.set('1', false);
    map.set('2', false);
    map.toggleAll(true);
    expect(map['1']).toBe(true);
    expect(map['2']).toBe(true);
  });

  it('checks if true', function () {
    map.set('1', true);
    map.set('2', false);
    expect(map.isTrue('1')).toBe(true);
    expect(map.isTrue('2')).toBe(false);
  });

  it('checks if any is true when there is one true', function () {
    map.set('1', true);
    map.set('2', false);

    expect(map.isAnyTrue()).toBe(true);
  });

  it('checks if any is true when there is no true', function () {
    map.set('1', false);
    map.set('2', false);

    expect(map.isAnyTrue()).toBe(false);
  });

  it('checks if any is false when there is one false', function () {
    map.set('1', true);
    map.set('2', false);

    expect(map.isAnyFalse()).toBe(true);
  });

  it('checks if any is false when there is no false', function () {
    map.set('1', true);
    map.set('2', true);

    expect(map.isAnyFalse()).toBe(false);
  });

  it('checks if all are true when there are all true', function () {
    map.set('1', true);
    map.set('2', true);

    expect(map.isAllTrue()).toBe(true);
  });

  it('checks if all are true when there are not all true', function () {
    map.set('1', false);
    map.set('2', true);

    expect(map.isAllTrue()).toBe(false);
  });

  it('checks if all are false when there are all false', function () {
    map.set('1', false);
    map.set('2', false);

    expect(map.isAllFalse()).toBe(true);
  });

  it('checks if all are false when there are not all false', function () {
    map.set('1', false);
    map.set('2', true);

    expect(map.isAllFalse()).toBe(false);
  });

  it('returns keys', function () {
    map.set('1', false);
    map.set('2', true);

    expect(map.keys()).toEqual(['1', '2']);
  });

  it('returns true keys', function () {
    map.set('1', true);
    map.set('2', false);
    map.set('3', true);
    map.set('4', false);

    expect(map.trueKeys()).toEqual(['1', '3']);
  });

  it('returns false keys', function () {
    map.set('1', true);
    map.set('2', false);
    map.set('3', true);
    map.set('4', false);

    expect(map.falseKeys()).toEqual(['2', '4']);
  });

});

