BoolMap
=======

Hash object for boolean values with extra usefull functions written in ES6, compiled to ES5

## installation

    npm install boolmap

## Usage

    var BoolMap = require('boolmap');
    var map = new BoolMap();
    map.set('abc', true);
    map.get('abc'); //true

## API

__set(key:string, value:boolean):void__

Sets the key

__setAll(value:boolean):void__

Set all present keys to value


__get(key:string):boolean__

Get the boolean value of key.

__toggle(key:string):void__

Toggle the value of key


__toggleAll():void__

Toggle all keys

__isTrue(key:string):boolean__

Returns true if the key is true

__isAnyTrue():boolean__

Returns true if at least one key in map is true

__isAnyFalse():boolean__

Returns true if at least one key in map is false

__isAllTrue():boolean__

Returns true only if all keys in map are true

__isAllFalse():boolean__

Returns false only if all keys in map are false

__keys():string[]__

Returns keys as array of strings


__trueKeys():string[]__

Returns keys (array of strings) that are true

__falseKeys():string[]__

Returns keys (array of strings) that are false

__Array access__

You work with BoolMap as with an array:

```js

var map = new BoolMap();
map.set('abc', true);
expect(map['abc']).toBe(true);

```
