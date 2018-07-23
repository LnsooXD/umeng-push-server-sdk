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
import PushClient = require('./PushClient');
import IOSNotification = require('./IOSNotification');
import AndroidNotification = require('./AndroidNotification');
declare const _default: {
    client: typeof PushClient;
    ios: {
        base: typeof IOSNotification;
        broadcast: any;
        customizedcast: any;
        filecast: any;
        groupcast: any;
        unicast: any;
    };
    android: {
        base: typeof AndroidNotification;
        broadcast: any;
        customizedcast: any;
        filecast: any;
        groupcast: any;
        unicast: any;
    };
};
export = _default;
