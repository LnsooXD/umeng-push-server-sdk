'use strict';

// Keys can be set in the root level

const ROOT_KEYS = ["appkey", "timestamp", "type", "device_tokens", "alias", "alias_type", "file_id", "filter", "production_mode", "feedback", "description", "thirdparty_id"];

// Keys can be set in the policy level
const POLICY_KEYS = ["start_time", "expire_time", "max_send_num"];

const utils = require('./utils');

class UmengNotification {

    constructor() {
        this.rootJson = {};
        this.appMasterSecret = null;
    }

    static isRootKey(key) {
        return utils.containsValue(ROOT_KEYS, key);
    }

    static isPolicyKey(key) {
        return utils.containsValue(POLICY_KEYS, key);
    }

    setPredefinedKeyValue(key, value) {}

    ///测试模式设置（true/empty: 正式模式, false: 测试模式）
    setProductionMode(mode) {
        if (arguments.length <= 0) {
            this.setProductionMode(true);
        } else {
            this.setPredefinedKeyValue("production_mode", mode);
        }
    }

    ///测试模式
    setTestMode() {
        this.setProductionMode(false);
    }

    getPostBody() {
        return JSON.stringify(this.rootJson);
    }

    ///发送消息描述，建议填写。
    setDescription(desc) {
        this.setPredefinedKeyValue("description", desc);
    }

    ///定时发送时间，若不填写表示立即发送。格式: "YYYY-MM-DD hh:mm:ss"。
    setStartTime(startTime) {
        this.setPredefinedKeyValue("start_time", startTime);
    }

    ///消息过期时间,格式: "YYYY-MM-DD hh:mm:ss"。
    setExpireTime(expireTime) {
        this.setPredefinedKeyValue("expire_time", expireTime);
    }

    ///发送限速，每秒发送的最大条数。
    setMaxSendNum(num) {
        this.setPredefinedKeyValue("max_send_num", num);
    }
}

exports = module.exports = UmengNotification;