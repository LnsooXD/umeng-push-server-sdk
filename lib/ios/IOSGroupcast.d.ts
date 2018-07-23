/**
 * This file is part of umeng-push-server-sdk.
 * Copyright(c) 2018 LnsooXD<LnsooXD@gmail.com>
 * MIT Licensed
 *
 * @format
 * @Author: LnsooXD<LnsooXD@gmail.com>
 * @Date: 2018-07-24 00:35:24
 * @Last Modified by: LnsooXD<LnsooXD@gmail.com>
 * @Last Modified time: 2018-07-24 02:00:10
 */
import IOSNotification = require('../IOSNotification');
declare class IOSGroupcast extends IOSNotification {
    constructor(appKey: string, appMasterSecret: string);
    setFilter(filter: any): void;
}
export = IOSGroupcast;
