exports = module.exports = AndroidCustomizedcast;
const AndroidNotification = require('../AndroidNotification');

class AndroidCustomizedcast extends AndroidNotification {

    constructor(appKey, appMasterSecret) {
        this.appMasterSecret = appMasterSecret;
        this.setPredefinedKeyValue("appkey", appKey);
        this.setPredefinedKeyValue("type", "customizedcast");
    }

    setAlias(alias, aliasType) {
        this.setPredefinedKeyValue("alias", alias);
        this.setPredefinedKeyValue("alias_type", aliasType);
    }

    setFileId(fileId, aliasType) {
        this.setPredefinedKeyValue("file_id", fileId);
        this.setPredefinedKeyValue("alias_type", aliasType);
    }

}