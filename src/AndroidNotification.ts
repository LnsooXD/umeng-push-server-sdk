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
import utils = require('./utils');
import {AfterOpenAction} from './android/AfterOpenAction';
import {DisplayType} from './android/DisplayType';

const {isRootKey, isPolicyKey} = UmengNotification;

// Keys can be set in the payload level
const PAYLOAD_KEYS = ['display_type'];

// Keys can be set in the body level
const BODY_KEYS = [
  'ticker',
  'title',
  'text',
  'builder_id',
  'icon',
  'largeIcon',
  'img',
  'play_vibrate',
  'play_lights',
  'play_sound',
  'sound',
  'after_open',
  'url',
  'activity',
  'custom'
];

class AndroidNotification extends UmengNotification {
  constructor() {
    super();
  }

  // static AfterOpenAction = AfterOpenAction;

  // static DisplayType = DisplayType;

  // Set key/value in the rootJson, for the keys can be set please see ROOT_KEYS, PAYLOAD_KEYS,
  // BODY_KEYS and POLICY_KEYS.
  public setPredefinedKeyValue(key: string, value: any): boolean {
    if (isRootKey(key)) {
      this.rootJson[key] = value;
    } else if (AndroidNotification.isPayloadKey(key)) {
      let payloadJson = null;
      if (this.rootJson.hasOwnProperty('payload')) {
        payloadJson = this.rootJson['payload'];
      } else {
        payloadJson = {};
        this.rootJson['payload'] = payloadJson;
      }
      payloadJson[key] = value;
    } else if (AndroidNotification.isBodyKey(key)) {
      let bodyJson = null;
      let payloadJson = null;
      // 'body' is under 'payload', so build a payload if it doesn't exist
      if (this.rootJson.hasOwnProperty('payload')) {
        payloadJson = this.rootJson['payload'];
      } else {
        payloadJson = {};
        this.rootJson['payload'] = payloadJson;
      }
      // Get body JSONObject, generate one if not existed
      if (payloadJson.hasOwnProperty('body')) {
        bodyJson = payloadJson['body'];
      } else {
        bodyJson = {};
        payloadJson['body'] = bodyJson;
      }
      bodyJson[key] = value;
    } else if (isPolicyKey(key)) {
      let policyJson = null;
      if (this.rootJson.hasOwnProperty('policy')) {
        policyJson = this.rootJson['policy'];
      } else {
        policyJson = {};
        this.rootJson['policy'] = policyJson;
      }
      policyJson[key] = value;
    } else {
      if (
        key == 'payload' ||
        key == 'body' ||
        key == 'policy' ||
        key == 'extra'
      ) {
        throw new Error(
          "You don't need to set value for " +
            key +
            ' , just set values for the sub keys in it.'
        );
      } else {
        throw new Error('Unknown key: ' + key);
      }
    }
    return true;
  }

  // Set extra key/value for Android notification
  public setExtraField(key: string, value: string) {
    let payloadJson = null;
    let extraJson = null;
    if (this.rootJson.hasOwnProperty('payload')) {
      payloadJson = this.rootJson['payload'];
    } else {
      payloadJson = {};
      this.rootJson['payload'] = payloadJson;
    }

    if (payloadJson.hasOwnProperty('extra')) {
      extraJson = payloadJson['extra'];
    } else {
      extraJson = {};
      payloadJson['extra'] = extraJson;
    }
    extraJson[key] = value;
    return true;
  }

  //
  public setDisplayType(type: DisplayType) {
    this.setPredefinedKeyValue('display_type', type + '');
  }

  ///通知栏提示文字
  public setTicker(ticker: string) {
    this.setPredefinedKeyValue('ticker', ticker);
  }

  ///通知标题
  public setTitle(title: string) {
    this.setPredefinedKeyValue('title', title);
  }

  ///通知文字描述
  public setText(text: string) {
    this.setPredefinedKeyValue('text', text);
  }

  ///用于标识该通知采用的样式。使用该参数时, 必须在SDK里面实现自定义通知栏样式。
  public setBuilderId(builder_id: number) {
    this.setPredefinedKeyValue('builder_id', builder_id);
  }

  ///状态栏图标ID, R.drawable.[smallIcon],如果没有, 默认使用应用图标。
  public setIcon(icon: string) {
    this.setPredefinedKeyValue('icon', icon);
  }

  ///通知栏拉开后左侧图标ID
  public setLargeIcon(largeIcon: string) {
    this.setPredefinedKeyValue('largeIcon', largeIcon);
  }

  ///通知栏大图标的URL链接。该字段的优先级大于largeIcon。该字段要求以http或者https开头。
  public setImg(img: string) {
    this.setPredefinedKeyValue('img', img);
  }

  ///收到通知是否震动,默认为"true"
  public setPlayVibrate(play_vibrate: boolean) {
    this.setPredefinedKeyValue('play_vibrate', `${play_vibrate}`);
  }

  ///收到通知是否闪灯,默认为"true"
  public setPlayLights(play_lights: boolean) {
    this.setPredefinedKeyValue('play_lights', `${play_lights}`);
  }

  ///收到通知是否发出声音,默认为"true"
  public setPlaySound(play_sound: boolean | string) {
    this.setPredefinedKeyValue('play_sound', `${play_sound}`);
  }

  ///通知声音，R.raw.[sound]. 如果该字段为空，采用SDK默认的声音
  setSound(sound: string) {
    this.setPredefinedKeyValue('sound', sound);
  }

  ///收到通知后播放指定的声音文件
  public setPlaySoundWithValue(sound: string) {
    this.setPlaySound(true);
    this.setSound(sound);
  }

  ///点击"通知"的后续行为，默认为打开app。
  public goAppAfterOpen() {
    this.setAfterOpenAction(AfterOpenAction.go_app);
  }

  public goUrlAfterOpen(url: string) {
    this.setAfterOpenAction(AfterOpenAction.go_url);
    this.setUrl(url);
  }

  public goActivityAfterOpen(activity: string) {
    this.setAfterOpenAction(AfterOpenAction.go_activity);
    this.setActivity(activity);
  }

  public goCustomAfterOpen(custom: any) {
    this.setAfterOpenAction(AfterOpenAction.go_custom);
    this.setCustomField(custom);
  }

  ///点击"通知"的后续行为，默认为打开app。原始接口
  public setAfterOpenAction(action: AfterOpenAction) {
    this.setPredefinedKeyValue('after_open', action);
  }

  public setUrl(url: string) {
    this.setPredefinedKeyValue('url', url);
  }

  public setActivity(activity: string) {
    this.setPredefinedKeyValue('activity', activity);
  }

  // can be a string or a json
  public setCustomField(custom: any) {
    this.setPredefinedKeyValue('custom', custom);
  }

  public static isPayloadKey(key: string): boolean {
    return utils.containsValue(PAYLOAD_KEYS, key);
  }

  public static isBodyKey(key: string): boolean {
    return utils.containsValue(BODY_KEYS, key);
  }
}

export = AndroidNotification;
