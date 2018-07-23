/**
 * This file is part of umeng-push-server-sdk.
 * Copyright(c) 2018 LnsooXD<LnsooXD@gmail.com>
 * MIT Licensed
 *
 * @format
 * @Author: LnsooXD<LnsooXD@gmail.com>
 * @Date: 2018-07-24 00:35:24
 * @Last Modified by: LnsooXD<LnsooXD@gmail.com>
 * @Last Modified time: 2018-07-24 01:48:49
 */
import UmengNotification = require('./UmengNotification');
import { AfterOpenAction } from './android/AfterOpenAction';
import { DisplayType } from './android/DisplayType';
declare class AndroidNotification extends UmengNotification {
    constructor();
    setPredefinedKeyValue(key: string, value: any): boolean;
    setExtraField(key: string, value: string): boolean;
    setDisplayType(type: DisplayType): void;
    setTicker(ticker: string): void;
    setTitle(title: string): void;
    setText(text: string): void;
    setBuilderId(builder_id: number): void;
    setIcon(icon: string): void;
    setLargeIcon(largeIcon: string): void;
    setImg(img: string): void;
    setPlayVibrate(play_vibrate: boolean): void;
    setPlayLights(play_lights: boolean): void;
    setPlaySound(play_sound: boolean | string): void;
    setSound(sound: string): void;
    setPlaySoundWithValue(sound: string): void;
    goAppAfterOpen(): void;
    goUrlAfterOpen(url: string): void;
    goActivityAfterOpen(activity: string): void;
    goCustomAfterOpen(custom: any): void;
    setAfterOpenAction(action: AfterOpenAction): void;
    setUrl(url: string): void;
    setActivity(activity: string): void;
    setCustomField(custom: any): void;
    static isPayloadKey(key: string): boolean;
    static isBodyKey(key: string): boolean;
}
export = AndroidNotification;
