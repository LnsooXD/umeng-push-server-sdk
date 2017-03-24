'use strict';

const IOSNotification = require('../IOSNotification');

class IOSGroupcast extends IOSNotification {

    constructor(appKey, appMasterSecret) {
        this.appMasterSecret = appMasterSecret;
        this.setPredefinedKeyValue("appkey", appKey);
        this.setPredefinedKeyValue("type", "groupcast");
    }

    setFilter(filter) {
        this.setPredefinedKeyValue("filter", filter);
    }
}

exports = module.exports = IOSGroupcast;