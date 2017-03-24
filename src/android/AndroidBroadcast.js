exports = module.exports = AndroidBroadcast;
const AndroidNotification = require('../AndroidNotification');

class AndroidBroadcast extends AndroidNotification {
    constructor(appKey, appMasterSecret) {
        this.appMasterSecret = appMasterSecret;
        this.setPredefinedKeyValue("appkey", appKey);
        this.setPredefinedKeyValue("type", "broadcast");
    }

}