exports = module.exports = IOSBroadcast;
const IOSNotification = require('../IOSNotification');

class IOSBroadcast extends IOSNotification {
    constructor(appKey, appMasterSecret) {
        this.appMasterSecret = appMasterSecret;
        this.setPredefinedKeyValue("appKey", appkey);
        this.setPredefinedKeyValue("type", "broadcast");
    }
}