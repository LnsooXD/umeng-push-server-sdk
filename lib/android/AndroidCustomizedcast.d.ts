/**
 * This file is part of umeng-push-server-sdk.
 * Copyright(c) 2018 LnsooXD<LnsooXD@gmail.com>
 * MIT Licensed
 *
 * @format
 * @Author: LnsooXD<LnsooXD@gmail.com>
 * @Date: 2018-07-24 00:35:24
 * @Last Modified by: LnsooXD<LnsooXD@gmail.com>
 * @Last Modified time: 2018-07-24 01:52:01
 */
import AndroidNotification = require('../AndroidNotification');
declare class AndroidCustomizedcast extends AndroidNotification {
    constructor(appKey: string, appMasterSecret: string);
    setAlias(alias: string, aliasType: string): void;
    setFileId(fileId: string, aliasType: string): void;
}
export = AndroidCustomizedcast;
