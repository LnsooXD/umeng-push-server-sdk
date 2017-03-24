exports = module.exports = IOSCustomizedcast;
const IOSNotification = require('../IOSNotification');

class IOSCustomizedcast extends IOSNotification {
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