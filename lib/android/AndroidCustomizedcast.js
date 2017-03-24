exports = module.exports = AndroidCustomizedcast;
const AndroidNotification = require('../AndroidNotification');


class AndroidCustomizedcast extends AndroidNotification {

    constructor(appKey, appMasterSecret) {
        this.appMasterSecret = appMasterSecret;
        this.setPredefinedKeyValue("appkey", appKey);
        this.setPredefinedKeyValue("type", "customizedcast");
    }

    public setAlias(alias, aliasType) {
        this.setPredefinedKeyValue("alias", alias);
        this.setPredefinedKeyValue("alias_type", aliasType);
    }

    public setFileId(fileId, aliasType) {
        this.setPredefinedKeyValue("file_id", fileId);
        this.setPredefinedKeyValue("alias_type", aliasType);
    }

}
