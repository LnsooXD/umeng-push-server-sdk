"use strict";
/**
 * This file is part of umeng-push-server-sdk.
 * Copyright(c) 2018 LnsooXD<LnsooXD@gmail.com>
 * MIT Licensed
 *
 * @format
 * @Author: LnsooXD<LnsooXD@gmail.com>
 * @Date: 2018-07-24 00:35:24
 * @Last Modified by: LnsooXD<LnsooXD@gmail.com>
 * @Last Modified time: 2018-07-24 01:53:17
 */
const AndroidNotification = require("../AndroidNotification");
class AndroidFilecast extends AndroidNotification {
    constructor(appkey, appMasterSecret) {
        super();
        this.appMasterSecret = appMasterSecret;
        this.setPredefinedKeyValue('appkey', appkey);
        this.setPredefinedKeyValue('type', 'filecast');
    }
    setFileId(fileId) {
        this.setPredefinedKeyValue('file_id', fileId);
    }
}
module.exports = AndroidFilecast;
//# sourceMappingURL=AndroidFilecast.js.map