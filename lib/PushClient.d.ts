/**
 * This file is part of umeng-push-server-sdk.
 * Copyright(c) 2018 LnsooXD<LnsooXD@gmail.com>
 * MIT Licensed
 *
 * @format
 * @Author: LnsooXD<LnsooXD@gmail.com>
 * @Date: 2018-07-24 00:35:24
 * @Last Modified by: LnsooXD<LnsooXD@gmail.com>
 * @Last Modified time: 2018-07-24 01:07:48
 */
import UmengNotification = require('./UmengNotification');
declare class PushClient {
    constructor();
    send(msg: UmengNotification): Promise<boolean>;
    uploadContents(appKey: string, appMasterSecret: string, contents: string): Promise<string>;
}
export = PushClient;
