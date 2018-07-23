/**
 * This file is part of umeng-push-server-sdk.
 * Copyright(c) 2018 LnsooXD<LnsooXD@gmail.com>
 * MIT Licensed
 *
 * @format
 * @Author: LnsooXD<LnsooXD@gmail.com>
 * @Date: 2018-07-24 00:35:24
 * @Last Modified by: LnsooXD<LnsooXD@gmail.com>
 * @Last Modified time: 2018-07-24 01:23:13
 */
import UmengNotification = require('./UmengNotification');
declare class IOSNotification extends UmengNotification {
    constructor();
    setPredefinedKeyValue(key: string, value: any): boolean;
    setCustomizedField(key: string, value: string): boolean;
    setAlert(token: string): void;
    setBadge(badge: number): void;
    setSound(sound: string): void;
    setContentAvailable(contentAvailable: number): void;
    static isApsKey(key: string): boolean;
}
export = IOSNotification;
