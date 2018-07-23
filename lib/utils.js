"use strict";
/**
 * This file is part of umeng-push-server-sdk.
 * Copyright(c) 2018 LnsooXD<LnsooXD@gmail.com>
 * MIT Licensed
 *
 * @format
 * @Author: LnsooXD<LnsooXD@gmail.com>
 * @Date: 2018-07-24 00:35:24
 * @Last Modified by: LnsooXD<LnsooXD@gmail.com>
 * @Last Modified time: 2018-07-24 00:35:48
 */
const crypto = require("crypto");
function md5Hex(value) {
    const hash = crypto.createHash('md5');
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
module.exports = {
    md5Hex,
    containsValue,
    readonlyProperty,
    readonlyPropertyObject
};
//# sourceMappingURL=utils.js.map