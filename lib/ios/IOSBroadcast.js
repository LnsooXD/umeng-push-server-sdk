'use strict';

const IOSNotification = require('../IOSNotification');

class IOSBroadcast extends IOSNotification {
    constructor(appKey, appMasterSecret) {
        super();
        this.appMasterSecret = appMasterSecret;
        this.setPredefinedKeyValue("appKey", appkey);
        this.setPredefinedKeyValue("type", "broadcast");
    }
}

exports = module.exports = IOSBroadcast;