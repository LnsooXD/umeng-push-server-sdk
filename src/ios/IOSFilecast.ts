/**
 * This file is part of umeng-push-server-sdk.
 * Copyright(c) 2018 LnsooXD<LnsooXD@gmail.com>
 * MIT Licensed
 *
 * @format
 * @Author: LnsooXD<LnsooXD@gmail.com>
 * @Date: 2018-07-24 00:35:24
 * @Last Modified by: LnsooXD<LnsooXD@gmail.com>
 * @Last Modified time: 2018-07-24 01:59:23
 */

import IOSNotification = require('../IOSNotification');

class IOSFilecast extends IOSNotification {
  constructor(appKey: string, appMasterSecret: string) {
    super();
    this.appMasterSecret = appMasterSecret;
    this.setPredefinedKeyValue('appkey', appKey);
    this.setPredefinedKeyValue('type', 'filecast');
  }

  public setFileId(fileId: string) {
    this.setPredefinedKeyValue('file_id', fileId);
  }
}

export = IOSFilecast;
