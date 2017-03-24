exports = module.exports = IOSFilecast;
const IOSNotification = require('../IOSNotification');


class IOSFilecast extends IOSNotification {
    constructor(appKey, appMasterSecret) {
        this.appMasterSecret = appMasterSecret;
        this.setPredefinedKeyValue("appkey", appKey);
        this.setPredefinedKeyValue("type", "filecast");
    }

    public setFileId(fileId) {
        this.setPredefinedKeyValue("file_id", fileId);
    }
}