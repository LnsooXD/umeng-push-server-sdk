exports = module.exports = AndroidFilecast;
const AndroidNotification = require('../AndroidNotification');

class AndroidFilecast extends AndroidNotification {

    constructor(appkey, appMasterSecret) {
        this.appMasterSecret = appMasterSecret;
        this.setPredefinedKeyValue("appkey", appkey);
        this.setPredefinedKeyValue("type", "filecast");
    }

    setFileId(fileId) {
        this.setPredefinedKeyValue("file_id", fileId);
    }

}