'use strict';

const crypto = require('crypto');

function md5Hex(value) {
    let hash = crypto.createHash('md5');
    hash.update(value);
    return hash.digest('hex');
}

function containsValue(obj, value) {
    for (let i in obj) {
        if (obj.hasOwnProperty(i) && obj[i] == value) {
            return true;
        }
    }
    return false;
}

function readonlyProperty(obj, name, value) {
    Object.defineProperty(obj, name, {
        value: value,
        writable: false,
        configurable: false
    });
}

function readonlyPropertyObject(obj) {
    let result = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            readonlyProperty(result, key, obj[key]);
        }
    }
    return result;
}

exports = module.exports = {
    md5Hex: md5Hex,
    containsValue: containsValue,
    readonlyProperty: readonlyProperty,
    readonlyPropertyObject: readonlyPropertyObject
};




