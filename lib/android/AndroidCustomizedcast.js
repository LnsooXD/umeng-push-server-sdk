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
 * @Last Modified time: 2018-07-24 01:52:01
 */
const AndroidNotification = require("../AndroidNotification");
class AndroidCustomizedcast extends AndroidNotification {
    constructor(appKey, appMasterSecret) {
        super();
        this.appMasterSecret = appMasterSecret;
        this.setPredefinedKeyValue('appkey', appKey);
        this.setPredefinedKeyValue('type', 'customizedcast');
    }
    setAlias(alias, aliasType) {
        this.setPredefinedKeyValue('alias', alias);
        this.setPredefinedKeyValue('alias_type', aliasType);
    }
    setFileId(fileId, aliasType) {
        this.setPredefinedKeyValue('file_id', fileId);
        this.setPredefinedKeyValue('alias_type', aliasType);
    }
}
module.exports = AndroidCustomizedcast;
//# sourceMappingURL=AndroidCustomizedcast.js.map