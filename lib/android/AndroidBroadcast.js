'use strict';

const AndroidNotification = require('../AndroidNotification');

class AndroidBroadcast extends AndroidNotification {
    constructor(appKey, appMasterSecret) {
        super();
        this.appMasterSecret = appMasterSecret;
        this.setPredefinedKeyValue("appkey", appKey);
        this.setPredefinedKeyValue("type", "broadcast");
    }

}

exports = module.exports = AndroidBroadcast;