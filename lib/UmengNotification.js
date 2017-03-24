'use strict';

// Keys can be set in the root level

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

const ROOT_KEYS = ["appkey", "timestamp", "type", "device_tokens", "alias", "alias_type", "file_id", "filter", "production_mode", "feedback", "description", "thirdparty_id"];

// Keys can be set in the policy level
const POLICY_KEYS = ["start_time", "expire_time", "max_send_num"];

const utils = require('./utils');

let UmengNotification = function () {
    function UmengNotification() {
        _classCallCheck(this, UmengNotification);

        this.rootJson = {};
        this.appMasterSecret = null;
    }

    _createClass(UmengNotification, [{
        key: "setPredefinedKeyValue",
        value: function setPredefinedKeyValue(key, value) {}

        ///测试模式设置（true/empty: 正式模式, false: 测试模式）

    }, {
        key: "setProductionMode",
        value: function setProductionMode(mode) {
            if (arguments.length <= 0) {
                this.setProductionMode(true);
            } else {
                this.setPredefinedKeyValue("production_mode", mode);
            }
        }

        ///测试模式

    }, {
        key: "setTestMode",
        value: function setTestMode() {
            this.setProductionMode(false);
        }
    }, {
        key: "getPostBody",
        value: function getPostBody() {
            return JSON.stringify(this.rootJson);
        }

        ///发送消息描述，建议填写。

    }, {
        key: "setDescription",
        value: function setDescription(desc) {
            this.setPredefinedKeyValue("description", desc);
        }

        ///定时发送时间，若不填写表示立即发送。格式: "YYYY-MM-DD hh:mm:ss"。

    }, {
        key: "setStartTime",
        value: function setStartTime(startTime) {
            this.setPredefinedKeyValue("start_time", startTime);
        }

        ///消息过期时间,格式: "YYYY-MM-DD hh:mm:ss"。

    }, {
        key: "setExpireTime",
        value: function setExpireTime(expireTime) {
            this.setPredefinedKeyValue("expire_time", expireTime);
        }

        ///发送限速，每秒发送的最大条数。

    }, {
        key: "setMaxSendNum",
        value: function setMaxSendNum(num) {
            this.setPredefinedKeyValue("max_send_num", num);
        }
    }]);

    return UmengNotification;
}();

function isRootKey(key) {
    return utils.containsValue(ROOT_KEYS, key);
}

function isPolicyKey(key) {
    return utils.containsValue(POLICY_KEYS, key);
}

UmengNotification.isRootKey = isRootKey;
UmengNotification.isPolicyKey = isPolicyKey;

exports = module.exports = UmengNotification;