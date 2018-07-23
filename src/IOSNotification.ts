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
import utils = require('./utils');

const {isRootKey, isPolicyKey} = UmengNotification;

const APS_KEYS = ['alert', 'badge', 'sound', 'content-available'];

class IOSNotification extends UmengNotification {
  constructor() {
    super();
  }

  public setPredefinedKeyValue(key: string, value: any): boolean {
    if (isRootKey(key)) {
      // This key should be in the root level
      this.rootJson[key] = value;
    } else if (IOSNotification.isApsKey(key)) {
      // This key should be in the aps level
      let apsJson = null;
      let payloadJson = null;
      if (this.rootJson.hasOwnProperty('payload')) {
        payloadJson = this.rootJson['payload'];
      } else {
        payloadJson = {};
        this.rootJson['payload'] = payloadJson;
      }
      if (payloadJson.hasOwnProperty('aps')) {
        apsJson = payloadJson['aps'];
      } else {
        apsJson = {};
        payloadJson['aps'] = apsJson;
      }
      apsJson[key] = value;
    } else if (isPolicyKey(key)) {
      // This key should be in the body level
      let policyJson = null;
      if (this.rootJson.hasOwnProperty('policy')) {
        policyJson = this.rootJson['policy'];
      } else {
        policyJson = {};
        this.rootJson['policy'] = policyJson;
      }
      policyJson[key] = value;
    } else {
      if (key == 'payload' || key == 'aps' || key == 'policy') {
        throw new Error(
          "You don't need to set value for " +
            key +
            ' , just set values for the sub keys in it.'
        );
      } else {
        throw new Error('Unknownd key: ' + key);
      }
    }
    return true;
  }

  // Set customized key/value for IOS notification
  public setCustomizedField(key: string, value: string) {
    //rootJson.put(key, value);
    let payloadJson = null;
    if (this.rootJson.hasOwnProperty('payload')) {
      payloadJson = this.rootJson['payload'];
    } else {
      payloadJson = {};
      this.rootJson['payload'] = payloadJson;
    }
    payloadJson[key] = value;
    return true;
  }

  public setAlert(token: string) {
    this.setPredefinedKeyValue('alert', token);
  }

  public setBadge(badge: number) {
    this.setPredefinedKeyValue('badge', badge);
  }

  public setSound(sound: string) {
    this.setPredefinedKeyValue('sound', sound);
  }

  public setContentAvailable(contentAvailable: number) {
    this.setPredefinedKeyValue('content-available', contentAvailable);
  }

  public static isApsKey(key: string): boolean {
    return utils.containsValue(APS_KEYS, key);
  }
}

export = IOSNotification;
