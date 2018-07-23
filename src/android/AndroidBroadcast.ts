/**
 * This file is part of umeng-push-server-sdk.
 * Copyright(c) 2018 LnsooXD<LnsooXD@gmail.com>
 * MIT Licensed
 *
 * @format
 * @Author: LnsooXD<LnsooXD@gmail.com>
 * @Date: 2018-07-24 00:35:24
 * @Last Modified by: LnsooXD<LnsooXD@gmail.com>
 * @Last Modified time: 2018-07-24 01:50:53
 */

import AndroidNotification = require('../AndroidNotification');

class AndroidBroadcast extends AndroidNotification {
  constructor(appKey: string, appMasterSecret: string) {
    super();
    this.appMasterSecret = appMasterSecret;
    this.setPredefinedKeyValue('appkey', appKey);
    this.setPredefinedKeyValue('type', 'broadcast');
  }
}

export = AndroidBroadcast;
