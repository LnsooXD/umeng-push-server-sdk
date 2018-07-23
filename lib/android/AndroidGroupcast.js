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
 * @Last Modified time: 2018-07-24 01:54:35
 */
const AndroidNotification = require("../AndroidNotification");
class AndroidGroupcast extends AndroidNotification {
    constructor(appkey, appMasterSecret) {
        super();
        this.appMasterSecret = appMasterSecret;
        this.setPredefinedKeyValue('appkey', appkey);
        this.setPredefinedKeyValue('type', 'groupcast');
    }
    setFilter(filter) {
        this.setPredefinedKeyValue('filter', filter);
    }
}
module.exports = AndroidGroupcast;
//# sourceMappingURL=AndroidGroupcast.js.map