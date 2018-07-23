/**
 * This file is part of umeng-push-server-sdk.
 * Copyright(c) 2018 LnsooXD<LnsooXD@gmail.com>
 * MIT Licensed
 *
 * @format
 * @Author: LnsooXD<LnsooXD@gmail.com>
 * @Date: 2018-07-24 00:35:24
 * @Last Modified by: LnsooXD<LnsooXD@gmail.com>
 * @Last Modified time: 2018-07-24 02:00:55
 */

import IOSNotification = require('../IOSNotification');

class IOSUnicast extends IOSNotification {
  constructor(appKey: string, appMasterSecret: string) {
    super();
    this.appMasterSecret = appMasterSecret;
    this.setPredefinedKeyValue('appkey', appKey);
    this.setPredefinedKeyValue('type', 'unicast');
  }

  public setDeviceToken(token: string) {
    this.setPredefinedKeyValue('device_tokens', token);
  }
}

export = IOSUnicast;
