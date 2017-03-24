'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

const UmengNotification = require('./UmengNotification');
const utils = require('./utils');

const APS_KEYS = ["alert", "badge", "sound", "content-available"];

const isRootKey = UmengNotification.isRootKey;
const isPolicyKey = UmengNotification.isPolicyKey;

let IOSNotification = function (_UmengNotification) {
    _inherits(IOSNotification, _UmengNotification);

    function IOSNotification() {
        _classCallCheck(this, IOSNotification);

        return _possibleConstructorReturn(this, (IOSNotification.__proto__ || Object.getPrototypeOf(IOSNotification)).call(this));
    }

    _createClass(IOSNotification, [{
        key: 'setPredefinedKeyValue',
        value: function setPredefinedKeyValue(key, value) {
            if (isRootKey(key)) {
                // This key should be in the root level
                this.rootJson[key] = value;
            } else if (isApsKey(key)) {
                // This key should be in the aps level
                let apsJson = null;
                let payloadJson = null;
                if (this.rootJson.hasOwnProperty("payload")) {
                    payloadJson = this.rootJson["payload"];
                } else {
                    payloadJson = {};
                    this.rootJson["payload"] = payloadJson;
                }
                if (payloadJson.hasOwnProperty("aps")) {
                    apsJson = payloadJson["aps"];
                } else {
                    apsJson = {};
                    payloadJson["aps"] = apsJson;
                }
                apsJson[key] = value;
            } else if (isPolicyKey(key)) {
                // This key should be in the body level
                let policyJson = null;
                if (this.rootJson.hasOwnProperty("policy")) {
                    policyJson = this.rootJson["policy"];
                } else {
                    policyJson = {};
                    this.rootJson["policy"] = policyJson;
                }
                policyJson[key] = value;
            } else {
                if (key == "payload" || key == "aps" || key == "policy") {
                    throw new Error("You don't need to set value for " + key + " , just set values for the sub keys in it.");
                } else {
                    throw new Error("Unknownd key: " + key);
                }
            }
            return true;
        }

        // Set customized key/value for IOS notification

    }, {
        key: 'setCustomizedField',
        value: function setCustomizedField(key, value) {
            //rootJson.put(key, value);
            let payloadJson = null;
            if (this.rootJson.hasOwnProperty("payload")) {
                payloadJson = this.rootJson["payload"];
            } else {
                payloadJson = {};
                this.rootJson["payload"] = payloadJson;
            }
            payloadJson[key] = value;
            return true;
        }
    }, {
        key: 'setAlert',
        value: function setAlert(token) {
            this.setPredefinedKeyValue("alert", token);
        }
    }, {
        key: 'setBadge',
        value: function setBadge(badge) {
            this.setPredefinedKeyValue("badge", badge);
        }
    }, {
        key: 'setSound',
        value: function setSound(sound) {
            this.setPredefinedKeyValue("sound", sound);
        }
    }, {
        key: 'setContentAvailable',
        value: function setContentAvailable(contentAvailable) {
            this.setPredefinedKeyValue("content-available", contentAvailable);
        }
    }]);

    return IOSNotification;
}(UmengNotification);

function isApsKey(key) {
    return utils.containsValue(APS_KEYS, key);
}

IOSNotification.isApsKey = isApsKey;

exports = module.exports = IOSNotification;