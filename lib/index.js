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
 * @Last Modified time: 2018-07-24 01:49:30
 */
const PushClient = require("./PushClient");
const IOSNotification = require("./IOSNotification");
const AndroidNotification = require("./AndroidNotification");
module.exports = {
    client: PushClient,
    ios: {
        base: IOSNotification,
        broadcast: require('./ios/IOSBroadcast'),
        customizedcast: require('./ios/IOSCustomizedcast'),
        filecast: require('./ios/IOSFilecast'),
        groupcast: require('./ios/IOSGroupcast'),
        unicast: require('./ios/IOSUnicast')
    },
    android: {
        base: AndroidNotification,
        broadcast: require('./android/AndroidBroadcast'),
        customizedcast: require('./android/AndroidCustomizedcast'),
        filecast: require('./android/AndroidFilecast'),
        groupcast: require('./android/AndroidGroupcast'),
        unicast: require('./android/AndroidUnicast')
    }
};
//# sourceMappingURL=index.js.map