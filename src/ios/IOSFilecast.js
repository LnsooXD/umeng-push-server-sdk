'use strict';

const IOSNotification = require('../IOSNotification');


class IOSFilecast extends IOSNotification {
    constructor(appKey, appMasterSecret) {
        super();
        this.appMasterSecret = appMasterSecret;
        this.setPredefinedKeyValue("appkey", appKey);
        this.setPredefinedKeyValue("type", "filecast");
    }

    setFileId(fileId) {
        this.setPredefinedKeyValue("file_id", fileId);
    }
}

exports = module.exports = IOSFilecast;