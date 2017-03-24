exports = module.exports = IOSGroupcast;
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