exports = module.exports = AndroidUnicast;
const AndroidNotification = require('../AndroidNotification');

class AndroidUnicast extends AndroidNotification {
    constructor(appKey, appMasterSecret) {
        this.appMasterSecret = appMasterSecret;
        this.setPredefinedKeyValue("appkey", appKey);
        this.setPredefinedKeyValue("type", "unicast");
    }

    public setDeviceToken(token) {
        this.setPredefinedKeyValue("device_tokens", token);
    }
}