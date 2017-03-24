exports = module.exports = AndroidGroupcast;
const AndroidNotification = require('../AndroidNotification');

class AndroidGroupcast extends AndroidNotification {

    constructor(appkey, appMasterSecret) {
        this.appMasterSecret = appMasterSecret;
        this.setPredefinedKeyValue("appkey", appkey);
        this.setPredefinedKeyValue("type", "groupcast");
    }

    setFilter(filter) {
        this.setPredefinedKeyValue("filter", filter);
    }
}