'use strict';

const AndroidNotification = require('../AndroidNotification');

class AndroidUnicast extends AndroidNotification {
    constructor(appKey, appMasterSecret) {
        this.appMasterSecret = appMasterSecret;
        this.setPredefinedKeyValue("appkey", appKey);
        this.setPredefinedKeyValue("type", "unicast");
    }

    setDeviceToken(token) {
        this.setPredefinedKeyValue("device_tokens", token);
    }
}

exports = module.exports = AndroidUnicast;