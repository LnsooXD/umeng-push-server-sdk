/**
 * This file is part of umeng-push-server-sdk.
 * Copyright(c) 2018 LnsooXD<LnsooXD@gmail.com>
 * MIT Licensed
 *
 * @format
 * @Author: LnsooXD<LnsooXD@gmail.com>
 * @Date: 2018-07-24 00:35:24
 * @Last Modified by: LnsooXD<LnsooXD@gmail.com>
 * @Last Modified time: 2018-07-24 01:54:35
 */
import AndroidNotification = require('../AndroidNotification');
declare class AndroidGroupcast extends AndroidNotification {
    constructor(appkey: string, appMasterSecret: string);
    setFilter(filter: any): void;
}
export = AndroidGroupcast;
