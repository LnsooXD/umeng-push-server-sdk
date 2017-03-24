'use strict';

const UmengNotification = require('./UmengNotification');
const utils = require('./utils');

const APS_KEYS = ["alert", "badge", "sound", "content-available"];

const isRootKey = UmengNotification.isRootKey;
const isPolicyKey = UmengNotification.isPolicyKey;

class IOSNotification extends UmengNotification {
    constructor() {
        super();
    }

    setPredefinedKeyValue(key, value) {
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
    setCustomizedField(key, value) {
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

    setAlert(token) {
        this.setPredefinedKeyValue("alert", token);
    }

    setBadge(badge) {
        this.setPredefinedKeyValue("badge", badge);
    }

    setSound(sound) {
        this.setPredefinedKeyValue("sound", sound);
    }

    setContentAvailable(contentAvailable) {
        this.setPredefinedKeyValue("content-available", contentAvailable);
    }
}

function isApsKey(key) {
    return utils.containsValue(APS_KEYS, key);
}

IOSNotification.isApsKey = isApsKey;

exports = module.exports = IOSNotification;