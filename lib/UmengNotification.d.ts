/**
 * This file is part of umeng-push-server-sdk.
 * Copyright(c) 2018 LnsooXD<LnsooXD@gmail.com>
 * MIT Licensed
 *
 * @format
 * @Author: LnsooXD<LnsooXD@gmail.com>
 * @Date: 2018-07-24 00:35:24
 * @Last Modified by: LnsooXD<LnsooXD@gmail.com>
 * @Last Modified time: 2018-07-24 01:19:57
 */
interface RootJsonType {
    [key: string]: any;
}
declare abstract class UmengNotification {
    protected readonly rootJson: RootJsonType;
    appMasterSecret: string;
    constructor();
    abstract setPredefinedKeyValue(key: string, value: any): boolean;
    setProductionMode(mode?: boolean): void;
    setTestMode(): void;
    getPostBody(): string;
    setDescription(desc: string): void;
    setStartTime(startTime: string): void;
    setExpireTime(expireTime: string): void;
    setMaxSendNum(num: number): void;
    setMipush(mipush: boolean): void;
    setMi_activity(mi_activity: boolean): void;
    static isRootKey(key: string): boolean;
    static isPolicyKey(key: string): boolean;
}
export = UmengNotification;
