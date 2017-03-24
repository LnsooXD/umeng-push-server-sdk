'use strict';

const IOSNotification = require('../IOSNotification');

class IOSUnicast extends IOSNotification {

    constructor(appKey, appMasterSecret) {
        super();
        this.appMasterSecret = appMasterSecret;
        this.setPredefinedKeyValue("appkey", appKey);
        this.setPredefinedKeyValue("type", "unicast");
    }

    setDeviceToken(token) {
        this.setPredefinedKeyValue("device_tokens", token);
    }

}

exports = module.exports = IOSUnicast;